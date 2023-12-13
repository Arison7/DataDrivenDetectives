import  Renderable  from './renderable';
import  point2D  from '../utils/point2D/point2D';

class MockClass extends Renderable {
	constructor() {
		super(new point2D(0, 0));
	}
	public processInput(): void {
		throw new Error('Method not implemented.');
	}
	public update(elapsed: number): boolean {
		throw new Error('Method not implemented.');
	}
	public render(): void {
		throw new Error('Method not implemented.');
	}

	// set mock model already with dimensions
	public set Model(e : HTMLImageElement) {
		this._model = e;
		this._model.height = 100;
		this._model.width = 100; 
	}

	public setDimensionsFromModel() {
		this._getDimensionsFromModel();
	}
	

}


describe('>>> Renderable', () => {

	let mock : MockClass;

	beforeEach(() => {
		mock = new MockClass();
		mock.Model = document.createElement('img');
	});

	it('should correctly set the dimensions of the renderable from a model', () => {
		expect(mock.Height).not.toBe(100); 
		expect(mock.Width).not.toBe(100);

		mock.setDimensionsFromModel();

		expect(mock.Height).toBe(100);
		expect(mock.Width).toBe(100);


	})



})