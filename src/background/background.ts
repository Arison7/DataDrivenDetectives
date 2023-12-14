import { Settings } from "../utils/settings/settings.js";

export class Background {
	private _image : HTMLImageElement;
	private _width: number;
	private _height: number;

	constructor() {
		this._image = Settings.background.image;
		this._width = this._image.width;
		this._height = this._image.height;
	}

	public get Image(): HTMLImageElement {
		return this._image;
	}
}