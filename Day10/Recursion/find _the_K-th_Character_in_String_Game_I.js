/**
 * @param {number} k
 * @return {character}
 */
const kthCharacter = function(k) {
    let stringResult = "a"

    if(stringResult.length >= k) return null

    stringResult = stringResult + kthCharacter()

    return stringResult[k-1]
};

console.log(kthCharacter(5))