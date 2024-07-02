import { View, Text } from "@/components/system/Themed";
import { products } from "@/utils/Products";
import React from "react";
import { FlatList, Image, TouchableOpacity } from "react-native";

const ProductCard = () => {
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
            <TouchableOpacity className="absolute bottom-[135px] right-3">
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
