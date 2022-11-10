const mainText = "Hi, you can call me Hazu. I am a high school student who is interested in learning programming :)"

function setText(cur, txt) {
    if(cur < (txt.length + 1)) {
        const myPromise = new Promise(res => {
            setTimeout(function() {
                document.getElementById("Main-Text").innerText = txt.substring(0, cur)
                res()
            }, 14)
        })

        myPromise.then(function() {
            setText((cur + 1), txt)
        })
    } else {
        console.log("Complete")
    }
}

setText(0, mainText)
