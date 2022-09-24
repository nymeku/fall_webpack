import VideoContainer from "../../components/video-container/video-container"
import "./vertical.scss"

const Vertical = () => {
	return (
		<section className="first__section">
			<header className="header">
				<div className="header__left">
					<p>FALL</p>
					<p>it's spooky time</p>
				</div>

				<p className="header__right">BOO...</p>
			</header>

			<div>
				<div className="center">
					<img src="/assets/images/leaves_are_falling.svg" alt="title1" loading="eager" />
					<div className="center__repeat">
						{Array(8)
							.fill("TEST")
							.map((word) => (
								<span>{word}</span>
							))}
					</div>
					<img src="/assets/images/scary_no.svg" alt="title2" loading="eager" />
				</div>

				<div className="videos">
					{Array(5)
						.fill(0)
						.map((_, index) => (
							<VideoContainer position={index % 2 !== 0 ? "left" : "right"} key={"index" + index}>
								<video autoPlay={true}>
									<source src="/assets/videos/688928fe-4d50-47db-bd9f-d69bd1da378f-video.mp4" />
								</video>
							</VideoContainer>
						))}
				</div>
			</div>
		</section>
	)
}

export default Vertical
