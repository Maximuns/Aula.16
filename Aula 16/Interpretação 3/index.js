
// Leia o c�digo

const numero = Number(prompt("Digite o primeiro n�mero."))

if (numero > 0) {
	console.log("Esse n�mero passou no teste")
	let mensagem = "Essa mensagem � secreta!"
}

console.log(mensagem)

// a) O que a primeira linha est� fazendo?
/**
 * Pedindo para o usuário digitar um numero
 */
// b) Considere um usu�rio digitou o n�mero 10. Qual ser� a mensagem do terminal? E se fosse o n�mero -10?
/**
 * não funcionará pq o número é menor q 0 não vai passar no teste
 */
// c) Haver� algum erro no console? Justifique usando os conceitos de bloco ou escopo.
/**
 * o let mensagem secreta não tem ultilidade e se digitar um numero negativo o programa não irá reconhecer,
 * irá aparecer undefined
 */