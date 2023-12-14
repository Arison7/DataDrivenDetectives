import  point2D  from "../utils/point2D/point2D.js";


export default abstract class Entity {
	protected _position: point2D;
	private _width: number;
	private _height: number;

	
	public get Position(): point2D {
		return this._position;
	}

	public set Position(value: point2D) {
		this._position = value;
	}

	public get Width(): number {
		return this._width;
	}

	public set Width(value: number) {
		this._width = value;
	}

	public get Height(): number {
		return this._height;
	}

	public set Height(value: number) {
		this._height = value;
	}



	public abstract processInput(): void;
	public abstract update(elapsed: number): boolean;
	public abstract render(canvas : HTMLCanvasElement): void;





}