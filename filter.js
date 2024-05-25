const data =[
    {
        id : 1,
        name : "ACCOX Men's Half Sleeves" ,
        img :"https://m.media-amazon.com/images/I/61S1HlQFtgS._SX679_.jpg" ,
        price: 600,
        cat: "casual",
    },
    {
        id : 2,
        name :"DHRUVI TRENDZ Regular Fit Stylish Shirt" ,
        img : "https://m.media-amazon.com/images/I/61SmsCyfZOL._SY741_.jpg",
        price: 380,
        cat: "casual",
    },
    {
        id : 3,
        name : "Leriya Fashion Shirt for Men",
        img :"https://m.media-amazon.com/images/I/51RthiG0RFL._SY679_.jpg" ,
        price:299 ,
        cat: "casual",
    },
    {
        id :4 ,
        name :"Amazon Brand - Symbol Men's Regular Fit Formal Shirt" ,
        img : "https://m.media-amazon.com/images/I/B11NHRUb2iS._SX569_.jpg",
        price: 399 ,
        cat: "formal" ,
    },
    {
        id : 5,
        name :"IndoPrimo Formal Shirt for Men" ,
        img : "https://m.media-amazon.com/images/I/41rdXS5rDuL._SY679_.jpg",
        price: 499 ,
        cat: "formal",
    },
    {
        id : 6,
        name : "Amazon Brand - Symbol Men's Active Regular Fit T-Shirt",
        img : "https://m.media-amazon.com/images/I/71q6-LRT9vL._SX569_.jpg",
        price: 459,
        cat: "sports",
    },
    {
        id : 7,
        name :"Amazon Brand - Symbol Men's Regular Fit T-Shirt" ,
        img :"https://m.media-amazon.com/images/I/711qQO2Z-rL._SX569_.jpg" ,
        price:299 ,
        cat: "sports",
    },
    {
        id : 8,
        name :"Amazon Brand - Symbol Men's Solid Regular Sports Regular Fit T-Shirt" ,
        img :"https://m.media-amazon.com/images/I/81AQPpNpldL._SX569_.jpg" ,
        price: 159,
        cat: "sports",
    },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
       <div class="product">
          <img
          src=${product.img}
          alt=""
          />
          <span class="name">${product.name}</span>
          <span class="priceText">Rs.${product.price}</span>
        </div>
    `
    )
    .join("");
};

displayProducts(data);


searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
  
    if (value) {
      displayProducts(
        data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
      );
    } else {
      displayProducts(data);
    }
  });
  
  const setCategories = () => {
    const allCats = data.map((item) => item.cat);
    const categories = [
      "All",
      ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i;
      }),
    ];
  
    categoriesContainer.innerHTML = categories
      .map(
        (cat) =>
          `
        <span class="cat">${cat}</span>
      `
      )
      .join("");
  
    categoriesContainer.addEventListener("click", (e) => {
      const selectedCat = e.target.textContent;
  
      selectedCat === "All"
        ? displayProducts(data)
        : displayProducts(data.filter((item) => item.cat === selectedCat));
    });
  };
  
  const setPrices = () => {
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
  
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "Rs." + maxPrice;
  
    priceRange.addEventListener("input", (e) => {
      priceValue.textContent = "Rs" + e.target.value;
      displayProducts(data.filter((item) => item.price <= e.target.value));
    });
  };
  
  setCategories();
  setPrices();