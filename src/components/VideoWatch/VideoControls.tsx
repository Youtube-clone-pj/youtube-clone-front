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
} from "./VideoControls.styles";

const VideoControls = () => {
	return (
		<VideoControlLayout>
			<ProgressbarDiv>
				<ProgressInnerDiv>
					<ProgressStickDiv>
						<StickList>
							<StickPlayDiv />
						</StickList>
					</ProgressStickDiv>
					<ProgressCircleDiv>
						<ProgressCircle />
					</ProgressCircleDiv>
				</ProgressInnerDiv>
			</ProgressbarDiv>
			<ControlDiv />
		</VideoControlLayout>
	);
};

export default VideoControls;
