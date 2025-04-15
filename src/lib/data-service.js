import { supabase } from "./supabase";

export async function getSliderData() {
  let { data: sliderData, error } = await supabase
    .from("slider")
    .select("*")
    .order("id");

  if (error) throw Error(error.message);
  return { sliderData };
}

export async function getTrindingProducts() {
  let { data: triningProducts, error } = await supabase
    .from("products")
    .select("*")
    .order("popularity")
    .limit(8);

  if (error) throw Error(error.message);
  return triningProducts;
}
export async function getbestsellingProducts() {
  let { data: bestsellingProducts, error } = await supabase
    .from("products")
    .select("*")
    .order("numOfSales")
    .limit(8);

  if (error) throw Error(error.message);
  return bestsellingProducts;
}
export async function getCollections() {
  let { data: collections, error } = await supabase
    .from("collections")
    .select("*");

  if (error) throw Error(error.message);
  return collections;
}

export async function getSpecificProducts(categore, sortAndfilter) {
  let query = supabase
    .from("products")
    .select("*")
    .eq("mainCategorie", categore);

  const sort = sortAndfilter?.sort?.split("-")[0];
  const isAscending = sortAndfilter?.sort?.split("-")[1] === "ascending";
  if (sortAndfilter?.sort && sortAndfilter?.sort !== "all") {
    query = query.order(sort, {
      ascending: isAscending,
    });
  }
  // Filter by Availability
  if (sortAndfilter?.inStock === "true" && sortAndfilter?.outStock !== "true") {
    query = query.eq("isAvailable", true);
  } else if (
    sortAndfilter?.outStock === "true" &&
    sortAndfilter?.inStock !== "true"
  ) {
    query = query.eq("isAvailable", false);
  }

  // Filter by Size

  if (sortAndfilter?.size) {
    query = query.contains(
      "sizes",
      Array.isArray(sortAndfilter?.size)
        ? sortAndfilter?.size
        : [sortAndfilter?.size]
    );
  }

  // Filter by Price

  if (sortAndfilter?.price) {
    query = query
      .gte("price", Number(sortAndfilter?.price[0]))
      .lte("price", Number(sortAndfilter?.price[1]));
  }

  // Filter by Color
  if (sortAndfilter?.color) {
    query.contains(
      "arrayOfColors",
      Array.isArray(sortAndfilter?.color)
        ? sortAndfilter?.color
        : [sortAndfilter?.color]
    );
  }

  let { data: products, error } = await query;
  if (error) throw Error(error.message);
  return products;
}
export async function getCollectionImg(categore) {
  let { data: collectionImg, error } = await supabase
    .from("collections")
    .select("headerImg")
    .eq("text", categore)
    .single();

  if (error) throw Error(error.message);
  return collectionImg.headerImg;
}
export async function getProductById(id) {
  let { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw Error(error.message);
  return product;
}

export async function signUp(obj) {
  let { error } = await supabase.auth.signUp(obj);

  if (error) throw Error(error.message);
}

export async function signInwithSupabase({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) console.error(error.message);

  return data;
}
export async function searchProducts(search, collection) {
  // console.log(search.length, collection);
  search = search.length === 1 ? search.trim() : search;
  let query = supabase
    .from("products")
    .select("*")
    .ilike("name", `%${search}%`);

  if (collection !== "all categories") {
    query = supabase
      .from("products")
      .select("*")
      .eq("mainCategorie", collection)
      .ilike("name", `%${!search ? null : search}%`); // When user click space or delete everything on input ,data will appear based on this and i want to disable that
  }
  let { data: products, error } = await query;

  if (error) console.error(error.message);

  return products;
}
export async function checkEmailExisting(email) {
  let { data, error } = await supabase
    .from("userCarts")
    .select("*")
    .eq("email", email);

  if (error) console.error(error.message);

  if (!data.length) return false;

  return true;
}

export async function setUser(
  email,
  shoppingCartProducts,
  wishlistProductsCart
) {
  const { error } = await supabase
    .from("userCarts")
    .upsert(
      [
        {
          email,
          shoppingCartProducts,
          wishlistProductsCart,
        },
      ],
      {
        onConflict: ["email"],
      }
    )
    .select();
  if (error) console.error(error.message);
}
export async function setUserShoppingCard(email, products) {
  const { data, error } = await supabase
    .from("userCarts")
    .upsert([{ email: email, shoppingCartProducts: products }], {
      onConflict: ["email"],
    })
    .select();
  if (error) console.error(error.message);

  return data;
}
export async function getUserShoppingCard(email) {
  let { data, error } = await supabase
    .from("userCarts")
    .select("shoppingCartProducts")
    .eq("email", email)
    .single();

  if (error) console.error(error.message);

  return data.shoppingCartProducts;
}
export async function setUserWishlistCard(email, wishlistCartProducts) {
  const { data, error } = await supabase
    .from("userCarts")
    .update({ wishlistCartProducts })
    .eq("email", email)
    .select();

  if (error) console.error(error.message);

  return data;
}
export async function getUserWishlistCard(email) {
  let { data, error } = await supabase
    .from("userCarts")
    .select("wishlistCartProducts")
    .eq("email", email)
    .single();

  if (error) console.error(error.message);

  return data.wishlistCartProducts;
}
