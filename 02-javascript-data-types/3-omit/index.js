/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    const newObject = {}
    Object.keys(obj).forEach(key => {
        if (fields.indexOf(key) === -1) newObject[key] = obj[key]
    })
    return newObject
};
