import Entity from "../entity/entity.js";
import point2D from "../utils/point2D/point2D.js";

export default abstract class Renderable extends Entity {
	protected _model: HTMLImageElement;


	protected _getDimensionsFromModel(): void {
		this.Width = this._model.width;
		this.Height = this._model.height;
	}
}

