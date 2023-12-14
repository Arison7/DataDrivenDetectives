import Creature from "../creature/creature.js";
import point2D from "../utils/point2D/point2D.js";
import { Settings } from "../utils/settings/settings.js";
import keyListener from "../ts-helpers/KeyListener.js";
import CanvasRenderer from "../ts-helpers/CanvasRenderer.js";

export default class Player extends Creature {
	private _vercticalVelocity: number = 0;
	private _horizontalVelocity: number = 0;
	private _keyListener: keyListener;


	constructor() {
		super();
		// get the model from the settings
		this._model = Settings.player.model;
		this.Height = Settings.player.size.height;
		this.Width = Settings.player.size.width;

		this._keyListener = new keyListener();


		this._position = new point2D(Settings.camera.width / 2,Settings.camera.height / 2);


	}

	public processInput(): void {
		// if the player is pressing the up arrow key
		// move the player up
		if(this._keyListener.isKeyDown("ArrowUp")){
			if(this._horizontalVelocity > 0){
				this._horizontalVelocity = Settings.player.minspeed;
			}
			this._horizontalVelocity -= Settings.player.speed;
			this._horizontalVelocity = Math.max(this._horizontalVelocity, -Settings.player.maxSpeed);
		}
		// if the player is pressing the down arrow key
		// move the player down
		if(this._keyListener.isKeyDown("ArrowDown")){
			if(this._horizontalVelocity < 0){
				this._horizontalVelocity = Settings.player.minspeed;
			}
			this._horizontalVelocity += Settings.player.speed;
			this._horizontalVelocity = Math.min(this._horizontalVelocity, Settings.player.maxSpeed);
		}
		// if player isn't pressing neither up nor down arrow key or is pressing both
		// set the horizontal velocity to 0
		if(!this._keyListener.isKeyDown("ArrowUp") && !this._keyListener.isKeyDown("ArrowDown") || this._keyListener.isKeyDown("ArrowUp") && this._keyListener.isKeyDown("ArrowDown")){
			this._horizontalVelocity = 0 ;
		}
		// if the player is pressing the left arrow key
		// move the player left
		if(this._keyListener.isKeyDown("ArrowLeft")){
			if(this._vercticalVelocity > 0){
				this._vercticalVelocity = Settings.player.minspeed;
			}
			this._vercticalVelocity -= Settings.player.speed;
			this._vercticalVelocity = Math.max(this._vercticalVelocity, -Settings.player.maxSpeed);
		}
		// if the player is pressing the right arrow key
		// move the player right
		if(this._keyListener.isKeyDown("ArrowRight")){
			if(this._vercticalVelocity < 0){
				this._vercticalVelocity = Settings.player.minspeed;
			}
			this._vercticalVelocity += Settings.player.speed;
			this._vercticalVelocity = Math.min(this._vercticalVelocity, Settings.player.maxSpeed);
		}
		// if player isn't pressing neither left nor right arrow key or is pressing both
		// set the horizontal velocity to 0
		if(!this._keyListener.isKeyDown("ArrowLeft") && !this._keyListener.isKeyDown("ArrowRight") || this._keyListener.isKeyDown("ArrowLeft") && this._keyListener.isKeyDown("ArrowRight")){
			this._vercticalVelocity = 0 ;
		}
	}

	public update(elapsed: number): boolean {
		// decrease the difference caused by the elapsed time to allow 
		// settings to make the major difference
		const timeEqualizer = elapsed / 16.66666666666667;

		// if the new vertical position is within the bounds of the background
		// set the position to the new position
		if(this.Position.x + (this._vercticalVelocity * timeEqualizer) > Settings.camera.width /2 &&
			this.Position.x + (this._vercticalVelocity * timeEqualizer) < Settings.background.image.width - Settings.camera.width /2){
			this.Position.x += this._vercticalVelocity * timeEqualizer;
		}else{
			// set position to the edge of the screen
			if(this.Position.x + (this._vercticalVelocity * timeEqualizer) < Settings.camera.width /2){
				this.Position.x = Settings.camera.width /2;
			}
			if(this.Position.x + (this._vercticalVelocity * timeEqualizer) > Settings.background.image.width - Settings.camera.width /2){
				this.Position.x = Settings.background.image.width - Settings.camera.width /2;
			}
		}
		// if the new horizontal position is within the bounds of the background
		// set the position to the new position
		if(this.Position.y + (this._horizontalVelocity * timeEqualizer) > Settings.camera.height /2 &&
			this.Position.y + (this._horizontalVelocity * timeEqualizer) < Settings.background.image.height - Settings.camera.height /2){
			this.Position.y += this._horizontalVelocity * timeEqualizer;
		}else{
			// set position to the edge of the screen
			if(this.Position.y + (this._horizontalVelocity * timeEqualizer) < Settings.camera.height /2){
				this.Position.y = Settings.camera.height /2;
			}
			if(this.Position.y + (this._horizontalVelocity * timeEqualizer) > Settings.background.image.height - Settings.camera.height /2){
				this.Position.y = Settings.background.image.height - Settings.camera.height /2;
			}
		}

		return true;
	}

	public render(canvas : HTMLCanvasElement): void {
		const ctx = canvas.getContext('2d')!;
		//clear the canvas
		ctx.clearRect(canvas.width / 2, canvas.height / 2, canvas.width, canvas.height);
		// draw the player in the middle of the canvas (irrelevant right now, but will be necessary when we will be changing player model)
		ctx.drawImage(this._model, canvas.width /2 - this.Width / 2, canvas.height /2  - this.Height / 2,this.Width,this.Height);

		//CanvasRenderer.writeText(canvas, "x: " + Math.round(this.Position.x) + " y: " + Math.round(this.Position.y), 100, 100);



		
	}
}