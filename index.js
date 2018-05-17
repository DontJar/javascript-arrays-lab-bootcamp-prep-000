const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  [...kittens, "Broom"];
}