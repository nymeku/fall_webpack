import LoadingPage from "./views/loading-page/loading-page"
import "./App.scss"
import Vertical from "./views/vertical/vertical"

function App() {
	return (
		<main className="wrapper">
			<LoadingPage />

			<Vertical />
		</main>
	)
}

export default App
