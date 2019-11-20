basic.forever(function () {
    pins.i2cWriteNumber(32, 2055, NumberFormat.Int32BE, false);
})
