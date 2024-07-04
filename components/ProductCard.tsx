import { View, Text } from "@/components/system/Themed";
import { useCart } from "@/context/cartContext";
import { products } from "@/utils/Products";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { FlatList, Image, TouchableOpacity } from "react-native";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: any;
};

const ProductCard = () => {
  const { handleAddToCart } = useCart();

  return (
    <View className="">
      <FlatList
        columnWrapperStyle={{
          alignItems: "center",
          justifyContent: "space-evenly",
          display: "flex",
          flexWrap: "wrap",
        }}
        numColumns={2}
        data={products}
        showsVerticalScrollIndicator={false}
        renderItem={({ index, item }) => (
          <View
            key={index}
            className="mb-5 pb-3  w-[180px] overflow-hidden p-1 h-[350px]"
          >
            <View>
              <Image
                source={item.image}
                className="relative w-full rounded-sm"
                resizeMode="cover"
              />
              <TouchableOpacity
                // disabled
                onPress={() => handleAddToCart(item)}
                className="absolute bottom-2 right-2"
              >
                <Image
                  className=""
                  resizeMode="contain"
                  source={require("@/assets/items/add_circle.png")}
                />
              </TouchableOpacity>
            </View>

            <View>
              <Text className="font-bold mt-3">{item.name}</Text>
              <Text className="text-slate-600">{item.description}</Text>
              <Text className="text-orange-700 my-1">$ {item.price}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductCard;
