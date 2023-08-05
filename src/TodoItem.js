class TodoItem {
	constructor(vnode) {
		this.mappingCategory = {
			RED: 'red',
			BLUE: 'blue',
			GREEN: 'green',
		}
		// this.todo = vnode.attrs.todo
	}
	oncreate() {

	}
	view(vnode) {
		const todo = {
			...globalState.todos[vnode.attrs.todo.index],
			index: vnode.attrs.todo.index
		}
		return m("div", {class:"todo"},
			[
				m("span", {class:"category "+ this.mappingCategory[todo.category], style:{}}),
				m("p", {class:"todo__text", "data-action":"checked", style:{"color":"var(--textColor)"}},
					[
						todo.value, 
						m("span", {class:"line", style:{"width":"0%"}})
					]
				),
				m("div", {class:"settings"},
					[
						m("svg", {class:"settings__icon", "stroke":"currentColor", "fill":"currentColor", "stroke-width":"0", "viewBox":"0 0 24 24", "data-action":"edit", "height":"1em", "width":"1em", "xmlns":"http://www.w3.org/2000/svg",
							onclick: () => {
								console.log("edit:", todo)
								if(globalState.editing !== undefined && globalState.editing === todo.index) {
									globalState.editing = undefined
									globalState.todoInput = ""
								} else {
									globalState.editing = todo.index
									globalState.todoInput = todo.value
									globalState.todoCategory = todo.category
								}
							}
						},
							[
								m("path", {"d":"M7,17.013l4.413-0.015l9.632-9.54c0.378-0.378,0.586-0.88,0.586-1.414s-0.208-1.036-0.586-1.414l-1.586-1.586\tc-0.756-0.756-2.075-0.752-2.825-0.003L7,12.583V17.013z M18.045,4.458l1.589,1.583l-1.597,1.582l-1.586-1.585L18.045,4.458z M9,13.417l6.03-5.973l1.586,1.586l-6.029,5.971L9,15.006V13.417z"}),
								m("path", {"d":"M5,21h14c1.103,0,2-0.897,2-2v-8.668l-2,2V19H8.158c-0.026,0-0.053,0.01-0.079,0.01c-0.033,0-0.066-0.009-0.1-0.01H5V5\th6.847l2-2H5C3.897,3,3,3.897,3,5v14C3,20.103,3.897,21,5,21z"})
							]
						),
						m("svg", {class:"settings__icon", "stroke":"currentColor", "fill":"currentColor", "stroke-width":"0", "viewBox":"0 0 24 24", "data-action":"delete", "height":"1em", "width":"1em", "xmlns":"http://www.w3.org/2000/svg",
							onclick: () => globalAction.deleteTodo(todo.index)
						}, 
							m("path", {"d":"M15,2H9C7.897,2,7,2.897,7,4v2H3v2h2v12c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-4V4C17,2.897,16.103,2,15,2z M9,4h6v2H9V4z M17,20H7V8h1h8h1V20z"})
						)
					]
				)
			]
		)
	}
}