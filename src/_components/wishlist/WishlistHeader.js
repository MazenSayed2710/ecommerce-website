import HeaderWithImg from "../common/HeaderWithImg";

function WishlistHeader() {
  return (
    <HeaderWithImg img="/shopping-cart-head.jpg">
      <div className="flex flex-col items-center">
        <h2 className="font-semibold"> Wishlist</h2>
        <p className="text-base">View your wishlist products</p>
      </div>
    </HeaderWithImg>
  );
}

export default WishlistHeader;
