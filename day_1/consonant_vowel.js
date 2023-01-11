const word = "Bangladesh"
const capitalAfterVowelNoRegex = (word) => {
    const wordInArray = word.split("")
    for (i = 0; i < wordInArray.length; i++) {
        if (wordInArray[i] === "a" | "e" | "i" | "o" | "u") {
            wordInArray.splice(i + 1, 1, wordInArray[i + 1].toUpperCase())
        }
    }
    console.log(wordInArray.join(""))
}

capitalAfterVowelNoRegex(word)

const capitalAfterVowel = (word) => {
    const wordInArray = word.split("")
    for (i = 0; i < wordInArray.length; i++) {
        if ((/[aeiou]/g).test(wordInArray[i])) {
            wordInArray.splice(i + 1, 1, wordInArray[i + 1].toUpperCase())
        }
    }
    console.log(wordInArray.join(""))
}

capitalAfterVowel(word)