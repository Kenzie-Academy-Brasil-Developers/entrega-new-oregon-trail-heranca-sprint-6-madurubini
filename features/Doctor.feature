# language: pt

Funcionalidade: Doctor

Como um Doctor
Eu devo curar os viajantes doentes
Para que eles possam seguir a viagem saudável

    Contexto:
    Dado um Doctor de nome "Luiz"
    E o Doctor sempre começa a viagem com 1 refeição
    E o Doctor sempre começa a viagem saudável

    Cenário: Encontrou um viajante doente
    Dado o viajante doente
    Quando o Doctor curá-lo
    Então o viajante ficará saudável

    Cenário:  viajante saudável
    Dado o viajante saudável 
    Quando o Doctor curá-lo
    Então o viajante manterá sua saúde