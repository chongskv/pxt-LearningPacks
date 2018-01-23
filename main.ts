enum d {
    //% block="Forward"
    F,
    //% block="Backward"
    B
}
enum leds {
    //% block="On"
    on = 1,
    //% block="Off"
    off = 0
}

//% weight=0 color=#2E2EFE icon="\uf02d" block="Learning Packs"
namespace LearningPack {
    //% blockId="pack1" block="Pack 1 LED |red %red|yellow %yellow|green %green"
    //% blockGap=2 weight=0 blockExternalInputs=true
    //% red.min=0 red.max=1 yellow.min=0 yellow.max=1 green.min=0 green.max=1
    //% icon="\uf0eb"
    export function LED(red: leds, yellow: leds, green: leds): void {
        pins.digitalWritePin(DigitalPin.P0, red)
        pins.digitalWritePin(DigitalPin.P1, yellow)
        pins.digitalWritePin(DigitalPin.P2, green)
    }

    //% blockId="pack3" block="Pack 3 car speed |left %left|right %right|direction %d"
    //% blockGap=2 weight=1 blockExternalInputs=true
    //% left.min=0 left.max=1023 right.min=0 right.max=1023
    //% icon="\uf1b9"
    export function SpeedControl(left: number, right: number, Direction: d): void {
        if (Direction == d.F) {
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.analogWritePin(AnalogPin.P8, left)
            pins.analogWritePin(AnalogPin.P0, right)
        }
        else {
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.digitalWritePin(DigitalPin.P16, 1)
            pins.analogWritePin(AnalogPin.P8, 1023 - left)
            pins.analogWritePin(AnalogPin.P0, 1023 - right)
        }
    }
}