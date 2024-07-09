import { View, Text } from "@/components/system/Themed";
import { useCart } from "@/context/cartContext";
import { truncateText } from "@/utils/truncateText";
import { Link, router } from "expo-router";
import { FlatList, Image, TouchableOpacity } from "react-native";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductCard = ({ products }: { products: any }) => {
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
        renderItem={({ item }: { item: ProductType }) => (
          <View
            key={item.id}
            className="mb-4 pb-3  w-[150px] px-3 overflow-hidden p-1 h-[320px]"
          >
            <View>
              <Image
                source={{ uri: item.image }}
                className="relative w-full h-40 rounded-sm"
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

            <TouchableOpacity
              className=""
              onPress={() => router.push(`/product_details/${item.id}`)}
            >
              <Text className="font-bold mt-3 ">
                {truncateText(item.title)}
              </Text>
              <Text className="text-slate-600 h-14">
                {truncateText(item.description)}
              </Text>
              <Text className="text-orange-700 my-1">$ {item.price}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductCard;
