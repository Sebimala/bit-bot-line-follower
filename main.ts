input.onButtonPressed(Button.A, function () {
    Running = 1
})
let Running = 0
bitbot.select_model(BBModel.XL)
Running = 0
basic.forever(function () {
    if (Running == 1) {
        if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
            bitbot.rotatems(BBRobotDirection.Left, 67, 400)
        } else if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
            bitbot.rotatems(BBRobotDirection.Right, 61, 400)
        } else {
            bitbot.go(BBDirection.Forward, 30)
        }
    } else {
        bitbot.go(BBDirection.Forward, 0)
    }
})
