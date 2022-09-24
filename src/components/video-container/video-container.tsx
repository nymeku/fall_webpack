import "./video-container.scss"
import cx from "classnames"
import { ReactNode } from "react"

export type VideoContainerProps = {
	children: React.ReactNode
	position?: "left" | "right"
	className?: string
}

const VideoContainer: React.FC<VideoContainerProps> = ({ children, position = "left", className = "" }) => {
	return (
		<div className={cx("video-container", { left: position === "left" }, { right: position === "right" }, className)}>
			<div>{children}</div>
		</div>
	)
}

export default VideoContainer
