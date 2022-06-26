// Comentando uma Linha

/**
 *  Comentendo Varias Linhas
 *
 */

/**
 * VARIAVEIS
 *
 * Variaveis são valores que ficam alocado na memoria e que podem ser modificaos ao longo da execução do codigo
 *
 * Palavras reservadas para declarar variaveis
 * var nomeDaVariavel = valor
 * let nomeDaVariavel = valor
 */

/**
 * CONSTANTES
 *
 * São iguais as variaveis, porem o valor nao pode ser manipulado ou modificado apos a declaração da constante
 *
 * Palavras reservadas para declarar variaveis
 * const NOMEDAVARIAVEL = valor
 */

/**
 * FUNÇÕES
 *
 * Como declarar uma função
 * function nome(parametros){
 *
 * }
 */

function soma(num1, num2) {
  var resultado = num1 + num2

  return console.log(resultado)
}

//soma(3, 5) // Retorna "8" no console

/**
 *CONSOLE
 */

console.log('Hello world')

function retorneNumerosPares(arrayDeNumeros) {
  let numerosPares = []
  let numerosImpares = []
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] % 2 === 0) {
      numerosPares.push(arrayDeNumeros[i])
    }
    if (arrayDeNumeros[i] % 2 != 0) {
      numerosImpares.push(arrayDeNumeros[i])
    }
  }
  return console.log(
    numerosPares +
      ' são numeros pares, e ' +
      numerosImpares +
      ' são numeros impares'
  )
}

let array = [1, 2, 4, 5, 6, 7, 8, 9, 10]
retorneNumerosPares(array)
