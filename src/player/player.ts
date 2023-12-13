import Creature from "../creature/creature.js";
import point2D from "../utils/point2D/point2D.js";
import { Settings } from "../utils/settings/settings.js";

export default class Player extends Creature {

	constructor(position: point2D) {
		super(new point2D(0, 0));
		// get the model from the settings
		this._model = Settings.player.model;
		// sets the width and height to match the model
		this._getDimensionsFromModel();
	}

	public processInput(): void {
	}

	public update(elapsed: number): boolean {
		return true;
	}

	public render(): void {
	}
}