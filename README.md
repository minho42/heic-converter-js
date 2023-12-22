CLI program that converts HEIC to jpg

### Install
```shell
npm i 
```

### Use
```shell
# image.HEIC -> image.jpg
node index.js -f image.HEIC
node index.js -f image.HEIC -q 0.5
```

### Help
```shell
❯ node index.js -h
Usage: index [options]

Options:
  -f, --filename <char>
  -q, --quality <char>   quality (default: "0.5")
  -h, --help             display help for command

```