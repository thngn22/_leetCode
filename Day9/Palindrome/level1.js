function partition(s) {
    let i = 1
    let j = 0
    let result = []

    const isPalindrome = (str, start, end) => {
        while (start < end) {
            if (str[start] !== str[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    };


    const backtrack = () =>{

    }

    return result
}

// Ví dụ kiểm thử
console.log(partition("aab")); // [["a","a","b"],["aa","b"]]
