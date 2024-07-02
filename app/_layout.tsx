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
import { SafeAreaView, Text } from "@/components/system/Themed";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <Stack
      // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="home/index"
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
                <Header />
              </SafeAreaView>
            ),
          }}
        />
      </Stack>
      {/* <Footer title="HomeScreen" /> */}
    </ThemeProvider>
  );
}
