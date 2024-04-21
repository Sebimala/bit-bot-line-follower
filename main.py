bitbot.select_model(BBModel.XL)
# 1 - 18% left
# 2 - 10% right
bitbot.bb_bias(BBRobotDirection.LEFT, 18)

def on_forever():
    if bitbot.read_line(BBLineSensor.LEFT) == 1 and bitbot.read_line(BBLineSensor.RIGHT) == 0:
        bitbot.rotatems(BBRobotDirection.LEFT, 30, 25)
    elif bitbot.read_line(BBLineSensor.LEFT) == 0 and bitbot.read_line(BBLineSensor.RIGHT) == 1:
        bitbot.rotatems(BBRobotDirection.RIGHT, 30, 25)
    else:
        bitbot.go(BBDirection.FORWARD, 20)
basic.forever(on_forever)
