
/**
 * 
 * Repita o exerc�cio anterior, mas utilizando a estrutura de "switch/case".
 * 
 * Dica: Lembre-se que "switch/case" é como se fosse um "if", mas verifica somente igualdades estritas (===).
 * 
**/

let turno = prompt("Insira o turno que você estuda: M(Matutino, V(Vespertino), N(Noturo)").toUpperCase()

switch (turno){
  case 'M':
    console.log('Bom dia!')
    break
  case 'V':
    console.log('Boa Tarde!')
    break
  case 'N':
    console.log('Boa noite!')
    break
  default:
    console.log('Nenhum turno encontrado')
    break
}
