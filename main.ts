bitbot.select_model(BBModel.XL)
basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.rotatems(BBRobotDirection.Left, 30, 25)
    } else if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.rotatems(BBRobotDirection.Right, 30, 25)
    } else {
        bitbot.go(BBDirection.Forward, 20)
    }
})
