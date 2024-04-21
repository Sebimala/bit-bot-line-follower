input.onButtonPressed(Button.A, function () {
    if (Running == 0) {
        Running = 1
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        Running = 0
        basic.showIcon(IconNames.No)
    }
})
let Running = 0
bitbot.select_model(BBModel.XL)
Running = 0
basic.forever(function () {
    if (Running == 1) {
        if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
            bitbot.rotatems(BBRobotDirection.Left, 50, 400)
        } else if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
            bitbot.rotatems(BBRobotDirection.Right, 50, 400)
        } else {
            bitbot.go(BBDirection.Forward, 10)
        }
    } else {
        bitbot.stop(BBStopMode.Brake)
    }
})
