import {
	ChannelBioLayout,
	TopDiv,
	ProfileDiv,
	InfoDiv,
	BioDiv,
	ButtonDiv,
} from "./ChannelBio.styles";

const ChannelBio = () => {
	return (
		<ChannelBioLayout>
			<TopDiv>
				<ProfileDiv>
					<a href="#">
						<img
							src="https://yt3.ggpht.com/mut5Yu6ZJVe6YKSKOPkBF6XtWzEpKspOfl3WESzhHa40hy0u8RYPW7S6jy4X5yWCDEtrDxH6Cw=s88-c-k-c0x00ffffff-no-rj"
							alt="profile"
						/>
					</a>
				</ProfileDiv>
				<InfoDiv>
					<BioDiv>
						<h2>김준식</h2>
						<h3>@user-bj5em7yz5w</h3>
						<p>채널 description 공간</p>
					</BioDiv>
					<ButtonDiv>
						<button>채널 맞춤 설정</button>
						<button>동영상 관리</button>
					</ButtonDiv>
				</InfoDiv>
			</TopDiv>
		</ChannelBioLayout>
	);
};

export default ChannelBio;
