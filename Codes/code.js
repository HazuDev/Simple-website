const mainText = "Hi, you can call me Hazu. I am a high school student who is interested in learning programming :)"
const textLen = mainText.length

var current = 1

function writeInDocument(cur) {
    const mainPromise = new Promise(res => {
        setTimeout(function() {
            document.getElementById("Main-Text").innerText = mainText.substring(0, cur)
            res()
        }, 10)
    })

    mainPromise.then(function() {
        current += 1
        writeInDocument(current)
    })
}

writeInDocument(current)