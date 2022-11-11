for (let index = 0; index <= 2147000000; index++) {
    basic.showString("Tere!")
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.pause(500)
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
    	
    }
})
