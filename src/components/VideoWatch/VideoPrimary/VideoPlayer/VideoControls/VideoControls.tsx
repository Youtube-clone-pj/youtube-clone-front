import {
	useState,
	useEffect,
	useRef,
	forwardRef,
	useCallback,
	useImperativeHandle,
} from "react";

import {
	PlayIcon,
	StopIcon,
	VolumeIcon,
	VolumeMuteIcon,
	FullScreenIcon,
	FullScreenCancelIcon,
	StartIcon,
	BackWardIcon,
	ForwardIcon,
	EndIcon,
} from "@/constants/Icon/icon";

import {
	VideoControlLayout,
	ProgressbarDiv,
	ProgressInnerDiv,
	ProgressStickDiv,
	StickList,
	StickPlayDiv,
	ProgressCircleDiv,
	ProgressCircle,
	ControlDiv,
	LeftDiv,
	TimeDiv,
	RightDiv,
	SoundDiv,
	SoundControlDiv,
} from "./VideoControls.styles";

interface ControlsInterface {
	containerRef: React.RefObject<HTMLDivElement>;
	videoRef: React.RefObject<HTMLVideoElement>;
	srcRef: React.RefObject<HTMLSourceElement>;
	src: string;
}

const VideoControls = forwardRef(
	({ containerRef, videoRef }: ControlsInterface, ref) => {
		const [showControl, setShowControl] = useState(false);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const [hideCursor, setHideCursor] = useState(false);
		const [coords, setCoords] = useState({ x: 0 });
		const [time, setTime] = useState(0);
		const [volume, setVolume] = useState(50);
		const [isVolume, setIsVolume] = useState(false);
		const [isSound, setIsSound] = useState(true);
		const [isFull, setIsFull] = useState(false);
		const [isPlaying, setIsPlaying] = useState(false);
		const [progressTime, setProgressTime] = useState(0);

		const containerCurrent = containerRef.current;
		const videoCurrent = videoRef?.current;
		// const srcCurrent = srcRef.current;
		const totalTime = videoCurrent?.duration;

		const volumeRef = useRef<HTMLInputElement>(null);

		const volumeCallback = useCallback((value: number) => {
			setVolume(value);
		}, []);

		const timeUpdate = (time: number | null | undefined) => {
			if (!time) {
				time = 0;
			}

			time = Math.floor(time);
			let min: number | string = Math.floor(time / 60);
			let sec: number | string = Math.floor(time % 60);

			if (min < 10) {
				min = `0${min}`;
			}

			if (sec < 10) {
				sec = `0${sec}`;
			}

			return `${min}:${sec}`;
		};

		const handleKeyDown = (e: React.KeyboardEvent) => {
			switch (e.code) {
				case "ArrowLeft":
					videoCurrent!.currentTime -= 5;
					break;
				case "ArrowRight":
					videoCurrent!.currentTime += 5;
					break;
				case "Space":
					if (videoCurrent!.paused) {
						videoCurrent!.play();
						setIsPlaying(true);
					} else {
						videoCurrent!.pause();
						setIsPlaying(false);
					}
					break;
				default:
					return;
			}
		};

		const handleVideoClick = () => {
			if (videoCurrent) {
				if (videoCurrent.paused) {
					videoCurrent.play();
					setIsPlaying(true);
				} else {
					videoCurrent.pause();
					setIsPlaying(false);
				}
			}
		};

		const handleMouseMove = (e: React.MouseEvent) => {
			setShowControl(true);
			setHideCursor(false);
			setCoords({ x: e.screenX });
		};

		const handleMouseIn = () => {
			setShowControl(true);
		};

		const handleMouseLeave = () => {
			setShowControl(false);
		};

		const handleTimeUpdate = () => {
			setTime(videoCurrent?.currentTime || 0);
		};

		useEffect(() => {
			const timeOut = setTimeout(() => {
				setShowControl(false);
				setHideCursor(true);
			}, 3000);

			return () => clearTimeout(timeOut);
		}, [coords]);

		useEffect(() => {
			if (volumeRef && volumeRef.current) {
				volumeRef.current.value = String(volume);
			}
		}, [isVolume]);

		useEffect(() => {
			if (totalTime) {
				setProgressTime(videoCurrent.currentTime / totalTime);
			}
		}, [videoCurrent?.currentTime]);

		useImperativeHandle(ref, () => ({
			handleVideoClick,
			handleKeyDown,
			handleMouseIn,
			handleMouseLeave,
			handleMouseMove,
			handleTimeUpdate,
		}));

		return (
			<>
				{showControl && (
					<VideoControlLayout>
						<ProgressbarDiv>
							<ProgressInnerDiv>
								<ProgressStickDiv>
									<StickList>
										<StickPlayDiv
											style={{
												left: "0px",
												transform: `scaleX(${progressTime})`,
											}}
										/>
									</StickList>
								</ProgressStickDiv>
								<ProgressCircleDiv
									style={{ transform: `translateX(${progressTime * 640}px)` }}
								>
									<ProgressCircle />
								</ProgressCircleDiv>
							</ProgressInnerDiv>
						</ProgressbarDiv>
						<ControlDiv>
							<LeftDiv>
								<button
									onClick={() => {
										if (videoCurrent) {
											videoCurrent.currentTime = 0;
										}
									}}
								>
									<StartIcon size={36} color="#fff" />
								</button>
								<button
									onClick={() => {
										if (videoCurrent) {
											videoCurrent.currentTime -= 5;
										}
									}}
								>
									<BackWardIcon size={30} color="#fff" />
								</button>
								<button
									onClick={() => {
										if (isPlaying) {
											videoCurrent?.pause();
											setIsPlaying(false);
										} else {
											videoCurrent?.play();
											setIsPlaying(true);
										}
									}}
								>
									{isPlaying ? (
										<StopIcon size={36} color="#fff" />
									) : (
										<PlayIcon size={36} color="#fff" />
									)}
								</button>
								<button
									onClick={() => {
										if (videoCurrent) {
											videoCurrent.currentTime += 5;
										}
									}}
								>
									<ForwardIcon size={30} color="#fff" />
								</button>
								<button
									onClick={() => {
										if (videoCurrent) {
											videoCurrent.currentTime = videoCurrent.duration;
										}
									}}
								>
									<EndIcon size={36} color="#fff" />
								</button>
								<TimeDiv>{`${timeUpdate(time)} / ${timeUpdate(
									totalTime,
								)}`}</TimeDiv>
							</LeftDiv>
							<RightDiv>
								<SoundDiv
									onMouseEnter={() => {
										setIsVolume(true);
									}}
									onMouseLeave={() => {
										setIsVolume(false);
									}}
								>
									<button
										onClick={() => {
											if (videoCurrent) {
												if (isSound) {
													videoCurrent.muted = true;
													setIsSound(false);
												} else {
													videoCurrent.muted = false;
													setIsSound(true);
												}
											}
										}}
									>
										{isSound ? <VolumeIcon /> : <VolumeMuteIcon />}
									</button>
									{isVolume && (
										<SoundControlDiv>
											<input
												type="range"
												ref={volumeRef}
												onChange={(e) => {
													volumeCallback(Number(e.target.value));
													if (videoCurrent) {
														videoCurrent.volume = Number(e.target.value) / 100;
													}
												}}
											/>
										</SoundControlDiv>
									)}
								</SoundDiv>
								<button
									onClick={() => {
										if (containerCurrent) {
											if (isFull) {
												document.exitFullscreen();
												setIsFull(false);
											} else {
												containerCurrent.requestFullscreen();
												setIsFull(true);
											}
										}
									}}
								>
									{isFull ? <FullScreenCancelIcon /> : <FullScreenIcon />}
								</button>
							</RightDiv>
						</ControlDiv>
					</VideoControlLayout>
				)}
			</>
		);
	},
);

export default VideoControls;
