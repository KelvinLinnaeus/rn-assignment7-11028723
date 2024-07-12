import { Text, View, themeColor } from "./system/Themed";
import { Image, TouchableOpacity } from "react-native";
import { router, usePathname } from "expo-router";
import { useState } from "react";

const Header = ({ cartPage }: { cartPage?: boolean }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <View>
      {toggleMenu && <SideMenu handleToggle={handleToggle} />}
      <View className="flex-row items-center justify-between pr-2 pb-2">
        <TouchableOpacity onPress={handleToggle}>
          {!cartPage && (
            <Image
              tintColor={themeColor}
              source={
                !toggleMenu
                  ? require("@/assets/items/Menu.png")
                  : require("../assets/items/Close.png")
              }
            />
          )}
        </TouchableOpacity>
        {!toggleMenu && (
          <TouchableOpacity onPress={() => router.push("/")}>
            <Image
              tintColor={themeColor}
              source={require("@/assets/items/Logo.png")}
            />
          </TouchableOpacity>
        )}
        <View
          className={`flex-row w-16 justify-between ${
            cartPage && "justify-end"
          }`}
        >
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
    </View>
  );
};

export default Header;

const SideMenu = ({ handleToggle }: { handleToggle: () => void }) => {
  const categories = [
    "Store",
    "Locations",
    "Blog",
    "Jewelery",
    "Electronic",
    "Clothing",
  ];
  return (
    <View className="absolute top-10 z-40 bottom-0 -left-4 -right-4 flex-row">
      <View className="h-screen pt-2 pl-4 w-[250px]">
        <Text className="font-bold text-[17px] text-slate-800  ">
          Kelvin Mhacwilson
        </Text>

        <View className="border-b-[1px] border-red-400 w-[180px] pt-1 " />

        <View>
          {categories.map((category, index) => {
            return (
              <Text className="my-3 text-[16px] text-slate-600" key={index}>
                {category}{" "}
              </Text>
            );
          })}
        </View>
      </View>
      <TouchableOpacity
        className="opacity-10 bg-white flex-1  h-screen"
        onPress={handleToggle}
      />
    </View>
  );
};
