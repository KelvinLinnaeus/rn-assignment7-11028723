import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import Container from "@/components/Container";
import axios from "axios";
import { ProductType } from "@/components/ProductCard";
import { truncateText } from "@/utils/truncateText";
import AddToBasketFooter from "@/components/footer/AddToBasketFooter";

const ProductDetails = ({}) => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<ProductType | null>(null);

  const fetchProductDetails = async () => {
    await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <Container class="p-0">
      <View className="h-60 px-1">
        <Image className="w-full  h-full" source={{ uri: product?.image }} />
      </View>

      <View className="p-4 flex-1 space-y-2">
        <View className="flex-row justify-between">
          <Text className="font-bold text-[20px] flex-1">{product?.title}</Text>
          <View className="w-10 items-center justify-center">
            <Image source={require("@/assets/items/Export.png")} />
          </View>
        </View>

        <Text className="capitalize">{product?.category}</Text>
        <Text className="text-orange-600">$ {product?.price}</Text>

        <Text className="font-bold text-[17px] ">Materials</Text>
        <Text className="text-slate-800">{product?.description}</Text>
      </View>

      <View className="justify-self-end ">
        <AddToBasketFooter />
      </View>
    </Container>
  );
};

export default ProductDetails;
