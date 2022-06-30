bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
    count = 0
    running = true
})
bluetooth.onBluetoothDisconnected(function () {
    running = false
    count = 0
    basic.showString("D")
})
let running = false
let count = 0
basic.showIcon(IconNames.Heart)
bluetooth.startButtonService()
bluetooth.startUartService()
bluetooth.startTemperatureService()
count = 0
running = false
basic.forever(function () {
    if (running) {
        led.plotBarGraph(
        count,
        1e+100
        )
        basic.pause(100)
        bluetooth.uartWriteValue("COUNT", count)
        count += 1000
    }
})
