// import "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { NativeWindStyleSheet } from "nativewind";
import { useColorScheme } from "@/components/system/useColorScheme";
import { SafeAreaView } from "@/components/system/Themed";
import Header from "@/components/Header";
import CartContextProvider from "@/context/cartContext";
import { ToastProvider } from "react-native-toast-notifications";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const path = usePathname();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ToastProvider>
        <CartContextProvider>
          <Stack>
            <Stack.Screen
              name="index"
              options={{
                header: () => (
                  <SafeAreaView className="pt-4 px-6">
                    <Header />
                  </SafeAreaView>
                ),
              }}
            />
            <Stack.Screen
              name="cart/index"
              options={{
                header: () => (
                  <SafeAreaView className="pt-4 px-6">
                    <Header cartPage />
                  </SafeAreaView>
                ),
              }}
            />
            <Stack.Screen
              name="product_details/[id]"
              options={{
                header: () => (
                  <SafeAreaView className="pt-4 px-6">
                    <Header />
                  </SafeAreaView>
                ),
              }}
            />
            <Stack.Screen
              name="(drawer)"
              options={{
                header: () => (
                  <SafeAreaView className="pt-4 px-6">
                    <Header />
                  </SafeAreaView>
                ),
              }}
            />
            <Stack.Screen
              name="checkout/index"
              options={{
                header: () => (
                  <SafeAreaView className="pt-4 px-6">
                    <Header />
                  </SafeAreaView>
                ),
              }}
            />
          </Stack>
        </CartContextProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
