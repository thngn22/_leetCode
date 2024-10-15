/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
const smallestChair = function (times, targetFriend) {
    const n = times.length;

    // Gán ID bạn bè và sắp xếp sự kiện đến và đi theo thời gian
    const events = [];
    for (let i = 0; i < n; i++) {
        events.push([times[i][0], 'arrive', i]);  // Thời gian đến
        events.push([times[i][1], 'leave', i]);   // Thời gian rời đi
    }

    // Sắp xếp các sự kiện theo thời gian (nếu cùng thời gian, xử lý 'leave' trước 'arrive')
    events.sort((a, b) => a[0] - b[0] || (a[1] === 'leave' ? -1 : 1));

    const availableChairs = []; // Min-heap để quản lý ghế trống
    const occupiedChairs = new Map(); // Lưu ghế của người bạn đang ngồi
    let nextChair = 0; // Số ghế tiếp theo sẵn sàng sử dụng

    for (const [time, type, friend] of events) {
        if (type === 'arrive') {
            // Khi có người đến, chọn ghế nhỏ nhất từ heap hoặc lấy ghế mới
            const chair = availableChairs.length > 0 ? availableChairs.shift() : nextChair++;
            occupiedChairs.set(friend, chair);  // Gán ghế cho người bạn

            // Nếu là người bạn targetFriend, trả về số ghế
            if (friend === targetFriend) {
                return chair;
            }
        } else {
            // Khi có người rời đi, đưa ghế của họ vào heap
            const chair = occupiedChairs.get(friend);
            availableChairs.push(chair);
            availableChairs.sort((a, b) => a - b);  // Sắp xếp heap để giữ ghế nhỏ nhất ở đầu
        }
    }
};

console.log(smallestChair([[1, 4], [2, 3], [4, 6]], 1))

