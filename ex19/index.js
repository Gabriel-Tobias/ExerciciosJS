const average = (...numbers)=>{
    const sum = numbers.reduce((accum, num)=> accum + num, 0)
    return sum / numbers.length 
}


const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / weightSum
  }

const median = (...numbers)=>{
    const orderedNumbers = [...numbers].sort((a,b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)
    if(orderedNumbers.length % 2 !== 0){
        return orderedNumbers[middle]
    }
    const fistMedian = orderedNumbers[middle -1]
    const secondMedian = orderedNumbers[middle]
    return average(fistMedian, secondMedian)
}

const mode = (...numbers) =>{
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    quantities.sort((a,b) => b[1] - a[1])
    return quantities[0][0]
}

console.log(`Média Aritmética Simples: ${average(3, 6, 10, 9)}`)

console.log(`Média Ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7, weight: 9 },
    { number: 10, weight: 1 },
  )}`)

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`) 


console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)