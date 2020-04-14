/**
 * 判断字符串是否存在
 * @param value
 * @param validList
 * @returns {boolean}
 */
function isExist (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

export default {
    isExist
};
