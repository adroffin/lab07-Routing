import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { products } from "../data/productData";

// Componente que muestra la pagina principal de la tienda
/* Se importa el array que contiene los productos con su precio y a este se le hace un .map para mostrar el nombre del producto,
se le da la funcion de link y se le define a donde llevara con el to, configurando el cambio del URL*/
function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>
      <List>
        {products.map((product) => (
          <ListItem
            key={product.name}
            button
            component={Link}
            to={`/product/${product.name}`}
          >
            <ListItemText primary={product.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Home;
