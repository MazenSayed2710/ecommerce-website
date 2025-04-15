import { motion } from "framer-motion";
function AddToCartButton({ handleAddToCard }) {
  return (
    <motion.button
      className="bg-blue-400 text-white px-6 py-2 w-full rounded-full font-semibold hover:bg-blue-500 sm:col-span-1 col-span-2"
      onClick={handleAddToCard}
      animate={{
        x: [
          "5px",
          "-5px",
          "5px",
          "-5px",
          "5px",
          "-5px",
          "5px",
          "-5px",
          "5px",
          "-5px",
          0,
        ],
      }}
      initial={{ x: "-10px" }}
      transition={{
        repeat: Infinity,
        repeatDelay: 10,
        duration: 1.5,
        ease: "linear",
      }}
    >
      Add to Cart
    </motion.button>
  );
}

export default AddToCartButton;
