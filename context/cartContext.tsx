import { ProductType } from "@/components/ProductCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";

interface CartContextType {
  cartItems: ProductType[] | null;
  handleAddToCart: (product: ProductType) => void;
  handleRemoveFromCart: (product: ProductType) => void;
  loadCart: () => void;
  totalAmount: number;
}

export const CartContext = createContext<CartContextType | null>(null);

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<ProductType[] | null>(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const toast = useToast();
  const toastDuration: number = 400;

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    if (cartItems) {
      const total = cartItems.reduce((acc, cart) => acc + cart.price, 0);
      setTotalAmount(total);
    }
  }, [cartItems]);

  const handleAddToCart = async (item: ProductType) => {
    let updatedCartItems = cartItems ? cartItems : [];

    const existingItem = updatedCartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      toast.show("Product Already in cart", {
        type: "success",
        duration: toastDuration,
      });
      return;
    }

    updatedCartItems = [...updatedCartItems, item];
    setCartItems(updatedCartItems);

    await AsyncStorage.setItem("cart", JSON.stringify(updatedCartItems))
      .then(() => {
        toast.show("Product Added", {
          type: "success",
          duration: toastDuration,
        });
      })
      .catch((e) => {
        console.error("Error storing cart in AsyncStorage", e);
      });
  };

  const handleRemoveFromCart = async (product: ProductType) => {
    if (cartItems) {
      const updatedCart = cartItems.filter((item) => item.id !== product.id);
      setCartItems(updatedCart);
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart))
        .then(() => {
          toast.show("Product Removed", {
            type: "success",
            duration: toastDuration,
          });
        })
        .catch((e) => console.log(e));
    }
  };

  const loadCart = async () => {
    try {
      const cartData = await AsyncStorage.getItem("cart");
      if (cartData) {
        setCartItems(JSON.parse(cartData));
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    cartItems,
    totalAmount,
    handleAddToCart,
    handleRemoveFromCart,
    loadCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
