# language: pt

Funcionalidade: Hunter

Como um Hunter
Eu devo caçar mais mantimentos
E racionar meus mantimentos 
E alimentar outros viajantes
Para continuar a viagem saudável

    Contexto:
    Dado um Hunter de nome "Tobias"
    E ele sempre começa a viagem com 2 refeições
    E sempre começa a viagem saudável

    Cenário: Caçou para conseguir mais refeições
    Quando o Hunter sair para caçar 1 vezes
    Então a quantidade de refeições deve ser igual a 7

    Cenário: Comeu e seguiu saudável
    Quando o Hunter parar para comer 1 vezes
    Então a quantidade de refeições deve ser igual a 0
    E o Hunter não ficará doente

    Cenário: Comeu e ficou doente
    Quando o Hunter parar para comer 2 vezes
    Então a quantidade de refeições for igual a 0
    E o Hunter ficará doente

    Cenário: Transferiu Comida a um viajante 
    Dado um viajante com 1 refeições
    Quando o Hunter tranferir 2 refeições
    E a comida do Hunter for maior que 0
    Então o viajante ficará com 3 refeições

    Cenário: Saiu para caçar, comeu e ficou saudável
    Quando o Hunter sair para caçar 1 vezes
    E o Hunter parar para comer 1 vezes
    Então o Hunter ficará com 5 refeiçoes
    E o Hunter não ficará doente

    


    


