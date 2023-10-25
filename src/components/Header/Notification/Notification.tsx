import { ProfileSettingIcon } from "@/constants/Icon/icon";
import { NotificationIcon } from "@/constants/Icon/icon";

import {
	NotificationLayout,
	TopDiv,
	TopButtonDiv,
	BottomDiv,
	BottomInnerDiv,
	BottomTextDiv,
} from "./Notification.styles";

const Notification = () => {
	return (
		<NotificationLayout>
			<TopDiv>
				<h2>알림</h2>
				<TopButtonDiv>
					<ProfileSettingIcon />
				</TopButtonDiv>
			</TopDiv>
			<BottomDiv>
				<BottomInnerDiv>
					<NotificationIcon />
					<BottomTextDiv>
						<h3>여기에 알림이 표시됩니다.</h3>
						<h4>즐겨찾는 채널을 구독하여 최신 동영상의 알림을 받아보세요.</h4>
					</BottomTextDiv>
				</BottomInnerDiv>
			</BottomDiv>
		</NotificationLayout>
	);
};

export default Notification;
