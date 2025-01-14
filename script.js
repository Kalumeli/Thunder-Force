document.addEventListener("DOMContentLoaded", () => {
    const productForm = document.getElementById("product-form");
    const productList = document.getElementById("product-list");
    const clearAllButton = document.getElementById("clear-all");
  
    // Load products from localStorage on page load
    const loadProducts = () => {
      const products = JSON.parse(localStorage.getItem("products")) || [];
      productList.innerHTML = ""; // Clear existing content
      products.forEach((product, index) => addProductToDOM(product, index));
    };
  
    // Add product to DOM
    const addProductToDOM = (product, index) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-details">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <span>$${product.price.toFixed(2)}</span>
          <button class="edit" data-index="${index}">Edit</button>
          <button class="delete" data-index="${index}">Delete</button>
        </div>
      `;
      productList.appendChild(productDiv);
    };
  
    // Save product to localStorage
    const saveProduct = (product) => {
      const products = JSON.parse(localStorage.getItem("products")) || [];
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));
    };
  
    // Update product in localStorage
    const updateProduct = (index, updatedProduct) => {
      const products = JSON.parse(localStorage.getItem("products")) || [];
      products[index] = updatedProduct;
      localStorage.setItem("products", JSON.stringify(products));
      loadProducts();
    };
  
    // Delete product from localStorage
    const deleteProduct = (index) => {
      const products = JSON.parse(localStorage.getItem("products")) || [];
      products.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(products));
      loadProducts();
    };
  
    // Clear all products
    const clearAllProducts = () => {
      localStorage.removeItem("products");
      loadProducts();
    };
  
    // Handle form submission
    productForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const price = parseFloat(document.getElementById("price").value);
      const description = document.getElementById("description").value.trim();
      const image = document.getElementById("image").value.trim();
  
      const product = { name, price, description, image };
      const editIndex = productForm.dataset.editIndex;
  
      if (editIndex !== undefined) {
        // Update existing product
        updateProduct(editIndex, product);
        delete productForm.dataset.editIndex;
      } else {
        // Add new product
        saveProduct(product);
        addProductToDOM(product, JSON.parse(localStorage.getItem("products")).length - 1);
      }
  
      productForm.reset();
    });
  
    // Handle edit and delete buttons
    productList.addEventListener("click", (e) => {
      if (e.target.classList.contains("edit")) {
        const index = e.target.dataset.index;
        const products = JSON.parse(localStorage.getItem("products")) || [];
        const product = products[index];
  
        document.getElementById("name").value = product.name;
        document.getElementById("price").value = product.price;
        document.getElementById("description").value = product.description;
        document.getElementById("image").value = product.image;
  
        productForm.dataset.editIndex = index;
      }
  
      if (e.target.classList.contains("delete")) {
        const index = e.target.dataset.index;
        deleteProduct(index);
      }
    });
  
    // Handle clear all button
    clearAllButton.addEventListener("click", () => {
      clearAllProducts();
    });
  
    // Initial load
    loadProducts();
  });
  