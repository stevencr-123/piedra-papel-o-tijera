let Mano = 0
input.onButtonPressed(Button.A, function () {
    Mano = randint(1, 3)
    if (Mano == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Mano == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
