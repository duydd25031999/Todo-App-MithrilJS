const globalAction = {
	changeTodo: (value) => {
		globalState.todos = value
	},
	deleteTodo: (index) => {
		console.log(`delete ${index}`)
		delete globalState.todos[index]
		// globalState.todos.splice(index, 1)
		globalAction.saveCache()
	},
	saveCache() {
		const tmp = JSON.stringify(globalState.todos)
		console.log(`Save cache ${tmp}`)
		localStorage.setItem("todos", tmp)
	},
	loadCache() {
		const tmp = localStorage.getItem("todos");
		if(tmp !== null) {
			console.log(`Load cache ${tmp}`)
			const arr = JSON.parse(tmp)
			if(arr instanceof Array) {
				globalState.todos = arr.filter((x) => x !== null)
				this.saveCache()
				console.log(`Set state todos = `, globalState.todos)
			}
		}
	},
}