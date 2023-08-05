class App {
	constructor() {
		globalAction.loadCache()
	}
	view() {
		return m("div", {class:"app"}, 
			m(ContainerComponent, [
				m(ThemeComponent),
				m(HeaderComponent),
				m(MainComponent),
				m(FooterComponent),
			])
		)
	}
}