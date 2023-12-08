class hero{
    constructor(heroName, heroType, heroXp, heroLevel){
        this.heroName = heroName
        this.heroType = heroType
        this.heroXp = heroXp = 0
        this.heroLevel = heroLevel = "Ferro"
                      
    }

    createMs(){         
        console.log(`Foi criado o Herói ${this.heroName}, do tipo ${this.heroType} e está no nível ${this.heroLevel}`)
    }

    get name(){
        return this.heroName
    }

    get type(){
        return this.heroType
    }

    get xp(){
        return this.heroXp
    }

    get level(){
        return this.heroLevel
    }

    set setHeroXp(refreshXp){
        this.heroXp = refreshXp
    }

    set setHeroLevel(refreshLv){
        this.heroLevel = refreshLv
    }

    valueGenerator(){
        return parseInt(Math.random() * 50)
    }

    attackMs(){
        switch (this.heroType) {
            case "Mago":
                console.log(`O ${this.heroType} atacou usando Magia`);
                break;
            case "Ninja":
                console.log(`O ${this.heroType} atacou usando Shuriken`);
                break;
            case "Guerreiro":
                console.log(`O ${this.heroType} atacou usando Espada`);
                break;
        }

    }
   
    getLevel(){
        
        
        
        if (this.heroXp <= 100){
            this.setHeroLevel = "FERRO"
        }else if (this.heroXp > 110 && this.heroXp <= 200){
            this.setHeroLevel = "BRONZE"
        }else if (this.heroXp > 210 && this.heroXp <= 500){
            this.setHeroLevel = "PRATA"
        }else if (this.heroXp > 510 && this.heroXp <= 800){
            this.setHeroLevel = "OURO"
        }else if (this.heroXp > 810 && this.heroXp <= 900){
            this.setHeroLevel = "DIAMANTE"
        }else if (this.heroXp > 910 && this.heroXp <= 1000){
            this.setHeroLevel = "LENDARIO"
        }else{
            this.setHeroLevel = "IMORTAL"
        }

            console.log(`O ${this.heroType} possui agora um XP de ${this.heroXp} e está no nível de ${this.heroLevel}`)
    }
}

function createHero(name, type){

    letHeroCreation = new hero(name, type)

    letHeroCreation.createMs()

    return letHeroCreation

}

// A função batalha ela ativa um duelo de números aleatórios. Se um for maior, este ganha e seu xp e nível são atualizados.
// Coloquei a função de forma a acumular o XP do herói e atualizar seu nível conforme seu XP acumulado.

function battle (player1, player2){

   console.log("-------------------------------------------")
   console.log(`O Herói ${player1.heroType} vai batalhar contra o Herói ${player2.heroType}`)
   console.log("-------------------------------------------")
   console.log("-------------------------------------------")
   player1.attackMs()
   player2.attackMs()
   
   btl1 = player1.valueGenerator() 
   btl2 = player2.valueGenerator()

   console.log("-------------------------------------------")
   console.log("-------------------------------------------")

   if (btl1 > btl2) {
        player1.setHeroXp = player1.xp + ((btl1 - btl2) * 5)
        console.log(`O ataque do Herói ${player1.heroType} foi de ${btl1} contra um ataque de ${btl2} do Herói ${player2.heroType} - Vitória do ${player1.heroType} ${player1.heroName}`)
        player1.getLevel()
   }
   else if (btl2 > btl1) {
        player2.setHeroXp = player2.xp + ((btl2 - btl1) * 5)
        console.log(`O ataque do Herói ${player2.heroType} foi de ${btl2} contra um ataque de ${btl1} do Herói ${player1.heroType} - Vitória do ${player2.heroType} ${player2.heroName}`)
        player2.getLevel()
   }
   else {
        console.log(`A batalha deu empate`)
   }

}


// O HERÓRI É CRIADO PELO PERFIL. É CHAMADA A FUNÇÃO DE CRIAÇÃO DO HERÓI, QUE UTILIZA DA CLASSE PARA GUARDAR AS INFOS DO HERÓI

let profile1 = createHero("Felipão", "Mago")

console.log("-------------------------------------------")

let profile2 = createHero("Will Doido", "Ninja")

console.log("-------------------------------------------")

let profile3 = createHero("Fulano", "Guerreiro")

// Função de batalha, para chamar a disputa entre os dois jogadores como colocado no descritivo da função
// Então, podemos criar várias batalhas que os jogadores vão disputando e tendo seus xps e níveis atualizados.

console.log("-------------------------------------------")
console.log("-------------------------------------------")

battle(profile1, profile2)

console.log("-------------------------------------------")

battle(profile1, profile2)

console.log("-------------------------------------------")

battle(profile3, profile2)

console.log("-------------------------------------------")

battle(profile1, profile3)

console.log("-------------------------------------------")

battle(profile2, profile1)

console.log("-------------------------------------------")

battle(profile3, profile1)

console.log("-------------------------------------------")

battle(profile1, profile2)

console.log("-------------------------------------------")

battle(profile1, profile2)

console.log("-------------------------------------------")

battle(profile3, profile2)

console.log("-------------------------------------------")

battle(profile1, profile3)

console.log("-------------------------------------------")

battle(profile2, profile1)

console.log("-------------------------------------------")

battle(profile3, profile1)

console.log("-------------------------------------------")
console.log("-------------------------------------------")
console.log(profile1)
console.log("-------------------------------------------")
console.log("-------------------------------------------")
console.log(profile2)
console.log("-------------------------------------------")
console.log("-------------------------------------------")
console.log(profile3)
