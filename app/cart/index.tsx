import Container from "@/components/Container";
import { Text, View } from "@/components/system/Themed";
import CartItem from "@/components/CartItem";
import { useCart } from "@/context/cartContext";
import Footer from "@/components/footer/Footer";

const Cart = () => {
  const { cartItems, totalAmount, handleRemoveFromCart } = useCart();

  return (
    <Container class="px-0">
      <View className="flex-1 pb-20 px-6">
        {cartItems?.length !== 0 && (
          <Text className="text-center text-xl mb-4">CHECKOUT</Text>
        )}

        <CartItem
          total={totalAmount}
          cartItems={cartItems}
          removeFromCart={handleRemoveFromCart}
        />
      </View>

      <View className="">
        <Footer title="Checkout" />
      </View>
    </Container>
  );
};

export default Cart;
