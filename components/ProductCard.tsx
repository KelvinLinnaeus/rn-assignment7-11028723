import { View, Text } from "@/components/system/Themed";
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
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = async (item: Product) => {
    if (cart.find((cartItem) => cartItem.id === item.id)) return;
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  // console.log(cart);

  return (
    <View className="">
      <FlatList
        numColumns={2}
        data={products}
        showsVerticalScrollIndicator={false}
        renderItem={({ index, item }) => (
          <TouchableOpacity
            key={index}
            className=" mr-4 mb-5 pb-3  w-[174px]  "
          >
            <Image
              source={item.image}
              className="relative w-full"
              resizeMode="cover"
            />
            <TouchableOpacity
              // disabled
              onPress={() => addToCart(item)}
              className="absolute bottom-[135px] right-3"
            >
              <Image
                className=""
                resizeMode="contain"
                source={require("@/assets/items/add_circle.png")}
              />
            </TouchableOpacity>
            <Text className="font-bold mt-3">{item.name}</Text>
            <Text className="text-slate-600">{item.description}</Text>
            <Text className="text-orange-700 my-1">$ {item.price}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductCard;
