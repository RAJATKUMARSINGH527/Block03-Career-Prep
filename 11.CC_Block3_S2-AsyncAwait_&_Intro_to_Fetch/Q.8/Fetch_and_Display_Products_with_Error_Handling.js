async function fetchAndDisplayProducts() {
  try {
    // Try to fetch the products
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const products = await response.json();

    // Display each product's details in the console (image, title, price, "View Details" button info)
    products.forEach(product => {
      console.log(
        `Image: ${product.image}\nTitle: ${product.title}\nPrice: $${product.price}\n[View Details]\n---`
      );
    });

    // Calculate and display the sum of all product prices using reduce
    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    console.log(`Total price of all products: $${totalPrice.toFixed(2)}`);
  } catch (error) {
    // If there's any error (fetch fails, bad URL, etc.), display a friendly message
    console.log("Failed to fetch products. Please try again later");
  }
}

// Call the function
fetchAndDisplayProducts();
