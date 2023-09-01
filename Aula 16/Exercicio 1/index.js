function maiorDeIdade(idade) {
    if (idade > 18) {
      console.log("Você pode dirigir.")  
    } else {
      console.log("Você não pode dirigir.")
    }
}
let idade = Number(prompt("Digite sua idade")) 

maiorDeIdade(idade)

