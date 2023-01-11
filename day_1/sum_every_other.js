const sumEveryOther = (number) => {
    splitNumber=String(number).split("")
    total=0
    for (i=0; i<splitNumber.length; i+=2){
        total+=Number(splitNumber[i])
    }
    console.log(total)
}

const number = 30200152
sumEveryOther(number)