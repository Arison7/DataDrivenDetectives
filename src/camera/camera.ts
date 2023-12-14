import Entity from "../entity/entity.js";
import Player from "../player/player.js";
import { Settings } from "../utils/settings/settings.js";
import { Background } from "../background/background";
import CanvasRenderer from "../ts-helpers/CanvasRenderer.js";



export class Camera extends Entity {
	private _backgroundLayer: HTMLCanvasElement;
	private _foregroundLayer: HTMLCanvasElement;
	private _canvasWidth: number = Settings.camera.width;
	private _canvasHeight: number = Settings.camera.height;
	private _player: Player;
	private _x: number;
	private _y: number;
	private _background: Background;

	constructor(player : Player, background: Background) {
		super();
		this._player = player;
		this._background = background;
		this._x = this._player.Position.x - this._canvasWidth / 2;
		this._y = this._player.Position.y - this._canvasHeight / 2;
		this._foregroundLayer = document.createElement('canvas');
		this._backgroundLayer = document.createElement('canvas');
		this._foregroundLayer.style.zIndex = "1";
		this.initilizeLayer(this._backgroundLayer);
		this.initilizeLayer(this._foregroundLayer);
		this._backgroundLayer.style.border = "1px solid black";



	}
	private initilizeLayer(layer : HTMLCanvasElement): void {
		const body = document.getElementsByTagName('body')[0];
		body.appendChild(layer);
		layer.style.position = "absolute"
		layer.width = this._canvasWidth;
		layer.height = this._canvasHeight;
		layer.style.border = "1px solid black";

	}

	public processInput(): void {

	}

	public update(elapsed: number): boolean {
		this._x = this._player.Position.x - this._canvasWidth / 2;
		this._y = this._player.Position.y - this._canvasHeight / 2;
		return true;
	}

	public render(): void {
		const ctx = this._backgroundLayer.getContext('2d')!;
		ctx.clearRect(0, 0, this._canvasWidth, this._canvasHeight);
		ctx.drawImage(this._background.Image, this._x, this._y, this._canvasWidth, this._canvasHeight, 0, 0, this._canvasWidth, this._canvasHeight);

		CanvasRenderer.writeText(this._backgroundLayer, "x: " + Math.round(this._x) + " y: " + Math.round(this._y), 50, 50,);


	}

	public get BackgroundLayer(): HTMLCanvasElement {
		return this.BackgroundLayer;
	}
	public get ForegroundLayer(): HTMLCanvasElement {
		return this._foregroundLayer;
	}


}