input.onButtonPressed(Button.A, function () {
    drive = 1
})
input.onButtonPressed(Button.B, function () {
    drive = 0
    speed = 10
})
let drive = 0
let speed = 0
let maxspeed = 30
speed = 10
drive = 0
bitbot.select_model(BBModel.XL)
basic.forever(function () {
    if (drive == 1) {
        if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
            bitbot.rotatems(BBRobotDirection.Left, 20, 100)
            if (speed > 4) {
                speed += -2
            }
        } else if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
            bitbot.rotatems(BBRobotDirection.Right, 20, 100)
            if (speed > 4) {
                speed += -2
            }
        } else {
            bitbot.go(BBDirection.Forward, speed)
            if (speed < maxspeed) {
                speed += 2
            }
        }
    } else {
        bitbot.stop(BBStopMode.Brake)
    }
})
