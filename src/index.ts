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
const enemy = new Enemy({name:'Roborto', health: 75, attack: 12});
const player = new Player({name: robotName, health: 75, attack: 12, money: 100});
console.log(player)