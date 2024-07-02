import React from "react";
import { View } from "./system/Themed";

interface ContainerProps {
  children: React.ReactNode;
  class?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  class: customClassName,
}) => {
  return (
    <View className={`${customClassName} flex-1 px-6 pt-6`}>{children}</View>
  );
};

export default Container;
