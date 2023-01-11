const replaceZeroes = (number) => {
    let splitNumber = String(number).split("")
    console.log(splitNumber)
    let zeroCounter = 0
    let i=0
    while (i < splitNumber.length) {
        if (splitNumber[i] === "0") {
            zeroCounter++
            if (splitNumber[i + 1] !== "0") {
                splitNumber.splice(i, 1, zeroCounter)
                zeroCounter = 0
            }
            else {
                splitNumber.splice(i, 1)
                i--
            }

        }
        i++
    }
    return(splitNumber.join(""))
}

const number1 = 01000200002010000
console.log(replaceZeroes(number1))
        // const replaceZeroes = (number) => {
        //     let string = String(number)
        //     thisArray=string.split("0")
        //     console.log(thisArray)
        //     let zeroCounter = 1
        //     for (i=0; i<thisArray.length; i++){        
        //         if (thisArray[i]===""){
        //             zeroCounter++
        //             if (thisArray[i+1]!==""){
        //                 thisArray.splice(i, 1, zeroCounter)
        //                 zeroCounter=1
        //             }

        //             console.log(thisArray)
        //     }}
        // while (string.includes("0")) {
        //     let firstZero = string.search(/0/)
        //     let continuousZeroes = 0
        //     let slicedString = string.slice(firstZero + 1)
        //     while (slicedString.startsWith("0")) {
        //         continuousZeroes++
        //         firstZero++
        //         slicedString = string.slice(firstZero)
        //     }
        //     string=string.replace("0", continuousZeroes)
        //     string=string.replaceAll("0", "")
        //     let newString = string.replace(/0*/, continuousZeroes)
        //     console.log(slicedString)
        //     console.log(continuousZeroes)

        //}
        //     return(thisArray.join(""))
        // }

    // const splitNumber = String(number).split("")
    // console.log(splitNumber)
    // splitNumber.forEach(element => Number(element))
    // console.log(splitNumber)
    //     for (i = 0; i < splitNumber.length; i++) {
    //         if (splitNumber[i] === 0) {
    //             const slicedArray = splitNumber.slice(i)
    //             console.log(splitNumber)
    //             const firstNonZero = slicedArray.indexOf(/1-9/)
    //             console.log(splitNumber)
    //             splitNumber.splice(i, firstNonZero, firstNonZero)
    //             console.log(splitNumber)
    //     }
    // }
    // return splitNumber.join("")
    // }