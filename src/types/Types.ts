interface Fighter {
    name: string,
    health: number,
    attack: number
}

interface Player extends Fighter {
    money: number
}


export {
    Player
}