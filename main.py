def on_bluetooth_connected():
    global count, running
    basic.show_string("C")
    count = 0
    running = True
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    global running
    running = False
    basic.show_string("D")
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

running = False
count = 0
bluetooth.start_button_service()
bluetooth.start_uart_service()
count = 0
running = False

def on_forever():
    global count
    if running:
        led.plot_bar_graph(count, 1e+100)
        bluetooth.uart_write_value("COUNT", count)
        count += 1000
        basic.pause(100)
basic.forever(on_forever)
