import { Image } from "react-native";
import { Text, View, themeColor } from "./system/Themed";

const Footer = ({ title }: { title?: string }) => {
  return (
    <View
      className={`flex-row space-x-4 items-center  h-[50px] justify-center ${
        themeColor === "white" && "border-t-[1px] border-white "
      }`}
    >
      <Image
        tintColor={themeColor}
        source={require("@/assets/items/shoppingBag.png")}
      />
      <Text>{title}</Text>
    </View>
  );
};

export default Footer;
