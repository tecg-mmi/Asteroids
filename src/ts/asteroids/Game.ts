import {Ship} from "./drawables/Ship";
import {Animate} from "../framework/Animate";
import {KeyController} from "./KeyController";
import {settings} from "./settings";
import {IGameStatus} from "../framework/types/IGameStatus";
import {Asteroid} from "./drawables/Asteroid";

export class Game {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly animation: Animate;
    private readonly ship: Ship;
    private readonly keyControl: KeyController;
    private header: HTMLElement;
    private gameStatus: IGameStatus;
    private asteroids: Asteroid[] = [];

    constructor() {
        this.gameStatus = {isStarted: false, isOver: false, score: 0, lives: 3};
        this.header = document.querySelector(settings.h1.selector);
        this.canvas = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        this.resizeCanvas();
        this.ctx = this.canvas.getContext('2d');
        this.keyControl = new KeyController(this.gameStatus, this.hideHeader.bind(this));
        this.animation = new Animate(this.canvas, this.ctx);
        this.ship = new Ship(this.ctx, this.canvas, this.keyControl, this.animation);
        this.animation.registerForAnimation(this.ship);
        for (let i = 0; i < settings.asteroid.initialCount; i++) {
            this.asteroids.push(new Asteroid(this.ctx, this.canvas, this.ship, this.gameStatus, this.animation));
            this.asteroids[i].draw();
            this.animation.registerForAnimation(this.asteroids[i]);
        }
        this.ship.draw();
        this.animation.start();
        this.addEventListeners();
    }


    resizeCanvas() {
        // Set the canvas size to the window size to make a square
        if (window.innerWidth < window.innerHeight) {
            this.canvas.height = window.innerWidth;
            this.canvas.width = window.innerWidth;
        } else {
            this.canvas.height = window.innerHeight;
            this.canvas.width = window.innerHeight;
        }
    }


    private addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.ship.center();
        });
    }

    private hideHeader() {
        this.header.classList.add('hidden');
    }
}