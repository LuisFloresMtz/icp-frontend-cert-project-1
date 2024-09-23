import React, { useState, useEffect, useContext } from "react";
import Product from "./Product";
import Grid2 from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import { CartContext } from "../Cart/CartContext";
import { useOutletContext } from "react-router-dom";

export default function ProductPage() {
  const { addToCart, backend } = useContext(CartContext);
  const context = useOutletContext();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const result = await backend.getProducts();
      if (result) {
        setProducts(result);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Container fixed sx={{ padding: "2rem" }}>
      <Grid2 container spacing={4}>
        {products ? (
          products.map((product, index) => (
            <Grid2 key={index} xs={12} sm={6} md={4} lg={3} size={3}>
              <Product
                product={product}
                addToCart={addToCart}
                identity={context.identity}
              />
            </Grid2>
          ))
        ) : (
          <p> No hay productos</p>
        )}
      </Grid2>
    </Container>
  );
}
