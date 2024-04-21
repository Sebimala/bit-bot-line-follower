input.onButtonPressed(Button.A, function () {
    if (Running == 0) {
        Running = 1
    } else {
        Running = 0
    }
})
input.onButtonPressed(Button.B, function () {
	
})
let Running = 0
bitbot.select_model(BBModel.XL)
Running = 0
let list = [0, 1]
basic.forever(function () {
    if (Running == 1) {
        if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
            bitbot.rotatems(BBRobotDirection.Left, 30, 25)
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        } else if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
            bitbot.rotatems(BBRobotDirection.Right, 30, 25)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else {
            bitbot.goms(BBDirection.Forward, 60, 50)
        }
    } else {
        bitbot.stop(BBStopMode.Brake)
        basic.clearScreen()
    }
})
