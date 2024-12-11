// Complete the following functions to make our program work!

/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {number} f temperature in °F
 * @returns {number} temperature in °C
 */
function convertToCelsius(f) {
  console.log(`The degrees in fahrenheit to convert is ${f}.`);
  //convert f to c in degrees and store as degreesCelsius
  let degreesCelsius = (f - 32) * (5/9); 
  console.log("In celsius, that is", degreesCelsius, "degrees.");
  return degreesCelsius;
}

/**
 * | Temperature | Description |
 * | ----------- | ----------- |
 * | < 32        | "very cold" |
 * | < 64        | "cold"      |
 * | < 86        | "warm"      |
 * | < 100       | "hot"       |
 * | >= 100      | "very hot"  |
 *
 * @param {number} f temperature in °F
 * @returns {string} the description from the table above corresponding to
 * the given Fahrenheit temperature `f`
 */
function describeTemperature(f) {
  //create an editable variable that will contain the temp description
  let tempDescription = "";
  //if statement logic
  if (f < 32) {
    tempDescription = "very cold";
  } else if (f > 32, f < 64) {
    tempDescription = "cold"
  } else if (f > 64, f < 86) {
    tempDescription = "warm"
  } else if (f > 87, f < 100) {
    tempDescription = "hot"
  } else if (f >= 100) {
    tempDescription = "very hot"
  }
  return tempDescription;
}

/**
 * @param {number} limit
 * @returns {number} a random integer in the range [0, `limit`)
 */
function getRandomInt(limit) {
  //create a random number
  const randomNumber = Math.round(Math.random() * limit);
  //log the random number in console
  console.log("the random number is", randomNumber);
  return randomNumber;
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
/**
 * Converts the given temperature from Fahrenheit to Celsius,
 * then alerts the user with a descriptive message.
 * @param {number} f temperature in °F
 */
function parseFahrenheit(f) {
  const c = convertToCelsius(f);
  const description = describeTemperature(f);
  const message = `${f}°F is ${c}°C. That is ${description}.`;
  alert(message);
}

const fahrenheitPrompt =
  "Please enter a number. We will convert that temperature from Fahrenheit to Celsius.";
let f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try that again.");
f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try some random temperatures.");
f = getRandomInt(110);
parseFahrenheit(f);

f = getRandomInt(110);
parseFahrenheit(f);
