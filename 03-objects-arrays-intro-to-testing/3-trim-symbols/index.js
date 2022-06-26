/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if(size === undefined) return string;
    if(size === 0) return '';

    let arr = string.split('');
    let newString = '';
    let count = 0;

    arr.forEach(v => {
        if(newString[newString.length-1] === v) {
            if (count < size) {
                count += 1
                newString += v
            }
        } else {
            count = 1
            newString += v
        }
    })
    return newString
}
