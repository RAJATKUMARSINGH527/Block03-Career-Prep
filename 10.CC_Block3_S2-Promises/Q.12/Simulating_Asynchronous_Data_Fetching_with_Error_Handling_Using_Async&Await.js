// 1. Simulate Data Fetching with a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Fetched data successfully!");
      } else {
        reject("Random failure: Network or server error.");
      }
    }, 1000); // Simulate 1 second delay
  });
}

// 2. Async Handler Function
async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

// 3. Simulate the Workflow
fetchDataHandler();
