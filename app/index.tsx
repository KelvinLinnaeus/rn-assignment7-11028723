import React, { useEffect, useState } from "react";
import { Text, View } from "@/components/system/Themed";
import Container from "@/components/Container";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import ProductCard, { ProductType } from "@/components/ProductCard";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res: any) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container class="pb-20 flex-1">
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

      <ProductCard products={products} loading={loading} />
    </Container>
  );
};

export default Home;
