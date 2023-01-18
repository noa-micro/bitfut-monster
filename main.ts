input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 40)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopMotor(wuKong.MotorList.M1)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -40)
})
let Ojos = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    `)
basic.forever(function () {
	
})
loops.everyInterval(100, function () {
    Ojos = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (Ojos < 10 && Ojos > 1) {
        wuKong.setAllMotor(-40, 0)
        wuKong.setLightMode(wuKong.LightMode.BREATH)
        wuKong.lightIntensity(100)
        basic.pause(randint(200, 600))
        wuKong.setLightMode(wuKong.LightMode.OFF)
        wuKong.lightIntensity(0)
        wuKong.setAllMotor(40, 0)
    }
})
