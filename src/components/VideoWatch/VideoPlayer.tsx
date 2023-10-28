import { useRef } from "react";

import VideoTest from "@/assets/video/test2.mp4";

// import VideoControls from "./VideoControls";
import {
	VideoPlayerLayout,
	VideoPlayerDiv,
	VideoContainerDiv,
	ContainerInnerDiv,
	Video,
} from "./VideoPlayer.styles";

interface ControllerInterface {
	handleVideoClick: () => void;
	handleKeyDown: (e: React.KeyboardEvent) => void;
	handleMouseIn: () => void;
	handleMouseLeave: () => void;
	handleMouseMove: (e: React.MouseEvent) => void;
	handleTimeUpdate: () => void;
}

const VideoPlayer = () => {
	const controllerRef = useRef<ControllerInterface>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const srcRef = useRef<HTMLSourceElement>(null);

	const containerProps = {
		ref: containerRef,
		tabIndex: 0,
		onkeyDown: (e: React.KeyboardEvent) => {
			if (controllerRef.current) {
				controllerRef.current.handleKeyDown(e);
			}
		},
		onMouseEnter: () => {
			if (controllerRef.current) {
				controllerRef.current.handleMouseIn();
			}
		},
		onMouseLeave: () => {
			if (controllerRef.current) {
				controllerRef.current.handleMouseLeave();
			}
		},
		onMouseMove: (e: React.MouseEvent) => {
			if (controllerRef.current) {
				controllerRef.current.handleMouseMove(e);
			}
		},
	};

	const videoProps = {
		ref: videoRef,
		controls: false,
		onTimeUpdate: () => {
			if (controllerRef.current) {
				controllerRef.current.handleTimeUpdate();
			}
		},
		onClick: () => {
			if (controllerRef.current) {
				controllerRef.current.handleVideoClick();
			}
		},
	};

	// const controlProps = {
	// 	ref: controllerRef,
	// 	containerRef: containerRef,
	// 	videoRef: videoRef,
	// 	srcRef: srcRef,
	// 	src: VideoTest,
	// };

	return (
		<VideoPlayerLayout>
			<VideoPlayerDiv>
				<VideoContainerDiv>
					<ContainerInnerDiv {...containerProps}>
						<Video {...videoProps}>
							<source ref={srcRef} src={VideoTest} type="video/mp4" />
						</Video>
						{/* <VideoControls {...controlProps} /> */}
					</ContainerInnerDiv>
				</VideoContainerDiv>
			</VideoPlayerDiv>
		</VideoPlayerLayout>
	);
};

export default VideoPlayer;
