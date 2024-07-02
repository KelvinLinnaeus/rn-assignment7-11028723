import React from "react";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import { Text } from "@/components/system/Themed";
import CartItem from "@/components/CartItem";

const Cart = () => {
  return (
    <Container>
      <Text className="text-center text-xl mb-4">CHECKOUT</Text>
      <CartItem />
    </Container>
  );
};

export default Cart;
