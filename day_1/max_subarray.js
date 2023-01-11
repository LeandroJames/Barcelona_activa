const maxSubarray=(thisArray, selectedLength) => {
    try {
        if (selectedLength>thisArray.length) throw "Not that many numbers in the array"
    } catch (error) {
        console.log(`Error: ${error}`)
        return
    }
    const arrayCopy=thisArray.slice()
    arrayCopy.sort((a, b) => a-b)
    arrayCopy.reverse()
    const topValues=arrayCopy.slice(0,selectedLength)
    console.log(topValues)
}

const theArray = [0, 5, 8, 22, -8, 10, 12, 15, 23, 4, 7, 3, 2]
const desiredLength = 27

maxSubarray(theArray, desiredLength)