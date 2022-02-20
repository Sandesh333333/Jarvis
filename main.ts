let list: number[] = []
radio.onReceivedValue(function (name, value) {
    Radiopidia = 0
    for (let value of list) {
        basic.clearScreen()
    }
    radio.setGroup(20)
    radio.sendNumber(34.4)
    radio.sendValue("Maclinu", 15.2)
    radio.sendString("Rapidomenia")
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_ACCELEROMETER,
    EventBusValue.MICROBIT_BUTTON_EVT_UP
    )
    radio.setTransmitSerialNumber(true)
    radio.setFrequencyBand(20)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    input.setSoundThreshold(SoundThreshold.Loud, 100)
    music.ringTone(277)
    music.setBuiltInSpeakerEnabled(true)
    music.changeTempoBy(25)
    music.changeTempoBy(20)
    music.setVolume(127)
    music.stopMelody(MelodyStopOptions.Foreground)
    music.stopAllSounds()
    music.setTempo(120)
    for (let index = 0; index < 10; index++) {
        soundExpression.soaring.playUntilDone()
        radio.setGroup(9)
        basic.pause(100)
    }
    input.calibrateCompass()
})
let Radiopidia = 0
basic.showString("Hello!")
basic.showIcon(IconNames.Scissors)
basic.pause(100)
basic.showIcon(IconNames.Heart)
basic.showArrow(ArrowNames.SouthWest)
loops.everyInterval(650, function () {
    basic.pause(100)
    Radiopidia = 10.1
    Radiopidia += 10.5
})
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
