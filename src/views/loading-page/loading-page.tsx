import "./loading-page.scss"

const LoadingPage = () => {
	return (
		<div className="main">
			<p>Hello</p>
			<div>
				{["F", "A", "L", "L"].map((letter) => (
					<span>{letter}</span>
				))}
			</div>
		</div>
	)
}

export default LoadingPage
