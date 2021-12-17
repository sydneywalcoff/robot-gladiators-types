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

eval("// classes\nvar Player = /** @class */ (function () {\n    function Player(props) {\n        this.name = props.name;\n        this.health = props.health;\n        this.attack = props.attack;\n        this.money = props.money;\n    }\n    return Player;\n}());\nvar Enemy = /** @class */ (function () {\n    function Enemy(props) {\n        this.name = props.name;\n        this.health = props.health;\n        this.attack = props.attack;\n    }\n    return Enemy;\n}());\n// execution\nvar robotName = window.prompt(\"What is your Robot's name?\");\nvar enemy = new Enemy({ name: 'Roborto', health: 75, attack: 12 });\nvar player = new Player({ name: robotName, health: 75, attack: 12, money: 100 });\nconsole.log(player);\n\n\n//# sourceURL=webpack://robot-gladiators/./src/index.ts?");

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