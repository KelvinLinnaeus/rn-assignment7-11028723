import { FlatList } from "react-native";
import { View } from "@/components/system/Themed";
import { Image, TouchableOpacity } from "react-native";

const LoadingProductCard = () => {
  const loadingList = new Array(10).fill(null);

  return (
    <FlatList
      columnWrapperStyle={{
        alignItems: "center",
        justifyContent: "space-evenly",
        display: "flex",
        flexWrap: "wrap",
      }}
      numColumns={2}
      data={loadingList}
      showsVerticalScrollIndicator={false}
      renderItem={({ index }) => (
        <View
          key={index}
          style={{ width: "48%" }}
          className="mb-4 pb-3 mr-1 min-w-[150px] px-3 overflow-hidden p-1 h-[320px]"
        >
          <View>
            <View className="relative w-full h-40 rounded-sm bg-slate-200 animate-pulse" />
            <TouchableOpacity className="absolute bottom-2 right-2">
              <Image
                resizeMode="contain"
                source={require("@/assets/items/add_circle.png")}
              />
            </TouchableOpacity>
          </View>

          <View>
            <View className="font-bold mt-3 h-14 bg-slate-200 animate-pulse" />
            <View className="text-slate-600 h-10 animate-pulse" />
            <View className="text-orange-700 my-1 h-8 bg-slate-200 animate-pulse" />
          </View>
        </View>
      )}
    />
  );
};

export default LoadingProductCard;
