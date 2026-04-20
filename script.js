const menuItems = [
  { name: "Dirty Breakfast Bowl", category: "Breakfast", url: "https://order.toasttab.com/online/dirty-breakfast/item-dirty-breakfast-bowl_8e91e52-b237-4001-aebe-7c35965f2554" },
  { name: "Dirty Breakfast Dish", category: "Breakfast", url: "https://order.toasttab.com/online/dirty-breakfast/item-dirty-breakfast-dish_df9aafbe-e823-4cdd-94f9-a78e9afc0ba6" },
  { name: "Dirty Breakfast Burrito", category: "Breakfast", url: "https://order.toasttab.com/online/dirty-breakfast/item-dirty-breakfast-burrito_7d0be39f-330e-4dc0-a9ac-3b7eeebd0651" },
  { name: "Dirty Breakfast French Toast", category: "Breakfast", url: "https://order.toasttab.com/online/dirty-breakfast/item-dirty-breakfast-french-toast_39f30700-aa88-49b3-b170-9afbbd6be6cc" },
  { name: "Chick N Waffle", category: "Breakfast", url: "https://order.toasttab.com/online/dirty-breakfast/item-chick-n-waffle_e3024cb-1c71-4912-b721-6363b3d81e1b" },
  { name: "Biscuits N Gravy", category: "Breakfast", url: "https://order.toasttab.com/online/dirty-breakfast/item-biscuits-n-gravy_aadf7e6c-5bf2-44d8-b396-0edc2c6046f0" },
  { name: "French Toast Sandwich", category: "Sandwiches", url: "https://order.toasttab.com/online/dirty-breakfast/item-dirty-breakfast-french-toast-sandwich_e4b24d09-477d-45c0-815c-bfcfa640f65e" },
  { name: "Biscuit Sandwich", category: "Sandwiches", url: "https://order.toasttab.com/online/dirty-breakfast/item-biscuit-sandwich_755ec921-b7df-4488-8ef9-fda1f4be05fd" },
  { name: "Texas Toast Sandwich", category: "Sandwiches", url: "https://order.toasttab.com/online/dirty-breakfast/item-texas-toast-sandwich_320b3ba3-301e-4282-a301-3018795639c8" },
  { name: "Bagel Sandwich", category: "Sandwiches", url: "https://order.toasttab.com/online/dirty-breakfast/item-bagel-sandwich_3105cab2-8dec-4ac2-9148-a46ec7cf63fc" },
  { name: "Dirty Waffle Sandwich", category: "Sandwiches", url: "https://order.toasttab.com/online/dirty-breakfast/item-dirty-waffle-sandwich_6526ca1e-b801-40d6-9850-9dfb34fe951b" },
  { name: "Whiting N Grits", category: "Seafood & Grits", url: "https://order.toasttab.com/online/dirty-breakfast/item-dirty-whiting-n-grits_9beb206b-f51c-4e19-99a8-74cce0e5e83b" },
  { name: "Catfish N Grits", category: "Seafood & Grits", url: "https://order.toasttab.com/online/dirty-breakfast/item-dirty-catfish-n-grits_b0d36172-1179-4fc5-b424-129feaef622e" },
  { name: "Croquette Sandwich", category: "Sandwiches", url: "https://order.toasttab.com/online/dirty-breakfast/item-dirty-croquette-sandwich_e0ca2099-db47-4a34-98cf-f053be4b09b7" },
  { name: "Salmon N Grits", category: "Seafood & Grits", url: "https://order.toasttab.com/online/dirty-breakfast/item-dirty-salmon-n-grits_41d35557-cfb7-4441-9f37-2bd423547e35" },
  { name: "Shrimp N Grits", category: "Seafood & Grits", url: "https://order.toasttab.com/online/dirty-breakfast/item-dirty-shrimp-n-grits_5afd13a78-7945-41a3-92cd-a341c1e2e830" },
  { name: "Salmon Croquettes", category: "Dinner", url: "https://order.toasttab.com/online/dirty-breakfast/item-salmon-croquettes_4da1b5bb1-e07f-4a0f-a93b-ef9b78b66dfe" },
  { name: "Whiting", category: "Dinner", url: "https://order.toasttab.com/online/dirty-breakfast/item-whiting_e9fb1288-7a11-438b-9711-acbe5ef275af" },
  { name: "Pork Chops", category: "Dinner", url: "https://order.toasttab.com/online/dirty-breakfast/item-pork-chops_d00493fa-ac4f-9e9e-9ee2-539a6e15ad1c" },
  { name: "Lamb Chops", category: "Dinner", url: "https://order.toasttab.com/online/dirty-breakfast/item-lamb-chops_7fd685b5-1db4-8d2-9482-ecc5248519c6" },
  { name: "Ribeye", category: "Dinner", url: "https://order.toasttab.com/online/dirty-breakfast/item-ribeye_c3f36188-9241-4d6f-b77b-c445622c8162" },
  { name: "Catfish Basket", category: "Baskets", url: "https://order.toasttab.com/online/dirty-breakfast/item-catfish-basket_b36b9a5c-2644-48a6-81b2-338fbea0c781" },
  { name: "Whiting Basket", category: "Baskets", url: "https://order.toasttab.com/online/dirty-breakfast/item-whiting-basket_d685d1f2-09b0-4006-9760-0c272a0e7cb5" },
  { name: "6pc Party Wings", category: "Baskets", url: "https://order.toasttab.com/online/dirty-breakfast/item-6pc-party-wing-basket_11d487c8-ede4-4051-8b22-75b67a8e5992" },
  { name: "6pc Whole Wings", category: "Baskets", url: "https://order.toasttab.com/online/dirty-breakfast/item-6pc-whole-wing-basket_91dafb51-994f-4e43-8ba8-3519eb480923" },
  { name: "Pork Chop Basket", category: "Baskets", url: "https://order.toasttab.com/online/dirty-breakfast/item-pork-chop-basket_d8c5f05e-1f1d-43bb-a4ab-5e0916038a6f" },
  { name: "Salmon Croquette Basket", category: "Baskets", url: "https://order.toasttab.com/online/dirty-breakfast/item-salmon-croquette-basket_74a9e50d-2d53-4dd3-8a0a-a48e931ae9eb" },
  { name: "Hash Browns", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-hash-browns_6b7e0776-3d68-440f-a25e-d48784164eff" },
  { name: "Dirty Hash Browns", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-dirty-hash-browns_e8b0ffdc-f238-4c83-9a58-c0954151fdcf" },
  { name: "Grits", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-grits_31e353ff-8496-4e5a-beae-99b58b85bf4c" },
  { name: "Dirty Grits", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-dirty-grits_45dfdfcd-7197-40bb-8625-8786b77f1cf2" },
  { name: "Potatoes N Onions", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-potatoes-n-onions_1acc99ba-1c57-4fd8-a97a-19c8f7b444da" },
  { name: "Dirty Potatoes N Onions", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-dirty-potatoes-n-onions_4102065f-3b72-4a46-ab4d-d0e526ed9f59" },
  { name: "Green Beans", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-green-beans_6d44589a-b2ff-4797-92f5-bfb8d5ac8074" },
  { name: "Yams", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-yams_2609486e-f0a3-40ad-825e-0269567c0813" },
  { name: "Biscuit", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-biscuit_c44d210c-04b9-4b2f-ac5b-48ebbb500afc" },
  { name: "2 Eggs", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-2-eggs_7842a0b6-0c6e-4f60-8360-8d0491e584d4" },
  { name: "Pancakes", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-pancakes_bdb796ff-ba38-4d12-a794-17bee041e524" },
  { name: "Bacon", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-bacon_5e4ec946-3894-40be-8862-838b85e70437" },
  { name: "Sausage", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-sausage_b499100f-ba9a-44c9-a30a-fa902343bc3b" },
  { name: "Texas Toast", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-texas-toast-2_b9be661b-3922-40da-98af-d1777d99b87d" },
  { name: "Toast", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-toast-2_31d39d32-9771-4968-b6e6-304aacd4dc17" },
  { name: "Waffle", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-waffle_9cafed10-43a6-43bd-92e1-90bb38114853" },
  { name: "Shrimp (6)", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-6-shrimp_6b8c7070-ba3e-4303-941e-ef4924cdea55" },
  { name: "Gravy", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-gravy_c08156db-0eec-4b4e-8f7a-6281d5a622da" },
  { name: "Dirty Sauce", category: "Sides", url: "https://order.toasttab.com/online/dirty-breakfast/item-dirty-sauce_549ece8f-5c1d-4dbf-af0d-a48587a726f9" },
  { name: "Strawberry Banana Pudding", category: "Desserts", url: "https://order.toasttab.com/online/dirty-breakfast/item-strawberry-banana-pudding_399319fa-784b-4a97-8cd8-429a93d3b72b" },
  { name: "Banana Pudding Jar", category: "Desserts", url: "https://order.toasttab.com/online/dirty-breakfast/item-banana-pudding-in-a-jar_55b54b6c-4bd5-4a15-943c-c590b55f6610" },
  { name: "Strawberry Cheesecake Jar", category: "Desserts", url: "https://order.toasttab.com/online/dirty-breakfast/item-strawberry-cheesecake-in-a-jar_44002a38-add8-4e3a-8d28-d82a5e0970ce" },
  { name: "Strawberry Crunch Cake", category: "Desserts", url: "https://order.toasttab.com/online/dirty-breakfast/item-strawberry-crunch-cake_eebf83e5-d2fa-42d8-8739-674430a6eb7" },
  { name: "Confetti Cake", category: "Desserts", url: "https://order.toasttab.com/online/dirty-breakfast/item-confetti-cake_c14bf308-1fd1-438a-bb56-977c37c78708" },
  { name: "Red Velvet Cake", category: "Desserts", url: "https://order.toasttab.com/online/dirty-breakfast/item-red-velvet-cake_a508ff59-461a-4cc4-8437-e531b6010443" },
  { name: "Strawberry Cheesecake", category: "Desserts", url: "https://order.toasttab.com/online/dirty-breakfast/item-strawberry-cheesecake_17b90a79-1ca6-410d-ae69-2247c3a66846" },
  { name: "Chocolate Parfait", category: "Desserts", url: "https://order.toasttab.com/online/dirty-breakfast/item-chocolate-parfait_7d1e821e-1619-4b79-aa2e-0ff407e7adb8" },
  { name: "Triple Chocolate Cake", category: "Desserts", url: "https://order.toasttab.com/online/dirty-breakfast/item-triple-chocolate-cake_94b9498c-8dcde-4780-a28f-fa7dd4494d2f" },
  { name: "Chocolate Brownie", category: "Desserts", url: "https://order.toasttab.com/online/dirty-breakfast/item-chocolate-brownie_bbd3b552-7057-4707-86d7-134ef1f9cab9" },
  { name: "Loaded Fries", category: "Late Night", url: "https://order.toasttab.com/online/dirty-breakfast/item-loaded-fries_5d0ae18a-2d48-4ace-ab75-e647a70c40c" },
  { name: "Chicken Sandwich w/ Fries", category: "Late Night", url: "https://order.toasttab.com/online/dirty-breakfast/item-crispy-buttermilk-chicken-sandwich-w-fries_f03e0166-9f1d-4954-adc6-7fea62d200b0" }
];

const filtersRoot = document.getElementById("categoryFilters");
const menuGrid = document.getElementById("menuGrid");
const searchInput = document.getElementById("menuSearch");
const sortSelect = document.getElementById("menuSort");
const menuCount = document.getElementById("menuCount");

let activeCategory = "All";
let activeQuery = "";
let activeSort = "az";

function uniqueCategories() {
  return ["All", ...new Set(menuItems.map((item) => item.category))];
}

function renderFilters() {
  const categories = uniqueCategories();
  filtersRoot.innerHTML = categories
    .map(
      (category) =>
        `<button class="pill ${category === activeCategory ? "active" : ""}" data-category="${category}">${category}</button>`
    )
    .join("");

  filtersRoot.querySelectorAll(".pill").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderFilters();
      renderMenuItems();
    });
  });
}

function filteredMenuItems() {
  const filtered = menuItems.filter((item) => {
    const categoryMatch =
      activeCategory === "All" || item.category === activeCategory;
    const queryMatch = item.name.toLowerCase().includes(activeQuery.toLowerCase());
    return categoryMatch && queryMatch;
  });

  if (activeSort === "za") {
    return filtered.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (activeSort === "category") {
    return filtered.sort((a, b) =>
      `${a.category}-${a.name}`.localeCompare(`${b.category}-${b.name}`)
    );
  }

  return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function renderMenuItems() {
  const items = filteredMenuItems();
  menuCount.textContent = items.length;

  if (!items.length) {
    menuGrid.innerHTML = `<p>No menu items found for that search.</p>`;
    return;
  }

  menuGrid.innerHTML = items
    .map(
      (item) => `
        <article class="menu-item">
          <a href="${item.url}" target="_blank" rel="noreferrer">${item.name}</a>
          <div class="item-category">${item.category}</div>
        </article>
      `
    )
    .join("");
}

searchInput.addEventListener("input", (event) => {
  activeQuery = event.target.value;
  renderMenuItems();
});

sortSelect.addEventListener("change", (event) => {
  activeSort = event.target.value;
  renderMenuItems();
});

renderFilters();
renderMenuItems();
