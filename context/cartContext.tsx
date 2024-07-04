import { Product } from "@/components/ProductCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface CartContextType {
  cartItems: Product[] | null;
  handleAddToCart: (product: Product) => void;
  handleRemoveFromCart: (product: Product) => void;
  loadCart: () => void;
  totalAmount: number;
}

export const CartContext = createContext<CartContextType | null>(null);

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<Product[] | null>(null);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddToCart = async (item: Product) => {
    if (cartItems) {
      if (cartItems.find((cartItem) => cartItem.id === item.id)) return;
      const updatedCart = [...cartItems, item];
      setCartItems(updatedCart);
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const handleRemoveFromCart = async (product: Product) => {
    if (cartItems) {
      const updatedCart = cartItems.filter((item) => item.id !== product.id);
      setCartItems(updatedCart);
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  useEffect(() => {
    if (cartItems) {
      const total = cartItems.reduce((acc, cart) => acc + cart.price, 0);
      setTotalAmount(total);
    }
  }, [cartItems]);

  const loadCart = async () => {
    try {
      const cartData = await AsyncStorage.getItem("cart");
      if (cartData) {
        setCartItems(JSON.parse(cartData));
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
