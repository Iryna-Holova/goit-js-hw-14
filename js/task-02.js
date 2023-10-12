const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const container = document.getElementById("ingredients");

const listItems = ingredients.map(createListItem);

container.append(...listItems);

function createListItem(content) {
  const listItem = document.createElement("li");
  listItem.textContent = content;
  listItem.classList.add("item");

  return listItem;
}
