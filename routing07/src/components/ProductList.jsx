import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { products } from "../data/productData";

// Funcion que maneja las acciones al momento de hacer clic en un producto en la Product List de Home.
/* Se define un useParams para obtener el nombre del producto desde el URL y un useNavigate para manejar los eventos en los botones
De igual forma. se muestran las features definidas en el array de products y se usa la funcion addToCart al boton correspondiente*/
function ProductList({ addToCart }) {
  let { productName } = useParams();
  const navigate = useNavigate();
  const product = products.find((c) => c.name === productName);

  if (!product) {
    return <Typography variant="h5">Product not found</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4">{product.name}</Typography>
      <List>
        {product.features.map((feature) => (
          <ListItem key={feature}>
            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="success"
        onClick={() => addToCart(product)}
      >
        Add to the cart
      </Button>
      <br />
      <br />
      <Button variant="contained" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </Container>
  );
}

export default ProductList;
