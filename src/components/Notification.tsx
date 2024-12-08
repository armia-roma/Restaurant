interface Props {
	message: string;
	color?: string;
	onClose: () => void;
}
export default function ErrorNotification({
	message,
	color = "bg-gray-600",
	onClose,
}: Props) {
	return (
		<div
			className={`${color} text-white p-4 rounded-md flex items-center justify-between shadow-md max-w-md mx-auto mt-4`}
		>
			<span>{message}</span>
			<button
				onClick={onClose}
				className="text-white bg-transparent hover:underline ml-4"
			>
				Close
			</button>
		</div>
	);
}
