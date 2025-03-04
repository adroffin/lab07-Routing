import React, { useState } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AppRoutes from "./AppRoutes";

// Funcion donde se unifican todos los componentes
/* Se definio el carrito de compras con un estado el cual empieza como un array vacio,
para la funcion de addToCart se actualiza el array buscando si el producto ya se encuentra en el mismo,
si esta ya existe se suma 1 a la cantidad y sino solo realiza una copia del carro actual para agregarle el producto y asignarle la cantidad de 1.
Para eliminar un producto del carrito, filtra el carrito en ese momento y se elimina el producto con el productName que reciba la funcion.
La funcion AppContent es la que le muestra al usuario la interfaz.*/
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.name === product.name);
      if (existingProduct) {
        return prevCart.map((p) =>
          p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productName) => {
    setCart((prevCart) => prevCart.filter((p) => p.name !== productName));
  };

  return (
    <Router>
      <AppContent
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </Router>
  );
}

function AppContent({ cart, addToCart, removeFromCart }) {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="a"
            style={{ color: "white", textDecoration: "none", flexGrow: 1 }}
          >
            Product Dashboard
          </Typography>
          <IconButton
            color="inherit"
            aria-label="cart"
            onClick={() => navigate("/cart")}
          >
            <Badge
              badgeContent={cart.reduce((acc, item) => acc + item.quantity, 0)}
              color="secondary"
            >
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: "20px" }}>
        <AppRoutes
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </Container>
    </>
  );
}

export default App;
