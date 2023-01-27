const now = new Date()

const year = now.getFullYear()  // 2023
// console.log(`Current Year is ${year}`)

const month = now.getMonth() + 1  //  1
// console.log(`Current month is ${month}`)

const date = now.getDate() //  27
// console.log(`Current date is ${date}`)

const day = now.getDay()  //  5
// console.log(day)

const hrs = now.getHours()  //  22
// console.log(hrs)

const min = now.getMinutes()
// console.log(min)



console.log(`Date and Time in YYYY-MM-DD HH:mm format is below
${year}-${month}-${date} ${hrs}:${min}
`)


console.log(`Date and Time in DD-MM-YYYY HH:mm format is below
${date}-${month}-${year} ${hrs}:${min}
`)

console.log(`Date and Time in DD/MM/YYYY HH:mm format is below
${date}/${month}/${year} ${hrs}:${min}
`)