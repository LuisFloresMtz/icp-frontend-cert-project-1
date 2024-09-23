import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ({ product, addToCart, identity }) {
  console.log(identity);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        image={
          product.image ? product.image : "https://via.placeholder.com/150"
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Price: {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            if (identity.getPrincipal().isAnonymous()) {
              alert("Inicia sesion para agregar al carrito");
            } else {
              addToCart(product);
            }
          }}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
