/**
 * @param {number[]} skill
 * @return {number}
 *
 * explain:
 * Ta nên bắt đầu theo 1 logic như sau: với 1 sorted array [a, b, a', b']
 * thì a là nhỏ I, b' là lớn I, b là nhỏ II, a là lớn II
 * đồng nghĩa với vệc a + b' (nếu may mắn thì = ) b + a'
 * bởi vì nếu số nhỏ I + số lớn II <<< số nhỏ 2 + số lớn I
 * tương tự thì chắc chắn tổng 2 số nhỏ <<< tổng 2 số lớn
 * --> vậy nên từ đó ta có thể suy ra, 1 TỔNG CHUẨN NÊN CẤU TẠO TỪ 2 CỤC ĐẠI (NHỎ NHẤT VÀ LỚN NHẤT)
 */
const dividePlayers = function (skill) {
    skill.sort((a, b) => a - b);

    const teamSkill = skill[0] + skill[skill.length - 1];
    let result = 0

    let left = 0
    let right = skill.length - 1

    while (left < right) {
        let tempSkill = skill[left] + skill[right];

        if (tempSkill !== teamSkill) return -1

        result += skill[left] * skill[right]

        left++
        right--
    }

    return result
};

console.log(dividePlayers([1, 1, 2, 3]))