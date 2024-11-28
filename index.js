const fs = require("fs")
const path = require("path")
const { program } = require("commander")
const { promisify } = require("util")
const heicConvert = require("heic-convert")

const convert = async (filename, quality) => {
  try {
    const ext = path.extname(filename).toLowerCase()
    if (ext !== ".heic") {
      console.log(`not a heic file: *${ext}`)
      return
    }

    const inputBuffer = await promisify(fs.readFile)(filename)
    const outputBuffer = await heicConvert({
      buffer: inputBuffer,
      format: "JPEG",
      quality,
    })

    const basePath = path.dirname(filename)
    const name = path.basename(filename, path.extname(filename))
    const newFilename = path.join(basePath, `${name}.jpg`)

    await promisify(fs.writeFile)(newFilename, outputBuffer)
  } catch (error) {
    console.log(`error converting ${filename}: `, error.message)
  }
}

program.option("-f, --filename <char>").option("-q, --quality <char>", "quality", "0.5")
program.parse()

const options = program.opts()
convert(options.filename, options.quality)
