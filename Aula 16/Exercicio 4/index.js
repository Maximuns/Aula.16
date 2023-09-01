
/**
 * 
 * Considere a situa��o
 * 
 * Voc� vai ao cinema com um amigo ou amiga, por�m ele/ela s� assistir� a um filme com voc� se ele for do g�nero fantasia e se o ingresso custar menos de 15 reais.
 * 
 * Fa�a um c�digo que pergunta ao usu�rio qual o g�nero de filme que v�o assistir e outra pergunta sobre o pre�o do ingresso, ent�o verifique se seu amigo ou amiga vai topar assistir o filme.
 * 
 * Caso positivo, imprima no console a mensagem: "Bom filme!", caso contr�rio, imprima "Escolha outro filme :(".
 * 
**/

let filme = prompt("Qual o gênero de filme quer assitir?").toLowerCase()
let ingresso = prompt("Qual o preço do ingresso?")
switch (filme){
    case 'Ação':
      console.log('Hoje não')
      break
    case 'Fantasia':
      console.log('chato, mas pelo menos é barato')
      break
    case 'Terror':
      console.log('Boa, vai ser esse')
      break
    default:
      console.log('O preço do ingresso é R$15,00')
      break
  }
  