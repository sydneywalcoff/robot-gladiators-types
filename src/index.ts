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
const player = new Player({ name: robotName, health: 100, attack: 10, money: 10 });

const enemy = new Enemy({ name: 'Roborto', health: 50, attack: 12 });

const fight = () => {
    const promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose');
    if(promptFight.toUpperCase() === 'SKIP') {
        const confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if(confirmSkip) {
            player.money = player.money -10;
            window.alert(`${player.name} pays 10 to skip this fight. You have ${player.money} remaining.`);
            return;
        }
    }
};

fight();