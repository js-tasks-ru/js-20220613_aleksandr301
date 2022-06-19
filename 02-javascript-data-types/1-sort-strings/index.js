/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    const arrCopy = [...arr]
    arrCopy.sort((value1, value2) => {
        return value2.localeCompare(value1, {}, {sensitivity: 'base', caseFirst: 'upper'})
    })
    if(param === 'asc') {
        arrCopy.reverse()
    }
    return arrCopy
}
