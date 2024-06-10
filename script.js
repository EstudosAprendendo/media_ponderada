const n1 = Number(prompt("Digite a primeira nota"))
const n2 = Number(prompt("Digite a segunda nota"))
const n3 = Number(prompt("Digite a terceira nota"))

const p1 = 1
const p2 = 1
const p3 = 2

const media = ((n1 * p1) + (n2 * p2) + (n3 * p3)) / (p1 + p2 + p3)

console.log("A media ponderada é: " + media)
