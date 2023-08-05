class MainComponent {
	constructor(vnode) {
	}
	oncreate() {

	}
	view() {
		return m("main", {class:"main", style:{"height":"280px"}}, 
			m("div", {class:"todos"},
				globalState.todos.filter((x) => x !== null).length === 0 ?
					[
						m("div", {class:"empty"},
							[
								m("img", {"width":"200", "src":"asset/light.png", "alt":""}),
								m("h2", 
									"Your to-do list is empty."
								),
								m("p", 
									"Please create a new task"
								)
							]
						),
					]
					: globalState.todos.map((todo, index) => {
						return m(TodoItem, {
							todo: {
								index: index,
								...todo
							},
						})
					})
			)
		)
	}
}