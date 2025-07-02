// Challenge 6: Find the Longest Substring Without Repeating Characters
// Write a function that takes a string and returns the length of the longest substring without repeating characters.

function findLongestSubstringWithoutRepeats(word) {
    if (arguments.length < 1) {
        return {
            success: false,
            message: "Expecting a Param! found none"
        }
    }

    if (typeof word !== 'string') {
        return {
            success: false,
            message: `Invalid input! Expecting a string, found ${typeof word}`
        }
    }

    // Remove spaces if needed
    word = word.replace(/\s+/g, '');

    let found = new Set();
    let maxLen = 0;
    let start = 0;

    for (let end = 0; end < word.length; end++) {
        while (found.has(word[end])) {
            found.delete(word[start]);
            start++;
        }
        found.add(word[end]);
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
}

// Usage examples:
//console.log(findLongestSubstringWithoutRepeats("abcabcbb")); // 3 ("abc")
//console.log(findLongestSubstringWithoutRepeats("bbbbb")); // 1 ("b")
//console.log(findLongestSubstringWithoutRepeats("pwwkew")); // 3 ("wke")