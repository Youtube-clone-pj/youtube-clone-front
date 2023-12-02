import { useState, useEffect } from "react";

import { PlaylistTagbarData } from "@/constants/data/TagbarData";

import { TagbarLayout, TagbarDiv, TagItemDiv } from "./PlaylistTagbar.styles";

const PlaylistTagbar = () => {
	const [tag, setTag] = useState<string>("전체");

	const [position, setPosition] = useState(0);

	function onScroll() {
		setPosition(window.scrollY);
	}
	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<TagbarLayout $scroll={position > 56}>
			<TagbarDiv>
				{PlaylistTagbarData.map((data) => (
					<TagItemDiv
						key={data.title}
						onClick={() => {
							setTag(data.title);
						}}
						disabled={tag === data.title}
					>
						{data.title}
					</TagItemDiv>
				))}
			</TagbarDiv>
		</TagbarLayout>
	);
};

export default PlaylistTagbar;
