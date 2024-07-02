import React from "react";
import { View } from "./system/Themed";

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
