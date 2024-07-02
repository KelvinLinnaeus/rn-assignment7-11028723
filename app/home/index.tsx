import React from "react";
import {
  Text,
  View,
} from "@/components/system/Themed";
import Container from "@/components/Container";
import { Image, TouchableOpacity } from "react-native";

const Home = () => {
  return (
    <Container>
      <View className="flex-row">
        <Text className="flex-1 text-xl">OUR STORY</Text>
        <View className="flex-row  justify-between w-[100px]">
          <TouchableOpacity className="bg-slate-200 rounded-full p-3">
            <Image source={require("@/assets/items/ListView.png")} />
          </TouchableOpacity>

          <TouchableOpacity className="bg-slate-200 rounded-full p-3">
            <Image source={require("@/assets/items/Filter.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default Home;
