/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
    const smap = new Map()
    const tmap = new Map()

    for (let i = 0; i < s.length; i++) {
        if (!smap.has(s[i]) && !tmap.has(t[i])) {
            smap.set(s[i], i)
            tmap.set(t[i], i)
        } else {
            if (smap.get(s[i]) !== tmap.get(t[i])) return false
            smap.set(s[i], i)
            tmap.set(t[i], i)
        }
    }

    return true
};

console.log(isIsomorphic("bbbaaaba", "aaabbbba"));