console.clear();

const prompt = require("prompt-sync")();

//Projeto 2 - Jokenpô
//O Jokenpô é o popular jogo do "pedra, papel e tesoura".
//A premissa é simples, você tem 3 elementos para escolher,
//e cada um deles vence de um, e perde para o outro.

//Requisitos

//Para esse projeto, os requisitos fundamentais serão:
//Permitir que eu decida quantas rodadas iremos fazer;
//Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
//Decidir de forma aleatória a decisão do computador;
//Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
//Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
//Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
//Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
//Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.Requisitos
//Para esse projeto, os requisitos fundamentais serão:
//Permitir que eu decida quantas rodadas iremos fazer;
//Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
//Decidir de forma aleatória a decisão do computador;
//Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
//Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
//Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
//Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
//Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.

const jokenpo = ['PEDRA', 'PAPEL', 'TESOURA'];
let p1Venceu = 0;
let pcVenceu = 0;
let repet = 'sim';
console.log("JOKENPO")
console.log(`As regras são simples, existem 3 elementos para a disputa, sendo eles 'Pedra', 'Papel' e 'Tesoura', sendo assim, vamos ver as condições de vitoria, quem ganha de quem...
PEDRA ganha de TESOURA(Pedra quebra Tesoura), e perde para PAPEL(Papel embrulha Pedra).
PAPEL ganha de PEDRA(Papel embrulha Pedra), e perde para TESOURA(Tesoura corta Papel).
TESOURA ganha de PAPEL(Tesoura corta Papel), e perde para PEDRA(Pedra quebra Tesoura).
Acha que consegue vencer o poderoso PC DA NASA e suas altas probabilidades de vitória? Vamos conferir, boa sorte!
`)

let nome = prompt('Diga jogador, qual seu nome? ').toUpperCase();
 

while(repet == 'sim'){
    let rodadas = +prompt(`É um prazer ${nome}, quantas rodadas deseja jogar? `);
    console.log('Ótimo, vamos lá!');

    for(let i = 0; i < rodadas; i++){
        let jogadaP1 = prompt(`${nome}, faça sua jogada. Escolha entre "Pedra", "Papel" e "Tesoura": `).toUpperCase();
        
        while (jogadaP1 != 'PEDRA' && jogadaP1 != 'PAPEL' && jogadaP1 != 'TESOURA') {
            console.log('Jogada inválida, tente novamente.')
            jogadaP1 = prompt(`${nome}, faça sua jogada. Escolha entre "Pedra", "Papel" e "Tesoura": `).toUpperCase();
        }

        let pedra = jokenpo[0];
        let papel = jokenpo[1];
        let teso = jokenpo[2];
        let jogadaPc = Math.floor(Math.random() * jokenpo.length);

        if (jogadaPc == 0) {
            console.log(`Escolha PC: ${pedra}`);

        } else if (jogadaPc == 1) {
            console.log(`Escolha PC: ${papel}`);

        } else {
            console.log(`Escolha PC: ${teso}`);
        }

        console.log(`Sua escolha: ${jogadaP1}`);
        console.log();

        if (jogadaP1 == 'PEDRA' && jogadaPc == 1) {
            console.log(`O PC venceu!`);
            pcVenceu++
        } else if (jogadaP1 == 'PAPEL' && jogadaPc == 2) {
            console.log(`O PC venceu!`);
            pcVenceu++;

        } else if (jogadaP1 == 'TESOURA' && jogadaPc == 0) {
            console.log(`O PC venceu!`);
            pcVenceu++;

        } else if (jogadaP1 == 'PEDRA' && jogadaPc == 2) {
            console.log(`Você venceu!`);
            p1Venceu++

        } else if (jogadaP1 == 'PAPEL' && jogadaPc == 0) {
            console.log(`Você venceu!`);
            p1Venceu++

        } else if (jogadaP1 == 'TESOURA' && jogadaPc == 1) {
            console.log(`Você venceu!`);
            p1Venceu++

        } else {
            console.log('Empate, tentem novamente!');
        }

        console.log();

        console.log(`PLACAR: ${nome} ${p1Venceu} x ${pcVenceu} PC`);
        console.log();
        

    }
    
    if(p1Venceu > pcVenceu){
        console.log(`Jogo encerrado! O grande campeão: ${nome}, parabéns!! `)
    }else if(pcVenceu > p1Venceu){
        console.log(`Jogo encerrado! Voce perdeu, verme inutil. `)
    }else{
        console.log(`Jogo encerrado, não houve um campeão. >:|`);
    }
    console.log();
    repet = prompt('Deseja jogar novamente? ').toLowerCase();
    
    pcVenceu = 0;
    p1Venceu = 0;

    
}