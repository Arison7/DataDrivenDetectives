import  point2D  from "../utils/point2D/point2D";


export default abstract class Entity {
	private _position: point2D;
	private _width: number;
	private _height: number;

	constructor(position: point2D, width: number, height: number) {
		this._position = position;
		this._width = width;
		this._height = height;
	}

	public get position(): point2D {
		return this._position;
	}

	public get width(): number {
		return this._width;
	}

	public get height(): number {
		return this._height;
	}

	public abstract processInput(): void;
	public abstract update(elapsed: number): boolean;
	public abstract render(): void;





}