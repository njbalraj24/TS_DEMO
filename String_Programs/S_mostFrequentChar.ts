function mostFrequentChar(str: string): string {
    const freqMap: Record<string, number> = {};
    let maxCount = 0;
    let mostFrequent = '';

    for (const char of str) {
        if (char === ' ') continue; // Optional: Skip spaces
        freqMap[char] = (freqMap[char] || 0) + 1;

        if (freqMap[char] > maxCount) {
            maxCount = freqMap[char];
            mostFrequent = char;
        }
    }

    return mostFrequent;
}

// Example usage
console.log(mostFrequentChar("hello world")); // Output: "l"

/* 
Record<string, number>
Creates a frequency map: how many times each character appears.

freqMap[char] = (freqMap[char] || 0) + 1
Increments the count for each character, initializing it to 0 if not found.

Track the character with the highest count
Update maxCount and mostFrequent when a new max is found.

Optional:

if (char === ' ') continue; skips spaces.
Remove this if you want to include spaces.
*/