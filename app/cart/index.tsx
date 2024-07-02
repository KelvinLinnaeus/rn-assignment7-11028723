import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import { Text } from "@/components/system/Themed";
import CartItem from "@/components/CartItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "@/components/ProductCard";

const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);
  useEffect(() => {
    const loadCart = async () => {
      try {
        const cartData = await AsyncStorage.getItem("cart");
        if (cartData) {
          setCart(JSON.parse(cartData));
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadCart();
  }, []);

  const removeFromCart = async (product: Product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  console.log(cart);
  return (
    <Container>
      <Text className="text-center text-xl mb-4">CHECKOUT</Text>
      <CartItem cartItems={cart} removeFromCart={removeFromCart} />
    </Container>
  );
};

export default Cart;
