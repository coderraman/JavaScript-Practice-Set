const name = "my name is raman";

function capitalizeFirstLetterOfEachWord(string) {
  // Split the string into an array of words
  const words = string.split(' ');

  // Initialize an empty array to hold the capitalized words
  const capitalizedWords = [];

  // Loop through each word in the array
  for (let i = 0; i < words.length; i++) {
    // Get the current word
    const word = words[i];
    
    // Capitalize the first letter and add the rest of the word
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    
    // Add the capitalized word to the array
    capitalizedWords.push(capitalizedWord);
  }

  // Join the array of capitalized words back into a single string
  const capitalizedString = capitalizedWords.join(' ');

  // Return the capitalized string
  return capitalizedString;
}

const capitalized = capitalizeFirstLetterOfEachWord(name);
console.log(capitalized); // Output: "My Name Is Raman"
