import { View, Text } from "@/components/system/Themed";
import { Link, router } from "expo-router";
import React from "react";

const Checkout = () => {
  return (
    <View className="flex-1 justify-center  items-center">
      <Text className="capitalize">Checkout coming soon</Text>
      <Text className="text-slate-600" onPress={() => router.back()}>
        Click to go back
      </Text>
    </View>
  );
};

export default Checkout;
