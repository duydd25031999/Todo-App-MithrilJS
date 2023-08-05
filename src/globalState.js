const globalState = {
	todos: [],
	editing: undefined,
	todoInput: "",
	todoCategory: "RED",
	/*
		The further values are used for the implementation of the Dark-Light-Mode-Toggling.
		The properties can be changed. Due to that, you can use your wished colors instead of white and black.
	*/
	lightMode: true,
	lightTheme: {
		color: "white",
		textColor: "black",
		//Placeholder for the path of the sun-svg:
		buttonImage: ""
	},
	darkTheme: {
		color: "black",
		textColor: "white",
		//Placeholder for the path of the moon-svg:
		buttonImage: ""
	}
};