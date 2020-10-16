console.log('Hello')

var temps = ''
var tours = 0
var cumul = 0

while (temps != null) {
  tours = tours + 1
  cumul = cumul + temps
  temps = question('Saisir le temps')
}

console.log(tours)
console.log(cumul)
