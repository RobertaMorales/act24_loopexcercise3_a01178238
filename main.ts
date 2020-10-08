input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # .
            . # . . #
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.pause(100)
        basic.clearScreen()
    }
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . # . # .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . . # . .
            . # . # .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        let y = 0
        led.plot(x, y)
        basic.pause(100)
        led.unplot(x, y)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let face = 0; face <= 15; face++) {
        basic.showIcon(IconNames.Surprised)
        basic.clearScreen()
        basic.pause(100)
    }
})
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
}
basic.clearScreen()
