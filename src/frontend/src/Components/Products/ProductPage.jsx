import React from "react";
import Product from "./Product";
import Grid2 from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import { useOutletContext } from "react-router-dom";

export default function ProductPage() {
  const { addToCart } = useOutletContext();
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Container fixed sx={{ padding: "2rem" }}>
      <Grid2 container spacing={4}>
        {products.map((product, index) => (
          <Grid2 key={index} xs={12} sm={6} md={4} lg={3} size={3}>
            <Product product={product} addToCart={addToCart} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}
