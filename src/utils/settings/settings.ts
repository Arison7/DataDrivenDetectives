import CanvasRenderer from "../../ts-helpers/CanvasRenderer.js"

export const Settings  = {
	player: {
		model: CanvasRenderer.loadNewImage("assets/images/player.png"),
		size : {
			height: 100,
			width: 100,
		},
		minspeed: 5, 
		speed: 1,
		maxSpeed: 15
	},
	camera:{
		width: 600,
		height: 400,
	},
	background: {
		image: CanvasRenderer.loadNewImage("assets/images/background.jpg"),
	}


}