import {
  Image,
  ImageSourcePropType,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text, themeColor, View } from "@/components/system/Themed";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import Container from "@/components/Container";
import axios from "axios";
import { ProductType } from "@/components/ProductCard";
import { truncateText } from "@/utils/truncateText";
import AddToBasketFooter from "@/components/footer/AddToBasketFooter";
import { useCart } from "@/context/cartContext";

const ProductDetails = ({}) => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [toggleOpen, setToggleOpen] = useState(false);
  const { handleAddToCart } = useCart();

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
      <ScrollView>
        <View className="h-72 px-1">
          <Image className="w-full h-full" source={{ uri: product?.image }} />
        </View>

        <View className="p-4 flex-1 space-y-2">
          <View className="flex-row justify-between">
            <Text className="font-bold text-[20px] flex-1">
              {product?.title}
            </Text>
            <View className="w-10 items-center justify-center">
              <Image
                tintColor={themeColor}
                source={require("@/assets/items/Export.png")}
              />
            </View>
          </View>

          <View className="mb-2">
            <Text className="capitalize">{product?.category}</Text>
            <Text className="text-orange-600">$ {product?.price}</Text>
          </View>

          <View className="mb-3">
            <Text className="font-bold text-[17px] uppercase">Description</Text>
            <Text className="text-slate-600">{product?.description}</Text>
          </View>

          {product?.category.includes("clothing") && (
            <View className="border-b-[1px] pb-8 border-slate-200">
              <Text className="font-bold text-[17px] uppercase">Material</Text>
              <Text className="text-slate-600">
                We work with monitoring the programmes to ensure compliance with
                safety, health and quality standards for our products.
              </Text>

              <View>
                <InstructionSection
                  instruction="Do not use bleach"
                  image={require("../../assets/items/Do Not Bleach.png")}
                />
                <InstructionSection
                  instruction="Do not tumble dry"
                  image={require("../../assets/items/Do Not Tumble Dry.png")}
                />
                <InstructionSection
                  instruction="Do not use bleach"
                  image={require("../../assets/items/Do Not Wash.png")}
                />
                <InstructionSection
                  instruction="Do not use bleach"
                  image={require("../../assets/items/Iron Low Temperature.png")}
                />
              </View>
            </View>
          )}
        </View>

        <View className="p-4 flex-row space-x-3 mb-32">
          <View>
            <Image
              tintColor={themeColor}
              source={require("../../assets/items/Shipping.png")}
            />
          </View>
          <View className="flex-row justify-between flex-1">
            <View>
              <Text className="font-bold">Free Flat Rate Shipping</Text>
              {!toggleOpen && (
                <View>
                  <Text className="text-slate-600 mt-1">
                    Estimated to be delivered on
                  </Text>
                  <Text className="text-slate-600">
                    09/11/2021 - 12/11/2021
                  </Text>
                </View>
              )}
            </View>
            <TouchableOpacity onPress={() => setToggleOpen(!toggleOpen)}>
              <Image
                tintColor={themeColor}
                source={
                  !toggleOpen
                    ? require("../../assets/items/Up.png")
                    : require("../../assets/items/Down.png")
                }
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className=" px-2 ">
          <AddToBasketFooter product={product} />
        </View>
      </ScrollView>
    </Container>
  );
};

export default ProductDetails;

const InstructionSection = ({
  instruction,
  image,
}: {
  image: ImageSourcePropType;
  instruction: string;
}) => {
  return (
    <View className="flex-row space-x-3 my-3">
      <View className="">
        <Image tintColor={themeColor} source={image} />
      </View>
      <Text className="flex-1">{instruction} </Text>
    </View>
  );
};
