import { useState, useEffect, useRef } from "react";

import { CommentSortIcon } from "@/constants/Icon/icon";

import { PlaylistSortLayout, SortDiv } from "./PlaylistSort.styles";
import PlaylistSortDropdown from "../PlaylistSortDropdown/PlaylistSortDropdown";

const PlaylistSort = () => {
	const dropdownRef = useRef<HTMLDivElement>(null);

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleDropdown = (e: CustomEvent<MouseEvent>) => {
		const target = e.target as HTMLDivElement;

		if (!dropdownRef?.current?.contains(target)) {
			setIsDropdownOpen(false);
		}
	};

	useEffect(() => {
		if (isDropdownOpen) {
			window.addEventListener("click", handleDropdown as EventListener);

			document.body.style.overflow = "hidden";
		}

		return () => {
			window.removeEventListener("click", handleDropdown as EventListener);

			document.body.style.overflow = "";
		};
	}, [isDropdownOpen]);

	return (
		<PlaylistSortLayout>
			<SortDiv
				ref={dropdownRef}
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}
			>
				<CommentSortIcon />
				<h3>정렬</h3>
				{isDropdownOpen && <PlaylistSortDropdown />}
			</SortDiv>
		</PlaylistSortLayout>
	);
};

export default PlaylistSort;
