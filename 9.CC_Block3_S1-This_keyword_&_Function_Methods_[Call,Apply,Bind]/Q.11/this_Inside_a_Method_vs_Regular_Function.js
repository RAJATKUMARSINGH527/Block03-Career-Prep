let user = {
  username: "john_doe",
  showUsername: function() {
    console.log("Method:", this.username);
  }
};

function displayUsername() {
  console.log("Function:", this.username);
}

// Calling the method inside the object
user.showUsername(); // Output: Method: john_doe

// Calling the standalone function
displayUsername();   // Output: Function: undefined (in strict mode)
