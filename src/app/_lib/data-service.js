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
export async function getSpecificProducts(categore) {
  let { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("mainCategorie", categore);

  if (error) throw Error(error.message);
  return products;
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
