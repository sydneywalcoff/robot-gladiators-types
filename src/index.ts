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
            window.alert(`${player.name} pays 10 coins to skip this fight. You have ${player.money} coins remaining.`);
            return;
        }
    }

    while(player.health > 0 && enemy.health >0) {
        enemy.health = enemy.health - player.attack;
        window.alert(`${player.name} attacked ${enemy.name}.`)
    
        if(enemy.health <= 0) {
            window.alert(`${enemy.name} has died! ${player.name} has been awarded 20 coins.`);
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

const shop = () => {
    const shopPrompt: string = window.prompt("You have "+ player.money +" coins. Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', OR 'LEAVE' to make a choice.");

    switch(shopPrompt.toUpperCase()) {
        case 'REFILL':
            if(player.money >= 7) {
                window.alert(`Refilling ${player.name}'s health by 20 for 7 coins.`);

                player.health = player.health + 20;
                player.money = player.money - 7;
            } else {
                window.alert("You don't have enough coins!");
            }
            break;
        case 'UPGRADE':
            if(player.money >= 7) {
                window.alert(`Upgrading ${player.name}'s attack by 6 for 7 coins.`);
                player.attack = player.attack + 6;
                player.money = player.money - 7;
            } else {
                window.alert("You don't have enough coins!");
            }
            break;
        case 'LEAVE':
            window.alert('Leaving the store.')
            break;
        default:
            window.alert("You did not pick a valid option. Try again.")
            shop();
            break; 
    }
};

const startGame = () => {
    player.reset();
    for(let i=0; i < enemyNames.length; i++) {
        if(player.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i+1) + '!');
            const pickedEnemyName: string = enemyNames[i];
            const enemy: Enemy = new Enemy({ name: pickedEnemyName, health: 50, attack: 12 });
            fight(enemy);
            if(player.health > 0 && i < enemyNames.length -1) {
                const storeConfirm: boolean = window.confirm("The fight is over. Visit the store before the next round?");
                if(storeConfirm) {
                    shop();
                }
            }
        }
    }
};

const endGame = () => {
    if(player.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + player.money + ".")
    } else {
        window.alert("You've lost your robot in battle");
    }

    const playAgainConfirm: boolean = window.confirm("Would you like to play again?");
    if(playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

startGame();