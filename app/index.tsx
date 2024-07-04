import React from "react";
import { Text, View } from "@/components/system/Themed";
import Container from "@/components/Container";
import { Image, TouchableOpacity } from "react-native";
import ProductCard from "@/components/ProductCard";

const Home = () => {
  return (
    <Container class="pb-20">
      <View className="flex-row mb-4">
        <Text className="flex-1 text-xl">OUR STORY</Text>
        <View className="flex-row  justify-between w-[100px]">
          <TouchableOpacity className="bg-slate-200 rounded-full p-2">
            <Image source={require("@/assets/items/ListView.png")} />
          </TouchableOpacity>

          <TouchableOpacity className="bg-slate-200 rounded-full p-2">
            <Image source={require("@/assets/items/Filter.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <ProductCard />
    </Container>
  );
};

export default Home;
