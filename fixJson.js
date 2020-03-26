const fs = require("fs")

const filePath = process.argv[2]
console.log(filePath)

const fileBuffer = fs.readFileSync(filePath)
const fileContents = fileBuffer.toString()

const parsedJson = JSON.parse(
  fileContents
    .replace(/'/g, '"')
    .replace(/False/g, "false")
    .replace(/True/g, "true")
)

console.log(JSON.stringify(parsedJson))
