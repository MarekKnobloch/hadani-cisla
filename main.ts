let min = 1
let max = 100
let guess = 0
let tries = 0

input.onButtonPressed(Button.A, function () {
    // cislo je mensi
    max = guess - 1
    makeGuess()
})

input.onButtonPressed(Button.B, function () {
    // cislo je vetsi
    min = guess + 1
    makeGuess()
})

input.onButtonPressed(Button.AB, function () {
    // trefa
    basic.showString("uhodnuto!")
    basic.showString("pokus: " + tries)
})

function makeGuess() {
    guess = Math.round((min + max) / 2)
    tries += 1
    basic.showNumber(guess)
}

// zacatek hry
basic.showString("mysli!")
makeGuess()
