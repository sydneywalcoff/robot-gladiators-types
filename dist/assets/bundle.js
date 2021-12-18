/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("// classes\nvar Player = /** @class */ (function () {\n    function Player(props) {\n        this.name = props.name;\n        this.health = props.health;\n        this.attack = props.attack;\n        this.money = props.money;\n    }\n    ;\n    Player.prototype.reset = function () {\n        this.health = 100;\n        this.attack = 10;\n        this.money = 10;\n    };\n    return Player;\n}());\nvar Enemy = /** @class */ (function () {\n    function Enemy(props) {\n        this.name = props.name;\n        this.health = props.health;\n        this.attack = props.attack;\n    }\n    return Enemy;\n}());\n// execution\nvar robotName = window.prompt(\"What is your Robot's name?\");\nvar player = new Player({ name: robotName, health: 100, attack: 10, money: 10 });\nvar enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];\nvar fight = function (enemy) {\n    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter \"FIGHT\" or \"SKIP\" to choose');\n    if (promptFight.toUpperCase() === 'SKIP') {\n        var confirmSkip = window.confirm(\"Are you sure you'd like to quit?\");\n        if (confirmSkip) {\n            player.money = player.money - 10;\n            window.alert(\"\".concat(player.name, \" pays 10 coins to skip this fight. You have \").concat(player.money, \" coins remaining.\"));\n            return;\n        }\n    }\n    while (player.health > 0 && enemy.health > 0) {\n        enemy.health = enemy.health - player.attack;\n        window.alert(\"\".concat(player.name, \" attacked \").concat(enemy.name, \".\"));\n        if (enemy.health <= 0) {\n            window.alert(\"\".concat(enemy.name, \" has died! \").concat(player.name, \" has been awarded 20 coins.\"));\n            player.money = player.money + 20;\n            return;\n        }\n        else {\n            window.alert(\"\".concat(enemy.name, \" still has \").concat(enemy.health, \" health left.\"));\n        }\n        player.health = player.health - enemy.attack;\n        window.alert(\"\".concat(enemy.name, \" attacked \").concat(player.name, \".\"));\n        if (player.health <= 0) {\n            window.alert(\"\".concat(player.name, \" has died!\"));\n            return;\n        }\n        else {\n            window.alert(\"\".concat(player.name, \" still has \").concat(player.health, \" health remaining.\"));\n        }\n    }\n};\nvar shop = function () {\n    var shopPrompt = window.prompt(\"You have \" + player.money + \" coins. Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', OR 'LEAVE' to make a choice.\");\n    switch (shopPrompt.toUpperCase()) {\n        case 'REFILL':\n            if (player.money >= 7) {\n                window.alert(\"Refilling \".concat(player.name, \"'s health by 20 for 7 coins.\"));\n                player.health = player.health + 20;\n                player.money = player.money - 7;\n            }\n            else {\n                window.alert(\"You don't have enough coins!\");\n            }\n            break;\n        case 'UPGRADE':\n            if (player.money >= 7) {\n                window.alert(\"Upgrading \".concat(player.name, \"'s attack by 6 for 7 coins.\"));\n                player.attack = player.attack + 6;\n                player.money = player.money - 7;\n            }\n            else {\n                window.alert(\"You don't have enough coins!\");\n            }\n            break;\n        case 'LEAVE':\n            console.log('leave');\n            break;\n        default:\n            window.alert(\"You did not pick a valid option. Try again.\");\n            shop();\n            break;\n    }\n};\nvar startGame = function () {\n    player.reset();\n    for (var i = 0; i < enemyNames.length; i++) {\n        if (player.health > 0) {\n            window.alert(\"Welcome to Robot Gladiators! Round \" + (i + 1) + '!');\n            var pickedEnemyName = enemyNames[i];\n            var enemy = new Enemy({ name: pickedEnemyName, health: 50, attack: 12 });\n            fight(enemy);\n            if (player.health > 0 && i < enemyNames.length - 1) {\n                var storeConfirm = window.confirm(\"The fight is over. Visit the store before the next round?\");\n                if (storeConfirm) {\n                    shop();\n                }\n            }\n        }\n    }\n};\nstartGame();\n\n\n//# sourceURL=webpack://robot-gladiators/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;