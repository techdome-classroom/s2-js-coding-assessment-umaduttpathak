/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    // Define the map for Roman numeral values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;  // Variable to store the final integer value
    let prevValue = 0;  // Variable to store the previous numeral value
    
    // Loop through each character in the string
    for (let i = s.length - 1; i >= 0; i--) {
        let currentValue = romanMap[s[i]];  // Get the value of the current numeral
        
        // If the current numeral is smaller than the previous one, subtract it (e.g. IV = 4)
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            // Otherwise, add it to the total
            total += currentValue;
        }
        
        // Update the previous value for the next iteration
        prevValue = currentValue;
    }
    
    return total;
}

// Example usage:
console.log(romanToInt("III"));      // Output: 3
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994



module.exports={romanToInt}