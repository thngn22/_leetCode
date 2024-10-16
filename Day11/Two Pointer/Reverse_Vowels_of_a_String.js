/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
    // Chuyển chuỗi thành mảng để có thể chỉnh sửa
    let arr = s.split('');
    let l = 0;
    let r = arr.length - 1;

    const vowels = 'aeiouAEIOU'; // Tập hợp các nguyên âm

    while (l < r) {
        // Kiểm tra xem ký tự tại vị trí l có phải nguyên âm không
        if (vowels.includes(arr[l])) {
            // Kiểm tra xem ký tự tại vị trí r có phải nguyên âm không
            if (vowels.includes(arr[r])) {
                // Hoán đổi hai ký tự
                let temp = arr[l];
                arr[l] = arr[r];
                arr[r] = temp;
                // Di chuyển các con trỏ
                l++;
                r--;
            } else {
                r--; // Di chuyển con trỏ phải nếu không phải nguyên âm
            }
        } else {
            l++; // Di chuyển con trỏ trái nếu không phải nguyên âm
        }
    }

    // Chuyển mảng trở lại thành chuỗi
    return arr.join('');
};

console.log(reverseVowels("LeetCode"));