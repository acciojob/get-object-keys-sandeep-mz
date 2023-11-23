
// Create an object named 'student' with a 'name' property
const student = {
  name: 'John' // Example name
};

// Add a method 'getKeys()' to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Example usage
console.log(student.getKeys()); // Output: ['name']
