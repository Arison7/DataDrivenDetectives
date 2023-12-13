import Renderable from "../renderable/renderable.js";
import { Directions } from "./destinations/destinations.js";

export default abstract class Creature extends Renderable {
	private _direction : Directions = Directions.N;

	public get direction(): Directions {
		return this._direction; 
	}

	
}