import {CiSearch} from "react-icons/ci";
interface Props {
	onSearch: (value: string) => void;
	searchLabel: string;
}
export default function SearchBar({onSearch, searchLabel}: Props) {
	return (
		<div className="w-full mx-auto relative ">
			<input
				className="border border-blue-900 rounded w-full p-2 focus:ring-2 text-center "
				placeholder={searchLabel}
				type="text"
				onChange={(e) => onSearch(e.target.value)}
			/>
			<CiSearch className="absolute left-3 top-3 text-blue" />
		</div>
	);
}
