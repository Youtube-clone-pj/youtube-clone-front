import {
	NextIcon,
	PlayIcon,
	VolumeIcon,
	FullScreenIcon,
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
			<ControlDiv>
				<LeftDiv>
					<button>
						<PlayIcon />
					</button>
					<button>
						<NextIcon />
					</button>
					<TimeDiv>01:00 ~ 03:00</TimeDiv>
				</LeftDiv>
				<RightDiv>
					<button>
						<VolumeIcon />
					</button>
					<button>
						<FullScreenIcon />
					</button>
				</RightDiv>
			</ControlDiv>
		</VideoControlLayout>
	);
};

export default VideoControls;
