import { View, Text } from "@/components/system/Themed";
import { useCart } from "@/context/cartContext";
import { truncateText } from "@/utils/truncateText";
// import { products } from "@/utils/Products";
import axios from "axios";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, TouchableOpacity } from "react-native";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: any;
};

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

const ProductCard = () => {
  const { handleAddToCart } = useCart();
  const [products, setProducts] = useState<ProductType | null>(null);

  const fetchProducts = async () => {
    await axios.get("https://fakestoreapi.com/products").then((res: any) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
            className="mb-5 pb-3  w-[150px] overflow-hidden p-1 h-[350px]"
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

            <Link href={`/product_details/${item.id}`}>
              <Text className="font-bold mt-3 ">
                {truncateText(item.title)}
              </Text>
              <Text className="text-slate-600 h-14">
                {truncateText(item.description)}
              </Text>
              <Text className="text-orange-700 my-1">$ {item.price}</Text>
            </Link>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductCard;
