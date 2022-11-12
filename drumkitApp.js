
// const sounds = ['boom','clap','hihat','kick','openhat','ride','snare','tink','tom']

// sounds.forEach(sound => {

//     const btn = document.createElement('button');

// })


const sound = document.querySelectorAll('audio');

/* this loop graps the list of audio files and creats a button */

sound.forEach(element => {

    let btn = document.createElement ('button')
    let btnlabel = document.createTextNode(element.id)

    btn.appendChild(btnlabel);
    document.body.appendChild(btn) /* this prints out to the page

    console.log(element)
    
    /* ====== this listens out for when a button is clicked and plays the sound */

    btn.addEventListener('click', (evt) => {
        let src = element.getAttribute ('src');
        
        // console.log(src)
        // console.log("i am here")
        let soundto = new Audio ()

        soundto.src = src
        soundto.load()
        soundto.play()
    })

    /* ====== this plays the sound based on keys pressed*/

    document.addEventListener('keydown', function(e) {

            if (e.keyCode == 65) {
              document.getElementById('boom').play(); /* a */
            } else if (e.keyCode == 83) {
                document.getElementById('clap').play(); /* s */
            } else if (e.keyCode == 68) {
                document.getElementById('hihat').play(); /* d */
            } else if (e.keyCode == 76) {
                document.getElementById('kick').play(); /* l */
            } else if (e.keyCode == 75) {
                document.getElementById('openhat').play(); /* k */
            } else if (e.keyCode == 87) {
                document.getElementById('ride').play(); /* w */
            } else if (e.keyCode == 73) {
                document.getElementById('tink').play(); /* i */
            } else if (e.keyCode == 84) {
                document.getElementById('tom').play(); /* t */
            }
  
    })

})

