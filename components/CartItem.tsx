import { FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Product } from "./ProductCard";
import { View, Text } from "@/components/system/Themed";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface CartItemProps {
  cartItems: Product[];
  removeFromCart: (item: Product) => void;
  total: number;
}

const CartItem: React.FC<CartItemProps> = ({
  cartItems,
  removeFromCart,
  total,
}) => {
  return (
    <View>
      {cartItems.length === 0 ? (
        <TouchableOpacity onPress={() => router.push("/home")}>
          <Text className="text-center text-xl">Cart is Empty</Text>
          <View className="flex-row text-center mt-4  justify-end self-end items-center space-x-3">
            <Ionicons name="arrow-back-outline" size={24} color="grey" />
            <Text className="text-slate-600  ">
              Go back and Continue Shopping
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cartItems}
            renderItem={({ item, index }) => (
              <View key={index} className="flex-row space-x-4 mb-6">
                <View className="w-[120px] h-[150px]">
                  <Image
                    className="w-full h-full object-contain rounded-sm"
                    source={item.image}
                  />
                </View>
                <View className="justify-center">
                  <Text className="font-bold mt-3">{item.name}</Text>
                  <Text className="text-slate-600">{item.description}</Text>
                  <Text className="text-orange-700 my-1">$ {item.price}</Text>
                  <TouchableOpacity
                    onPress={() => removeFromCart(item)}
                    className="self-end"
                  >
                    <Image
                      className=""
                      resizeMode="contain"
                      source={require("@/assets/items/remove.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
          <View className="flex-row justify-between">
            <Text>EST. TOTAL</Text>
            <Text className="text-orange-600">$ {total}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default CartItem;
