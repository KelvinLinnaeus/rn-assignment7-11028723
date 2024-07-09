import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColor } from "../system/Themed";
import { useCart } from "@/context/cartContext";
import { ProductType } from "../ProductCard";

interface AddToBasketFooterProps {
  product: any;
}

const AddToBasketFooter: React.FC<AddToBasketFooterProps> = ({ product }) => {
  const { handleAddToCart } = useCart();

  return (
    <View
      className={`flex-row items-center  h-[50px] justify-center bg-black ${
        themeColor === "black" && "border-t-2 border-white px-4"
      }`}
    >
      <View className="flex-1 flex-row items-center space-x-3">
        <TouchableOpacity
          onPress={() => handleAddToCart(product)}
          className="flex-row flex-1 space-x-4"
        >
          <Image
            tintColor={"white"}
            source={require("@/assets/items/Plus.png")}
          />
          <Text className="text-white">ADD TO BASKET</Text>
        </TouchableOpacity>
      </View>
      <Image
        className="mr-2"
        tintColor={"white"}
        source={require("@/assets/items/Heart.png")}
      />
    </View>
  );
};

export default AddToBasketFooter;
