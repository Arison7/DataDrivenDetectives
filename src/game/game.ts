import Entity from "../entity/entity.js";
import { GameTemplate, GameLoop } from "../ts-helpers/GameLoop.js";
import Player from "../player/player.js";
import { Camera } from "../camera/camera.js";
import { Background } from "../background/background.js";

export default class Game extends GameTemplate {
	private _loop: GameLoop;
	private _entities: Entity[];
	//temp
	private _camera: Camera;

	constructor() {
		super();

		// Create the game loop
		this._loop = new GameLoop(this);

		// Create the entities
		this._entities = [];
		const player = new Player();
		const background = new Background();
		const camera = new Camera(player, background);

		this._camera = camera;

		this._entities.push(player);
		this._entities.push(camera);

		// Start the game loop
		this._loop.start();
	}

	public processInput(): void {
		for (const entity of this._entities) {
			entity.processInput();
		}
	}

	public update(elapsed: number): boolean {
		for (const entity of this._entities) {
			entity.update(elapsed);
		}
		return true;
	}

	public render(): void {
		// render all the entities
		for (const entity of this._entities) {
			entity.render(this._camera.ForegroundLayer);
		}
	}
}
