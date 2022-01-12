/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./log\": \"./node_modules/webpack/hot/log.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/webpack/hot sync ^\\\\.\\\\/log$\";\n\n//# sourceURL=webpack:///(webpack)/hot_sync_nonrecursive_^\\.\\/log$?");

/***/ }),

/***/ "./src/classes/enemy.ts":
/*!******************************!*\
  !*** ./src/classes/enemy.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Enemy = void 0;\r\n// export class Enemy extends GameObjects.Sprite {\r\n//   constructor(scene, x, y) {\r\n//     super(scene, x, y, 'ant');\r\n//     scene.add.existing(this);\r\n//     // let body: Phaser.Physics.Arcade.Body;\r\n//   }\r\n// }\r\nvar Enemy = /** @class */ (function (_super) {\r\n    __extends(Enemy, _super);\r\n    function Enemy(scene, x, y, texture, frame) {\r\n        var _this = _super.call(this, scene, x, y, texture, frame) || this;\r\n        // scene.physics.world.enable(this);\r\n        scene.add.existing(_this);\r\n        return _this;\r\n    }\r\n    return Enemy;\r\n}(Phaser.Physics.Arcade.Sprite));\r\nexports.Enemy = Enemy;\r\n\n\n//# sourceURL=webpack:///./src/classes/enemy.ts?");

/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getGameHeight = exports.getGameWidth = void 0;\r\nvar getGameWidth = function (scene) {\r\n    return scene.game.scale.width;\r\n};\r\nexports.getGameWidth = getGameWidth;\r\nvar getGameHeight = function (scene) {\r\n    return scene.game.scale.height;\r\n};\r\nexports.getGameHeight = getGameHeight;\r\n\n\n//# sourceURL=webpack:///./src/helpers.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.game = void 0;\r\nvar Phaser = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\r\nvar scenes_1 = __webpack_require__(/*! ./scenes */ \"./src/scenes/index.ts\");\r\nvar gameConfig = {\r\n    title: 'Sample',\r\n    type: Phaser.AUTO,\r\n    scale: {\r\n        width: window.innerWidth,\r\n        height: window.innerHeight,\r\n    },\r\n    scene: scenes_1.default,\r\n    physics: {\r\n        default: 'arcade',\r\n        arcade: {\r\n            debug: true,\r\n            gravity: { x: 0, y: 0 },\r\n        },\r\n    },\r\n    parent: 'game',\r\n    backgroundColor: '#FFFFFF',\r\n};\r\nexports.game = new Phaser.Game(gameConfig);\r\nwindow.addEventListener('resize', function () {\r\n    exports.game.scale.refresh();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/scenes/boot-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/boot-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BootScene = void 0;\r\nvar helpers_1 = __webpack_require__(/*! ../helpers */ \"./src/helpers.ts\");\r\nvar sceneConfig = {\r\n    active: false,\r\n    visible: false,\r\n    key: 'Boot',\r\n};\r\n/**\r\n * The initial scene that loads all necessary assets to the game and displays a loading bar.\r\n */\r\nvar BootScene = /** @class */ (function (_super) {\r\n    __extends(BootScene, _super);\r\n    function BootScene() {\r\n        return _super.call(this, sceneConfig) || this;\r\n    }\r\n    BootScene.prototype.preload = function () {\r\n        var _this = this;\r\n        var halfWidth = helpers_1.getGameWidth(this) * 0.5;\r\n        var halfHeight = helpers_1.getGameHeight(this) * 0.5;\r\n        var progressBarHeight = 100;\r\n        var progressBarWidth = 400;\r\n        var progressBarContainer = this.add.rectangle(halfWidth, halfHeight, progressBarWidth, progressBarHeight, 0x000000);\r\n        var progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, progressBarHeight - 20, 0x888888);\r\n        var loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...').setFontSize(24);\r\n        var percentText = this.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24);\r\n        var assetText = this.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24);\r\n        this.load.on('progress', function (value) {\r\n            progressBar.width = (progressBarWidth - 30) * value;\r\n            var percent = value * 100;\r\n            percentText.setText(percent + \"%\");\r\n        });\r\n        this.load.on('fileprogress', function (file) {\r\n            assetText.setText(file.key);\r\n        });\r\n        this.load.on('complete', function () {\r\n            loadingText.destroy();\r\n            percentText.destroy();\r\n            assetText.destroy();\r\n            progressBar.destroy();\r\n            progressBarContainer.destroy();\r\n            _this.scene.start('MainMenu');\r\n        });\r\n        this.loadAssets();\r\n    };\r\n    /**\r\n     * All assets that need to be loaded by the game (sprites, images, animations, tiles, music, etc)\r\n     * should be added to this method. Once loaded in, the loader will keep track of them, indepedent of which scene\r\n     * is currently active, so they can be accessed anywhere.\r\n     */\r\n    BootScene.prototype.loadAssets = function () {\r\n        console.log('loading assets.');\r\n        this.load.image('ant', 'assets/sprites/ant.png');\r\n        this.load.image('pan', 'assets/sprites/pan.png');\r\n        this.load.image('pie_slice', 'assets/sprites/pie_slice.png');\r\n        this.load.spritesheet('antSheet', 'assets/sprites/ant_walk.png', {\r\n            frameWidth: 248,\r\n            frameHeight: 202,\r\n        });\r\n    };\r\n    return BootScene;\r\n}(Phaser.Scene));\r\nexports.BootScene = BootScene;\r\n\n\n//# sourceURL=webpack:///./src/scenes/boot-scene.ts?");

/***/ }),

/***/ "./src/scenes/game-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/game-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GameScene = void 0;\r\nvar phaser_1 = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\r\nvar enemy_1 = __webpack_require__(/*! ../classes/enemy */ \"./src/classes/enemy.ts\");\r\nvar helpers_1 = __webpack_require__(/*! ../helpers */ \"./src/helpers.ts\");\r\nvar sceneConfig = {\r\n    active: false,\r\n    visible: false,\r\n    key: 'Game',\r\n};\r\nvar GameScene = /** @class */ (function (_super) {\r\n    __extends(GameScene, _super);\r\n    function GameScene() {\r\n        var _this = _super.call(this, sceneConfig) || this;\r\n        _this.antSpeed = 30;\r\n        _this.maxSpawnInterval = 1;\r\n        _this.minSpawnInterval = 0.1;\r\n        return _this;\r\n    }\r\n    GameScene.prototype.create = function () {\r\n        var screenWidth = helpers_1.getGameWidth(this);\r\n        var screenHeight = helpers_1.getGameHeight(this);\r\n        //Create basket\r\n        this.basket = this.physics.add.sprite(screenWidth / 2, screenHeight / 2, 'pan');\r\n        this.basket.setCircle(120, 8, 8);\r\n        this.pieSlices = [];\r\n        for (var i = 0; i < 8; i++) {\r\n            var slice = this.add.sprite(screenWidth / 2, screenHeight / 2, 'pie_slice');\r\n            slice.setOrigin(0.5, 1);\r\n            slice.setRotation(i * 0.785);\r\n            this.pieSlices.push(slice);\r\n        }\r\n        //Create ants\r\n        this.spawnCircle = new Phaser.Geom.Circle(screenWidth / 2, screenHeight / 2, screenHeight / 1.8);\r\n        this.antGroup = this.physics.add.group();\r\n        this.timeTillSpawn = 0;\r\n        this.anims.create({\r\n            key: 'antwalk',\r\n            // frames: this.anims.generateFrameNumbers('antSheet', { frames: [0, 8, 16, 24, 32, 40, 48, 56] }),\r\n            frames: this.anims.generateFrameNumbers('antSheet', { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),\r\n            frameRate: 60,\r\n            repeat: -1,\r\n        });\r\n        //Set up collisions\r\n        this.physics.add.overlap(this.antGroup, this.basket, this.KillAnt, null, this);\r\n    };\r\n    GameScene.prototype.update = function (time, delta) {\r\n        if (this.timeTillSpawn <= 0) {\r\n            this.SpawnAnt();\r\n            this.timeTillSpawn = phaser_1.Math.Between(this.minSpawnInterval, this.maxSpawnInterval) * 1000;\r\n        }\r\n        this.timeTillSpawn -= delta;\r\n    };\r\n    GameScene.prototype.SpawnAnt = function () {\r\n        var spawnPoint = this.GetSpawnPoint();\r\n        var antObj = new enemy_1.Enemy(this, spawnPoint.x, spawnPoint.y, 'antSheet', 1);\r\n        antObj.setScale(0.1);\r\n        this.antGroup.add(antObj);\r\n        var lookVector = this.basket.getCenter().subtract(antObj.getCenter());\r\n        lookVector.normalize();\r\n        var rotation = phaser_1.Math.Angle.BetweenPoints(antObj.getCenter(), this.basket.getCenter());\r\n        lookVector.scale(this.antSpeed);\r\n        antObj.setVelocity(lookVector.x, lookVector.y);\r\n        antObj.setCircle(124);\r\n        antObj.setRotation(rotation);\r\n        antObj.play('antwalk');\r\n        antObj.setInteractive();\r\n        antObj.on('pointerdown', function () {\r\n            console.log('ant clicked');\r\n            antObj.destroy();\r\n        });\r\n    };\r\n    GameScene.prototype.KillAnt = function (basket, ant) {\r\n        ant.disableBody(true, true);\r\n        ant.destroy();\r\n        if (this.pieSlices.length > 0) {\r\n            var slice = this.pieSlices.pop();\r\n            slice.destroy();\r\n        }\r\n        else {\r\n            this.scene.start('MainMenu');\r\n        }\r\n    };\r\n    GameScene.prototype.GetSpawnPoint = function () {\r\n        var returnPoint = new Phaser.Geom.Point();\r\n        var circlePosition = phaser_1.Math.FloatBetween(0, 1);\r\n        return this.spawnCircle.getPoint(circlePosition, returnPoint);\r\n    };\r\n    return GameScene;\r\n}(Phaser.Scene));\r\nexports.GameScene = GameScene;\r\n\n\n//# sourceURL=webpack:///./src/scenes/game-scene.ts?");

/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar main_menu_scene_1 = __webpack_require__(/*! ./main-menu-scene */ \"./src/scenes/main-menu-scene.ts\");\r\nvar boot_scene_1 = __webpack_require__(/*! ./boot-scene */ \"./src/scenes/boot-scene.ts\");\r\nvar game_scene_1 = __webpack_require__(/*! ./game-scene */ \"./src/scenes/game-scene.ts\");\r\nexports.default = [boot_scene_1.BootScene, main_menu_scene_1.MainMenuScene, game_scene_1.GameScene];\r\n\n\n//# sourceURL=webpack:///./src/scenes/index.ts?");

/***/ }),

/***/ "./src/scenes/main-menu-scene.ts":
/*!***************************************!*\
  !*** ./src/scenes/main-menu-scene.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MainMenuScene = void 0;\r\nvar menu_button_1 = __webpack_require__(/*! ../ui/menu-button */ \"./src/ui/menu-button.ts\");\r\nvar sceneConfig = {\r\n    active: false,\r\n    visible: false,\r\n    key: 'MainMenu',\r\n};\r\n/**\r\n * The initial scene that starts, shows the splash screens, and loads the necessary assets.\r\n */\r\nvar MainMenuScene = /** @class */ (function (_super) {\r\n    __extends(MainMenuScene, _super);\r\n    function MainMenuScene() {\r\n        return _super.call(this, sceneConfig) || this;\r\n    }\r\n    MainMenuScene.prototype.create = function () {\r\n        // this.add\r\n        //   .text(100, 50, 'This is a sample main menu. Click the \"Start\" button below to run your game.', {\r\n        //     color: '#FFFFFF',\r\n        //   })\r\n        //   .setFontSize(15);\r\n        var _this = this;\r\n        new menu_button_1.MenuButton(this, 100, 150, 'Start Game', function () {\r\n            _this.scene.start('Game');\r\n        });\r\n        // new MenuButton(this, 100, 250, 'Settings', () => console.log('settings button clicked'));\r\n        // new MenuButton(this, 100, 350, 'Help', () => console.log('help button clicked'));\r\n    };\r\n    return MainMenuScene;\r\n}(Phaser.Scene));\r\nexports.MainMenuScene = MainMenuScene;\r\n\n\n//# sourceURL=webpack:///./src/scenes/main-menu-scene.ts?");

/***/ }),

/***/ "./src/ui/menu-button.ts":
/*!*******************************!*\
  !*** ./src/ui/menu-button.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuButton = void 0;\r\nvar Phaser = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\r\nvar padding = 10;\r\nvar minimumWidth = 200;\r\nvar minimumHeight = 50;\r\nvar MenuButton = /** @class */ (function (_super) {\r\n    __extends(MenuButton, _super);\r\n    function MenuButton(scene, x, y, text, onClick) {\r\n        var _this = _super.call(this, scene, x, y) || this;\r\n        scene.add.existing(_this);\r\n        _this.setOrigin(0, 0);\r\n        _this.label = scene.add\r\n            .text(x + padding, y + padding, text)\r\n            .setFontSize(18)\r\n            .setAlign('center');\r\n        var labelWidth = _this.label.width + padding;\r\n        var labelHeight = _this.label.height + padding;\r\n        _this.width = labelWidth >= minimumWidth ? labelWidth : minimumWidth;\r\n        _this.height = labelHeight >= minimumHeight ? labelHeight : minimumHeight;\r\n        _this.setInteractive({ useHandCursor: true })\r\n            .on('pointerover', _this.enterMenuButtonHoverState)\r\n            .on('pointerout', _this.enterMenuButtonRestState)\r\n            .on('pointerdown', _this.enterMenuButtonActiveState)\r\n            .on('pointerup', _this.enterMenuButtonHoverState);\r\n        if (onClick) {\r\n            _this.on('pointerup', onClick);\r\n        }\r\n        _this.enterMenuButtonRestState();\r\n        return _this;\r\n    }\r\n    MenuButton.prototype.enterMenuButtonHoverState = function () {\r\n        this.label.setColor('#000000');\r\n        this.setFillStyle(0x888888);\r\n    };\r\n    MenuButton.prototype.enterMenuButtonRestState = function () {\r\n        this.label.setColor('#FFFFFF');\r\n        this.setFillStyle(0x888888);\r\n    };\r\n    MenuButton.prototype.enterMenuButtonActiveState = function () {\r\n        this.label.setColor('#BBBBBB');\r\n        this.setFillStyle(0x444444);\r\n    };\r\n    return MenuButton;\r\n}(Phaser.GameObjects.Rectangle));\r\nexports.MenuButton = MenuButton;\r\n\n\n//# sourceURL=webpack:///./src/ui/menu-button.ts?");

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://192.168.86.237:8080 ./src/main.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Anthic\\phaser_dev\\Picnic\\node_modules\\webpack-dev-server\\client\\index.js?http://192.168.86.237:8080 */\"./node_modules/webpack-dev-server/client/index.js?http://192.168.86.237:8080\");\nmodule.exports = __webpack_require__(/*! ./src/main.ts */\"./src/main.ts\");\n\n\n//# sourceURL=webpack:///multi_(webpack)-dev-server/client?");

/***/ })

/******/ });