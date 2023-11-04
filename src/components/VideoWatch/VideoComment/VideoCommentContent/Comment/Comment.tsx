import { useState } from "react";

import { LikeIcon, DisLikeIcon, HeaderMoreIcon } from "@/constants/Icon/icon";

import {
	CommentLayout,
	ProfileDiv,
	ContentDiv,
	HeaderDiv,
	CommentTextDiv,
	TextDiv,
	ContentButtonDiv,
	OptionButtonDiv,
} from "./Comment.styles";
import VideoCommentInput from "../../VideoCommentHeader/VideoCommentInput/VideoCommentInput";

type CommentProp = {
	reply: boolean;
};

const Comment = ({ reply }: CommentProp) => {
	const [isMore, setIsMore] = useState(false);
	const [isReplyClick, setIsReplyClick] = useState(false);

	const [optionMenuOpenIndex, setOptionMenuOpenIndex] = useState<number | null>(
		null,
	);

	const handleCommentMore = () => {
		setIsMore(!isMore);
	};

	const handleOption = (num: number) => {
		setOptionMenuOpenIndex((prev) => (prev === num ? null : num));
	};

	return (
		<CommentLayout
			onMouseOver={() => {
				handleOption(1);
			}}
			onMouseOut={() => {
				setOptionMenuOpenIndex(null);
			}}
		>
			<ProfileDiv>
				<a href="#">
					<img
						src="https://yt3.ggpht.com/JvXwi2zyrNnKLdVjp5MIYEakcH5RHWKDIajrPAcCHYjeWFsgNS3az_eX8BT8a8YhjbXiDX-UJQ=s68-c-k-c0x00ffffff-no-rj"
						alt="profile"
					/>
				</a>
			</ProfileDiv>
			<ContentDiv>
				<HeaderDiv>
					<h3>
						<a href="#">@user-김준식</a>
					</h3>
					<h4>10개월 전(수정됨)</h4>
				</HeaderDiv>
				<CommentTextDiv>
					<TextDiv $ismore={isMore}>
						<span>
							이번 플리는 FLO (플로) 해외 팝 TOP 100곡 기준으로 제작되었습니다:)
						</span>
						<br />
						<span>
							FLO에서 [둘러보기] → [상황]에서 제 플리들을 만나보실 수 있어요
						</span>
						<br />
						<span>
							💙 광고제거 👉{" "}
							<a id="tag" href="#!">
								05:31:04
							</a>{" "}
							클릭 후 🔄 다시보기
						</span>
						<br />
						<span>
							[
							<a id="tag" href="#!">
								00:01
							</a>
							] 1위 The Kid LAROI & Justin Bieber - STAY{" "}
						</span>
						<br />
						<span>
							[
							<a id="tag" href="#!">
								02:18
							</a>
							] 2위 GAYLE - abcdefu{" "}
						</span>
						<br />
						<span>
							[
							<a id="tag" href="#!">
								05:05
							</a>
							] 3위 GAYLE - abcdefu{" "}
						</span>
					</TextDiv>
					<button
						className={isMore ? "" : "disabled"}
						onClick={handleCommentMore}
					>
						간략히
					</button>
					<button
						className={isMore ? "disabled" : ""}
						onClick={handleCommentMore}
					>
						자세히 보기
					</button>
				</CommentTextDiv>
				{!reply && (
					<>
						<ContentButtonDiv>
							<button>
								<LikeIcon size={22} color="#fff" />
							</button>
							<span>140</span>
							<button>
								<DisLikeIcon size={22} color="#fff" />
							</button>
							<button
								className="reply"
								onClick={() => setIsReplyClick(!isReplyClick)}
							>
								답글
							</button>
						</ContentButtonDiv>
						{isReplyClick && <VideoCommentInput />}
					</>
				)}
			</ContentDiv>
			<OptionButtonDiv>
				<button>
					{optionMenuOpenIndex && <HeaderMoreIcon size={24} color="#fff" />}
				</button>
			</OptionButtonDiv>
		</CommentLayout>
	);
};

export default Comment;
