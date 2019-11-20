basic.forever(function () {
    for (let index = 0; index <= 3071; index) {
        pins.analogWritePin(AnalogPin.P0, index)
        if (index >= 3071) {
            index = 0
        } else {
            index = index + 3071 / 20
        }
    }
})
