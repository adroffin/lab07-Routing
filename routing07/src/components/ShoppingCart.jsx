import React from "react";
import {
  Container,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

// Funcion que maneja el componente del carrito de compras que el usuario puede ver y gestionar.
/* Le llega el estado del carro y la funcion para remover productos, a cada articulo del carro (en ese estado)
se le hace el .map para mostrarlo con su nombre y cantidad hasta dicho momento.
Se maneja el IconButton con el evento correspondiente, de igual forma devuelve si el carro se encuentra vacio. */

function ShoppingCart({ cart, removeFromCart }) {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <List>
        {cart.map((item) => (
          <ListItem key={item.name} divider>
            <ListItemText primary={`${item.name} - ${item.quantity} pcs`} />

            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => removeFromCart(item.name)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      {cart.length === 0 && (
        <Typography variant="body1">Your cart is empty.</Typography>
      )}
      <br />
      <Button variant="contained" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </Container>
  );
}

export default ShoppingCart;
