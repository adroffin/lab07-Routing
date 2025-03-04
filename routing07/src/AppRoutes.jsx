import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

// Funcion que maneja las rutas hacia cada componente utilizado.

/* Recibe el estado del carro y las funcion de add y remove, esto es para que dichos componentes puedan usar las funciones sin modificar el esatdo como tal y sin tenerlo definido.*/
function AppRoutes({ cart, addToCart, removeFromCart }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/product/:productName"
        element={<ProductList addToCart={addToCart} />}
      />
      <Route
        path="/cart"
        element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />}
      />
    </Routes>
  );
}

export default AppRoutes;
