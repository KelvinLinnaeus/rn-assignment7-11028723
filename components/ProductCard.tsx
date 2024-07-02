import { View, Text } from "@/components/system/Themed";
import React from "react";
import { FlatList, Image, TouchableOpacity } from "react-native";

const ProductCard = () => {
  const products = [
    {
      id: "prod1",
      name: "Office Wear",
      description: "reversible angora cardigan",
      price: 120,
      image: require("@/assets/items/dress1.png"),
    },
    {
      id: "prod2",
      name: "Black",
      description: "reversible angora cardigan",
      price: 120,
      image: require("@/assets/items/dress2.png"),
    },
    {
      id: "prod3",
      name: "Church Wear",
      description: "reversible angora cardigan",
      price: 120,
      image: require("@/assets/items/dress3.png"),
    },
    {
      id: "prod4",
      name: "Lamerei",
      description: "reversible angora cardigan",
      price: 120,
      image: require("@/assets/items/dress4.png"),
    },
    {
      id: "prod5",
      name: "21WN",
      description: "reversible angora cardigan",
      price: 120,
      image: require("@/assets/items/dress5.png"),
    },
    {
      id: "prod6",
      name: "Lopo",
      description: "reversible angora cardigan",
      price: 120,
      image: require("@/assets/items/dress6.png"),
    },
    {
      id: "prod7",
      name: "Lame",
      description: "reversible angora cardigan",
      price: 120,
      image: require("@/assets/items/dress1.png"),
    },
  ];
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
