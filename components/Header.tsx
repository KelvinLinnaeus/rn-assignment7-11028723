import { View, themeColor } from "./system/Themed";
import { Image, TouchableOpacity } from "react-native";
import { router, usePathname } from "expo-router";

const Header = ({ cartPage }: { cartPage?: boolean }) => {
  return (
    <View className="flex-row items-center justify-between pr-4">
      <View>
        {!cartPage && (
          <Image
            tintColor={themeColor}
            source={require("@/assets/items/Menu.png")}
          />
        )}
      </View>
      <View>
        <Image
          tintColor={themeColor}
          source={require("@/assets/items/Logo.png")}
        />
      </View>
      <View className="flex-row w-16 justify-between">
        <Image
          tintColor={themeColor}
          source={require("@/assets/items/Search.png")}
        />
        {!cartPage && (
          <TouchableOpacity onPress={() => router.push("/cart")}>
            <Image
              tintColor={themeColor}
              source={require("@/assets/items/shoppingBag.png")}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
