import { ProfileDropdownData } from "@/constants/data/ProfileDropdownData";

import {
	ProfileDropdownLayout,
	TopDiv,
	TextDiv,
	BottomDiv,
} from "./ProfileDropdown.styles";

const ProfileDropdown = () => {
	return (
		<ProfileDropdownLayout>
			<TopDiv>
				<img
					src="https://yt3.ggpht.com/mut5Yu6ZJVe6YKSKOPkBF6XtWzEpKspOfl3WESzhHa40hy0u8RYPW7S6jy4X5yWCDEtrDxH6Cw=s88-c-k-c0x00ffffff-no-rj"
					alt="profile"
				/>
				<TextDiv>
					<h3>김준식</h3>
					<h3>@user-bj5em7yz</h3>
					<a href="/">Google 계정 관리</a>
				</TextDiv>
			</TopDiv>
			<BottomDiv>
				{ProfileDropdownData.map((data) => (
					<ul key={data.title}>
						{data.list.map(({ icon, title, link }) => (
							<a href={link} key={title}>
								<li>
									{icon}
									<h3>{title}</h3>
								</li>
							</a>
						))}
					</ul>
				))}
			</BottomDiv>
		</ProfileDropdownLayout>
	);
};

export default ProfileDropdown;
