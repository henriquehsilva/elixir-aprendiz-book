export interface Exercise {
  id: number;
  title: string;
  description: string;
  testExample?: string;
}

export const exercises: Exercise[] = [
  {
    id: 1,
    title: "FizzBuzz",
    description: "Escreva uma função que percorra os números de 1 até 100 e, para cada número: se for múltiplo de 3, retorne 'Fizz'; se for múltiplo de 5, retorne 'Buzz'; e se for múltiplo de ambos, 'FizzBuzz'. Caso contrário, retorne o próprio número.",
    testExample: "assert fizzbuzz(3) == 'Fizz'"
  },
  {
    id: 2,
    title: "Palíndromo",
    description: "Verifique se uma palavra ou frase é lida da mesma forma de trás para frente, ignorando espaços e acentuação. Por exemplo, 'radar' e 'anilina' são palíndromos.",
    testExample: "assert palindromo('radar') == true"
  },
  {
    id: 3,
    title: "Anagramas",
    description: "Determine se duas palavras são compostas pelas mesmas letras, em ordens diferentes. 'amor' e 'roma' são anagramas, mas 'amor' e 'rima' não são.",
    testExample: "assert anagramas('amor', 'roma') == true"
  },
  {
    id: 4,
    title: "Números Primos",
    description: "Retorne todos os números primos até um número fornecido. Por exemplo, até 10, os primos são 2, 3, 5 e 7.",
    testExample: "assert primos(10) == [2, 3, 5, 7]"
  },
  {
    id: 5,
    title: "Soma de Pares",
    description: "Encontre todos os pares de números em uma lista que somam um valor alvo. Exemplo: em [1, 2, 3, 4], os pares que somam 5 são [1,4] e [2,3].",
    testExample: "assert soma_de_pares([1,2,3,4], 5) == [[1,4], [2,3]]"
  },
  {
    id: 6,
    title: "Maior Palavra",
    description: "Receba uma frase e encontre a palavra com maior quantidade de letras. Por exemplo: 'o mago de elixir' → 'elixir'.",
    testExample: "assert maior_palavra('o mago de elixir') == 'elixir'"
  },
  {
    id: 7,
    title: "Contador de Caracteres",
    description: "Dada uma string, conte quantas vezes cada caractere aparece. Exemplo: 'aab' → 'a': 2, 'b': 1.",
    testExample: "assert contar_caracteres('aab') == %{ 'a' => 2, 'b' => 1 }"
  },
  {
    id: 8,
    title: "Cifra de César",
    description: "Implemente um deslocamento simples das letras do alfabeto. Exemplo: com deslocamento 1, 'abc' vira 'bcd'.",
    testExample: "assert cifra_cesar('abc', 1) == 'bcd'"
  },
  {
    id: 9,
    title: "Ordenação",
    description: "Ordene uma lista de inteiros do menor para o maior. Exemplo: [3,2,1] → [1,2,3].",
    testExample: "assert bubble_sort([3,2,1]) == [1,2,3]"
  },
  {
    id: 10,
    title: "Busca Binária",
    description: "Procure por um número em uma lista ordenada usando divisão e conquista. Retorne true se existir.",
    testExample: "assert busca_binaria([1,2,3,4], 3) == true"
  },
  {
    id: 11,
    title: "Contagem de Vogais",
    description: "Conte quantas vogais (a, e, i, o, u) aparecem em uma palavra.",
    testExample: "assert contar_vogais('elixir') == 3"
  },
  {
    id: 12,
    title: "Inversão de String",
    description: "Receba uma palavra e retorne seus caracteres invertidos. Exemplo: 'elixir' → 'rixile'.",
    testExample: "assert inverter('elixir') == 'rixile'"
  },
  {
    id: 13,
    title: "Sequência de Fibonacci",
    description: "Retorne os n primeiros números da sequência de Fibonacci: 0, 1, 1, 2, 3, 5...",
    testExample: "assert fibonacci(5) == [0,1,1,2,3]"
  },
  {
    id: 14,
    title: "Validador de CPF",
    description: "Verifique se um CPF é válido segundo o algoritmo oficial de validação.",
    testExample: "assert validar_cpf('123.456.789-09') == false"
  },
  {
    id: 15,
    title: "Calculadora de IMC",
    description: "Receba peso (kg) e altura (m) e calcule o índice de massa corporal (IMC).",
    testExample: "assert imc(70, 1.75) == 22.86"
  },
  {
    id: 16,
    title: "Conversor de Temperatura",
    description: "Transforme um valor de temperatura de Celsius para Fahrenheit e vice-versa.",
    testExample: "assert celsius_para_fahrenheit(0) == 32"
  },
  {
    id: 17,
    title: "Validador de Parênteses",
    description: "Verifique se uma expressão possui todos os parênteses (e colchetes/chaves) corretamente fechados.",
    testExample: "assert validar_parenteses('()[]{}') == true"
  },
  {
    id: 18,
    title: "Contador de Palavras",
    description: "Receba uma frase e conte quantas palavras ela possui.",
    testExample: "assert contar_palavras('o mago elixir') == 3"
  },
  {
    id: 19,
    title: "Jogo da Forca",
    description: "Simule a revelação parcial de letras em uma palavra com base na letra escolhida.",
    testExample: "assert forca('elixir', 'e') == ['e','_','_','_','_','_']"
  },
  {
    id: 20,
    title: "Calculadora de Troco",
    description: "Calcule o troco entre o valor pago e o preço da compra, retornando as moedas necessárias.",
    testExample: "assert troco(10, 7.5) == [2, 0.5]"
  }
];