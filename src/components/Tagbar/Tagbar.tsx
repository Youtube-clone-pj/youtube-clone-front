import { useState } from "react";

import { TagbarData } from "@/constants/data/TagbarData";

import { TagbarLayout, TagbarDiv, TagItemDiv } from "./Tagbar.styles";

const Tagbar = () => {
	const [tag, setTag] = useState<string>("전체");

	return (
		<TagbarLayout>
			<TagbarDiv>
				{TagbarData.map((data) => (
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

export default Tagbar;
