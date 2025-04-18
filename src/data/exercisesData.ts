export interface Exercise {
  id: number;
  title: string;
  description: string;
}

export const exercises: Exercise[] = [
  {
    id: 1,
    title: "Saudação do Reino",
    description: "Escreva uma função que exiba \"Bem-vindo à Terra-Média\"."
  },
  {
    id: 2,
    title: "Contador de Orcs",
    description: "Crie uma função que conte quantos orcs estão em uma lista."
  },
  {
    id: 3,
    title: "Forja de Nomes Élficos",
    description: "Receba um nome e retorne a versão \"élfica\" (ex: adicionar \"-el\" ao final)."
  },
  {
    id: 4,
    title: "Sorteador de Magias",
    description: "Faça uma função que escolha aleatoriamente uma magia de uma lista."
  },
  {
    id: 5,
    title: "Filtro de Anões",
    description: "Filtre nomes com menos de 5 letras de uma lista de guerreiros."
  },
  {
    id: 6,
    title: "Conversor de Runas",
    description: "Converta uma lista de strings para uppercase (como gritos de guerra)."
  },
  {
    id: 7,
    title: "Contagem Reversa do Apocalipse",
    description: "Imprima números de 10 até 1."
  },
  {
    id: 8,
    title: "Mapa do Tesouro",
    description: "Escreva uma função que receba coordenadas e retorne \"Tesouro encontrado\" se estiver no X do mapa."
  },
  {
    id: 9,
    title: "Detector de Trolls",
    description: "Verifique se uma string contém palavras proibidas."
  },
  {
    id: 10,
    title: "Tradutor Élfico",
    description: "Substitua todas as vogais por \"ë\"."
  },
  {
    id: 11,
    title: "Relógio do Tempo Mágico",
    description: "Crie uma função que exiba o horário atual formatado."
  },
  {
    id: 12,
    title: "Poção de Soma",
    description: "Some todos os valores de uma lista de números mágicos."
  },
  {
    id: 13,
    title: "Contador de Encantamentos",
    description: "Conte quantas vezes uma palavra aparece em um texto."
  },
  {
    id: 14,
    title: "Grimório de Palíndromos",
    description: "Verifique se uma palavra é igual quando invertida."
  },
  {
    id: 15,
    title: "Tabela de Elementos",
    description: "Exiba uma tabela com nomes e elementos (nomeado como \"elixir\" do personagem)."
  },
  {
    id: 16,
    title: "Gerador de Feitiços Aleatórios",
    description: "Gere uma string aleatória com letras mágicas e imprima."
  },
  {
    id: 17,
    title: "Bússola de Direções",
    description: "Crie uma função que receba \"norte\", \"sul\" etc., e retorne a ação correspondente."
  },
  {
    id: 18,
    title: "Inventário do Herói",
    description: "Adicione itens mágicos a uma lista sem repetir."
  },
  {
    id: 19,
    title: "Sistema de Pontos de Mana",
    description: "Crie um sistema que adicione/remova pontos de energia do mago."
  },
  {
    id: 20,
    title: "Simulador de Duelo",
    description: "Crie duas funções: uma para atacar e outra para defender, simulando um duelo de códigos mágicos."
  }
];