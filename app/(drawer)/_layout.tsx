import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Store"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Locations"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <DrawerItem
        label="Blog"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <DrawerItem
        label="Jewelry"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <DrawerItem
        label="Electronic"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <DrawerItem
        label="Clothing"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
