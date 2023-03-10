const lista = ["item1","item2","item3"]

const mt = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(lista)
console.log(mt)

mt.forEach(function(item){
    item.forEach(function(valor){
        console.log(valor)
    })
})

const pessoa1 = {
    nome : "Teste",
    idade: 20
}

pessoa1.nome = "teste2"
pessoa1.cpf = 9876543210

console.log(pessoa1)

class Pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    podeDirigir(){
        return (this.idade > 18) ? "Pode" : "Não pode"
    }
}

const pessoa2 = new Pessoa("Nome da pessoa 2", 35)
const pessoa3 = new Pessoa("Nome da pessoa 3", "99")

console.log(pessoa2)
console.log(pessoa2.podeDirigir())
console.log(pessoa3)
console.log(pessoa3.podeDirigir())