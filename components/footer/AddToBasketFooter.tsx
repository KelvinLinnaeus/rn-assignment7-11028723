import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColor } from "../system/Themed";

const AddToBasketFooter = () => {
  return (
    <View
      className={`flex-row items-center  h-[50px] justify-center bg-black ${
        themeColor === "black" && "border-t-2 border-white px-4"
      }`}
    >
      <View className="flex-1 flex-row items-center space-x-3">
        <TouchableOpacity>
          <Image
            tintColor={"white"}
            source={require("@/assets/items/Plus.png")}
          />
        </TouchableOpacity>
        <Text className="text-white">ADD TO BASKET</Text>
      </View>
      <Image tintColor={"white"} source={require("@/assets/items/Heart.png")} />
    </View>
  );
};

export default AddToBasketFooter;
