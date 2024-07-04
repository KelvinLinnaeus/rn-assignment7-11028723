import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import { Text, View } from "@/components/system/Themed";
import CartItem from "@/components/CartItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "@/components/ProductCard";
import { useCart } from "@/context/cartContext";

const Cart = () => {
  const { cartItems, loadCart, totalAmount, handleRemoveFromCart } = useCart();

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Container class="px-0">
      <View className="flex-1 pb-20 px-6">
        {cartItems?.length !== 0 && (
          <Text className="text-center text-xl mb-4">CHECKOUT</Text>
        )}

        <CartItem
          total={totalAmount}
          cartItems={cartItems}
          removeFromCart={handleRemoveFromCart}
        />
      </View>

      <View className="">
        <Footer title="Checkout" />
      </View>
    </Container>
  );
};

export default Cart;
