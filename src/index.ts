// types
interface Competitor {
    name: string,
    health: number,
    attack: number
}

type PlayerProps = {
    name: string,
    health: number,
    attack: number,
    money: number
}

type EnemyProps = {
    name: string,
    health: number,
    attack: number
}

// classes
class Player implements Competitor {
    name: string;
    health: number;
    attack: number;
    money: number;
    constructor(props: PlayerProps) {
        this.name = props.name;
        this.health = props.health;
        this.attack = props.attack;
        this.money = props.money;
    };
    reset() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    }
}

class Enemy implements Competitor {
    name: string;
    health: number;
    attack: number;
    constructor(props: EnemyProps) {
        this.name = props.name;
        this.health = props.health;
        this.attack = props.attack;
    }
}

// execution
const robotName: string = window.prompt("What is your Robot's name?");
let player = new Player({ name: robotName, health: 100, attack: 10, money: 10 });
const enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];

const fight = (enemy: EnemyProps) => {
    const promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose');
    if(promptFight.toUpperCase() === 'SKIP') {
        const confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if(confirmSkip) {
            player.money = player.money -10;
            window.alert(`${player.name} pays 10 to skip this fight. You have ${player.money} money remaining.`);
            return;
        }
    }

    while(player.health > 0 && enemy.health >0) {
        enemy.health = enemy.health - player.attack;
        window.alert(`${player.name} attacked ${enemy.name}.`)
    
        if(enemy.health <= 0) {
            window.alert(`${enemy.name} has died! ${player.name} has been awarded 20 money.`);
            player.money = player.money + 20;
            return;
        } else {
            window.alert(`${enemy.name} still has ${enemy.health} health left.`);
        }
    
        player.health = player.health - enemy.attack;
        window.alert(`${enemy.name} attacked ${player.name}.`)
        if(player.health <= 0) {
            window.alert(`${player.name} has died!`);
            return;
        } else {
            window.alert(`${player.name} still has ${player.health} health remaining.`)
        }
    }
};

const startGame = () => {
    player.reset();
    console.log(player)
    

};

startGame();