import {HiOutlineArrowPath} from "react-icons/hi2";

interface Error {
	message: string;
	visible: boolean;
}
interface Props {
	error: Error;
	retry: () => void;
}
export default function ErrorMessage({error, retry}: Props) {
	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="flex flex-col bg-white rounded-lg shadow-lg p-8 text-center space-y-6">
				<p className="text-red-600 font-semibold text-lg">
					{error.message}
				</p>
				<button
					className="flex items-center justify-center bg-gray-500 text-white px-6 py-3 rounded-lg font-medium  transition duration-200 ease-in-out transform hover:bg-gray-600 active:scale-95"
					onClick={retry}
				>
					<HiOutlineArrowPath className="w-5 h-5 mr-2" />
					Retry
				</button>
			</div>
		</div>
	);
}
