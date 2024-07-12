import React from "react";
import { View } from "./system/Themed";
import { Platform, ScrollView } from "react-native";

interface ContainerProps {
  children: React.ReactNode;
  class?: string;
  isCart?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  class: customClassName,
  isCart,
}) => {
  if (Platform.OS === "web") {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[{ paddingHorizontal: 24 }]}
        className={`${customClassName} bg-white flex-1  pt-6 pb-5`}
      >
        {children}
      </ScrollView>
    );
  }
  return (
    <View
      style={[{ paddingHorizontal: 24 }]}
      className={`${customClassName} flex-1  pt-6`}
    >
      {children}
    </View>
  );
};

export default Container;
