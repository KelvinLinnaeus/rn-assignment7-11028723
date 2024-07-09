import { FlatList, Image, TouchableOpacity } from "react-native";
import { ProductType } from "./ProductCard";
import { View, Text } from "@/components/system/Themed";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface CartItemProps {
  cartItems: ProductType[] | null;
  removeFromCart: (item: ProductType) => void;
  total: number;
}

const CartItem: React.FC<CartItemProps> = ({
  cartItems,
  removeFromCart,
  total,
}) => {
  return (
    <View>
      {cartItems?.length === 0 ? (
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text className="text-center text-xl">Cart is Empty</Text>
          <View className="flex-row mt-4  justify-center items-center space-x-3">
            <Ionicons name="arrow-back-outline" size={24} color="grey" />
            <Text className="text-slate-600  ">
              Go back and Continue Shopping
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cartItems}
            renderItem={({
              item,
              index,
            }: {
              item: ProductType;
              index: number;
            }) => (
              <View key={index} className="flex-row space-x-4 mb-6">
                <View className="w-[100px] h-[100px] m-auto">
                  <Image
                    resizeMode="cover"
                    className="w-full object-fill h-full rounded-sm"
                    source={{ uri: item.image }}
                  />
                </View>
                <View className="flex-1">
                  <Text className="font-bold mt-3">{item.title}</Text>
                  <Text className="text-slate-600">{item.category}</Text>
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
            <Text className="text-orange-600">$ {total.toFixed(2)}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default CartItem;
