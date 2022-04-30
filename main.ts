input.onButtonPressed(Button.A, function () {
    _1 += 1
    basic.showNumber(_1)
})
input.onButtonPressed(Button.AB, function () {
    Countdown()
})
input.onButtonPressed(Button.B, function () {
    _1 += -1
    basic.showNumber(_1)
})
function Countdown () {
    for (let index = 0; index <= _1 - 1; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(_1 - index)
    }
    music.playTone(392, music.beat(BeatFraction.Quarter))
    basic.showString("GO")
}
let _1 = 0
_1 = 0
basic.forever(function () {
	
})
