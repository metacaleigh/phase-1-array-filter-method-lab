// drivers.filter(function findMatching(driver) {
//     return
const array = ["Bob", "Chip", "Charlie"]

function findMatching(arrayOfDrivers, string) {
    return arrayOfDrivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(arrayOfDrivers, string) {
    return arrayOfDrivers.filter(driver => {
        return driver.startsWith(string)
    })
}
console.log(fuzzyMatch(array, "C"))

function matchName(arrayOfDrivers, string) {
    return arrayOfDrivers.filter(driver => {
        return driver.name === string
    })
}