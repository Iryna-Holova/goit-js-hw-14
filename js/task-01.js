const categories = document.getElementById("categories").children;

console.log("Number of categories:", categories.length);

Array.from(categories).forEach((category) => {
  console.log("Category:", category.firstElementChild.textContent);
  console.log("Elements:", category.lastElementChild.children.length);
});
