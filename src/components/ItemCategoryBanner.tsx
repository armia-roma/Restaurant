interface Props {
	title: string;
	isSelected: boolean;
	categoryId: string | number;
	onClick: (categoryId: string | number) => void;
}

export default function ItemCategoryBanner({
	title,
	isSelected,
	categoryId,
	onClick,
}: Props) {
	return (
		<div
			onClick={() => onClick(categoryId)}
			className={`flex-none p-2 w-3/4 md:w-1/3 lg:w-1/4 text-center rounded border-2 border-blue-900 ${
				isSelected
					? "bg-blue-900 text-white"
					: "bg-white text-blue-900 "
			}`}
		>
			{title}
		</div>
	);
}
