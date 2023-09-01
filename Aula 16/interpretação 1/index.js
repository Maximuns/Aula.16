
// Leia o c�digo

const respostaDoUsuario = prompt("Digite o n�mero que voc� quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
	console.log("Passou no teste.")
}
else {
	console.log("Não passou no teste.")
}

// a) Explique o que o c�digo faz. Qual o teste que ele realiza?
/**
 * O códico pede para o usuario um numero para vocÊ testar em seguida o programa divide esses número por e pergunta se 
 * é igual ao 0  se for para dar ""passou no teste" se não ""não passou no teste"
 */
// b) Para que tipos de n�meros ele imprime no console "Passou no teste"?
/**
 * todos os códicos igual a 0 
 */
// c) Para que tipos de n�meros a mensagem � "N�o passou no teste"?
/**
 * Para todos os números que divididos por 2 não dão 0
 */