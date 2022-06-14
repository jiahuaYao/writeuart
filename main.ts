bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
    count = 0
    running = true
})
bluetooth.onBluetoothDisconnected(function () {
    running = false
    basic.showString("D")
})
let running = false
let count = 0
bluetooth.startButtonService()
bluetooth.startUartService()
count = 0
running = false
basic.forever(function () {
    if (running) {
        led.plotBarGraph(
        count,
        1e+100
        )
        bluetooth.uartWriteValue("COUNT", count)
        count += 1000
        basic.pause(100)
    }
})
