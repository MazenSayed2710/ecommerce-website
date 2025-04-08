export function capitalize(word) {
  const name = word[0].toUpperCase() + word.slice(1);
  return name;
}
export function formatNumberWithCommas(number) {
  // Convert the input to a number (in case it's a string)
  const num = Number(number);

  // Check if the input is a valid number
  if (isNaN(num)) {
    throw new Error(
      "Invalid input: must be a number or a string representing a number"
    );
  }

  // Format the number with commas and exactly two decimal places
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function createUrlName(name) {
  const words = name.split("-");
  let capitalizedWords = [];
  words.forEach((name) => capitalizedWords.push(capitalize(name)));
  return capitalizedWords.join(" ");
}

export const createPathName = (name, id) => {
  return `${id}-${name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
};

export function mergeProductQuantities(arr1, arr2) {
  const merged = [...arr1];

  arr2.forEach((item2) => {
    const existingItem = merged.find((item1) => item1.id === item2.id);
    if (existingItem) {
      existingItem.quantity += item2.quantity;
    } else {
      merged.push(item2);
    }
  });

  return merged;
}
