import Entity from "../entity/entity.js";
import { GameTemplate , GameLoop } from "../ts-helpers/GameLoop.js";

export default class Game  extends GameTemplate {
	private _loop : GameLoop;
	private _entities: Entity[];

	constructor() {
		super();

		// Create the game loop
		this._loop = new GameLoop(this);


		// Start the game loop
		this._loop.start();	


	}

	public processInput(): void{

	}

	public update(elapsed: number): boolean{
		return false;


	}

	public render(): void{

	}





} 