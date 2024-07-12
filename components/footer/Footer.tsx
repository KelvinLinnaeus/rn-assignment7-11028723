import { Image } from "react-native";
import { Text, View } from "react-native";
import { themeColor } from "../system/Themed";
import { Link } from "expo-router";

const Footer = ({ title }: { title?: string }) => {
  return (
    <View
      className={`flex-row space-x-4 items-center  h-[50px] justify-center bg-black ${
        themeColor === "black" && "border-t-2 border-white "
      }`}
    >
      <Image
        tintColor={"white"}
        source={require("@/assets/items/shoppingBag.png")}
      />
      <Link href={"/checkout"} className="text-white">
        {title}
      </Link>
    </View>
  );
};

export default Footer;
