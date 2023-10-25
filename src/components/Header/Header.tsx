import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
	HeaderMenuIcon,
	HeaderLogoIcon,
	HeaderMoreIcon,
	LoginPersonIcon,
	HeaderUploadIcon,
	HeaderNotificationIcon,
} from "@/constants/Icon/icon";

import {
	HeaderLayout,
	HeaderInnerDiv,
	HeaderLeftDiv,
	ButtonDiv,
	LogoDiv,
	HeaderRightDiv,
	RightInnerDiv,
	LoginDiv,
	ProfileDiv,
} from "./Header.styles";
import Notification from "./Notification/Notification";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import SearchBar from "./Search/SearchBar";

const Header = () => {
	const isLogin = true;

	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
	const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);

	const navigate = useNavigate();

	const profileRef = useRef<HTMLButtonElement>(null);
	const notificationRef = useRef<HTMLButtonElement>(null);

	const handleDropdown = (e: CustomEvent<MouseEvent>) => {
		const target = e.target as HTMLImageElement;

		if (!profileRef?.current?.contains(target)) {
			setIsDropdownOpen(!isDropdownOpen);
		}
	};

	const handleNotification = (e: CustomEvent<MouseEvent>) => {
		const targets = e.target as HTMLButtonElement;

		if (!notificationRef?.current?.contains(targets)) {
			setIsNotificationOpen(!isNotificationOpen);
		}
	};

	useEffect(() => {
		if (isDropdownOpen) {
			window.addEventListener("click", handleDropdown as EventListener);
		}

		return () => {
			window.addEventListener("click", handleDropdown as EventListener);
		};
	}, [isDropdownOpen]);

	useEffect(() => {
		if (isNotificationOpen) {
			window.addEventListener("click", handleNotification as EventListener);
		}

		return () => {
			window.addEventListener("click", handleNotification as EventListener);
		};
	}, [isNotificationOpen]);

	return (
		<HeaderLayout>
			<HeaderInnerDiv>
				<HeaderLeftDiv>
					<ButtonDiv>
						<button type="button">
							<HeaderMenuIcon />
						</button>
					</ButtonDiv>
					<LogoDiv>
						<HeaderLogoIcon />
						<h2>YouTube</h2>
					</LogoDiv>
				</HeaderLeftDiv>

				<SearchBar />

				<HeaderRightDiv>
					{isLogin ? (
						<RightInnerDiv>
							<ButtonDiv>
								<button
									type="button"
									onClick={() => {
										navigate("/studio");
									}}
								>
									<HeaderUploadIcon color="#fff" />
								</button>
							</ButtonDiv>
							<ButtonDiv>
								<button type="button" ref={notificationRef}>
									<HeaderNotificationIcon
										color="#fff"
										onClick={() => setIsNotificationOpen(!isNotificationOpen)}
									/>
								</button>
								{isNotificationOpen && <Notification />}
							</ButtonDiv>
							<ProfileDiv>
								<button type="button" ref={profileRef}>
									<img
										src="https://yt3.ggpht.com/mut5Yu6ZJVe6YKSKOPkBF6XtWzEpKspOfl3WESzhHa40hy0u8RYPW7S6jy4X5yWCDEtrDxH6Cw=s88-c-k-c0x00ffffff-no-rj"
										alt="profile"
										onClick={() => setIsDropdownOpen(!isDropdownOpen)}
									/>
								</button>

								{isDropdownOpen && <ProfileDropdown />}
							</ProfileDiv>
						</RightInnerDiv>
					) : (
						<RightInnerDiv>
							<ButtonDiv>
								<button type="button">
									<HeaderMoreIcon color="#fff" />
								</button>
							</ButtonDiv>
							<LoginDiv>
								<LoginPersonIcon />
								<h2>로그인</h2>
							</LoginDiv>
						</RightInnerDiv>
					)}
				</HeaderRightDiv>
			</HeaderInnerDiv>
		</HeaderLayout>
	);
};

export default Header;
