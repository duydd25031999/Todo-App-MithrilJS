class ContainerComponent {
	view({children}) {
		return m("div", {class:"container", id:"container"},
			children
		)
	}
}