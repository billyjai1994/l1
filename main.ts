input.onButtonPressed(Button.A, function () {
    robotbit.MotorRun(robotbit.Motors.M1A, 255)
})
input.onButtonPressed(Button.B, function () {
    robotbit.MotorRun(robotbit.Motors.M1A, 0)
})
basic.forever(function () {
	
})
