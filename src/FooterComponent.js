class FooterComponent {
	constructor(vnode) {
		// value = ""
		// category = "RED"
		// this.loadCache()
	}
	oncreate() {
		
	}
	setInput(value) {
		globalState.todoInput = value
		console.log(`Set value = ${globalState.todoInput}`)
	}
	changeCategory(e) {
		globalState.todoCategory = e.target.getAttribute('value')
		console.log(`Set category = ${globalState.todoCategory}`)
	}
	handleInput(e) {
		// if(e.keyCode === 13)
		// 	this.add()
		// else
			this.setInput(e.target.value)
	}
	add() {
		globalState.todoInput = globalState.todoInput.trim();
		if(globalState.todoInput === "") {
			return;
		}
		console.log(`Add todo(${globalState.todoInput}, ${globalState.todoCategory})`)
	
		const newValue = {
			value: globalState.todoInput,
			category: globalState.todoCategory
		}

		if(globalState.editing === undefined) {
			globalState.todos.push(newValue)
		} else if(globalState.todos[globalState.editing]) {
			console.log(globalState.editing, newValue)
			globalState.todos[globalState.editing] = newValue
			globalState.editing = undefined
		}
		this.setInput("")
		globalAction.saveCache()
	}
	view() {
		// this.loadCache()
		return m("footer", {class:"footer"}, 
			m("form", {name: "todos", class:"footer__wrapper", "data-action":"add", onsubmit: (e) => {
				e.preventDefault()
				// this.setInput(document.forms.todos.todo.value)
				this.add()
			}},
				[
					m("div", {class:"form-box"},
						[
							m("input", {
								name: "todo",
								class:"form-box__input", 
								type:"text", 
								placeholder:"add todo...", 
								oninput: this.handleInput.bind(this),
								// onkeyup: (e) => { this.handleInput(e) },
								value: globalState.todoInput,

							}),
							m("button", {class:"form-box__btn", type:"submit"},
								globalState.editing === undefined ? "Add" : "Update"
							)
						]
					),
					m("div", {class:"colors"},
						[
							m("div", {class:"color"},
								[
									m("input", {
										class:"color__radio",
										type:"radio",
										id:"red",
										name:"category",
										checked: globalState.todoCategory === "RED",
										value:"RED",
										onchange: this.changeCategory.bind(this)
									}),
									m("span", {class:"checked"}),
									m("label", {class:"color__label red", "for":"red"})
								]
							),
							m("div", {class:"color"},
								[
									m("input", {
										class:"color__radio",
										type:"radio",
										id:"blue",
										name:"category",
										checked: globalState.todoCategory === "BLUE",
										value:"BLUE",
										onchange: this.changeCategory.bind(this)
									}),
									m("span", {class:"checked"}),
									m("label", {class:"color__label blue", "for":"blue"})
								]
							),
							m("div", {class:"color"},
								[
									m("input", {
										class:"color__radio",
										type:"radio",
										id:"green",
										name:"category",
										checked: globalState.todoCategory === "GREEN",
										value:"GREEN",
										onchange: this.changeCategory.bind(this)
									}),
									m("span", {class:"checked"}),
									m("label", {class:"color__label green", "for":"green"})
								]
							)
						]
					)
				]
			)
		)
	} // end view
}