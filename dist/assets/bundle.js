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

eval("// classes\nvar Player = /** @class */ (function () {\n    function Player(props) {\n        this.name = props.name;\n        this.health = props.health;\n        this.attack = props.attack;\n        this.money = props.money;\n    }\n    return Player;\n}());\nvar Enemy = /** @class */ (function () {\n    function Enemy(props) {\n        this.name = props.name;\n        this.health = props.health;\n        this.attack = props.attack;\n    }\n    return Enemy;\n}());\n// execution\nvar robotName = window.prompt(\"What is your Robot's name?\");\nvar player = new Player({ name: robotName, health: 100, attack: 10, money: 10 });\nvar enemy = new Enemy({ name: 'Roborto', health: 50, attack: 12 });\nvar fight = function () {\n    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter \"FIGHT\" or \"SKIP\" to choose');\n    if (promptFight.toUpperCase() === 'SKIP') {\n        var confirmSkip = window.confirm(\"Are you sure you'd like to quit?\");\n        if (confirmSkip) {\n            player.money = player.money - 10;\n            window.alert(\"\".concat(player.name, \" pays 10 to skip this fight. You have \").concat(player.money, \" money remaining.\"));\n            return;\n        }\n    }\n    while (player.health > 0 && enemy.health > 0) {\n        enemy.health = enemy.health - player.attack;\n        window.alert(\"\".concat(player.name, \" attacked \").concat(enemy.name, \".\"));\n        if (enemy.health <= 0) {\n            window.alert(\"\".concat(enemy.name, \" has died! \").concat(player.name, \" has been awarded 20 money.\"));\n            player.money = player.money + 20;\n            return;\n        }\n        else {\n            window.alert(\"\".concat(enemy.name, \" still has \").concat(enemy.health, \" health left.\"));\n        }\n        player.health = player.health - enemy.attack;\n        window.alert(\"\".concat(enemy.name, \" attacked \").concat(player.name, \".\"));\n        if (player.health <= 0) {\n            window.alert(\"\".concat(player.name, \" has died!\"));\n            return;\n        }\n        else {\n            window.alert(\"\".concat(player.name, \" still has \").concat(player.health, \" health remaining.\"));\n        }\n    }\n};\nfight();\n\n\n//# sourceURL=webpack://robot-gladiators/./src/index.ts?");

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