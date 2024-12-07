interface Props {
	title: string;
	isSelect: boolean;
	categorieId: string | number;
	onClick: (categorieId: string | number) => void;
}

export default function ItemCategorieBanar({
	title,
	isSelect,
	onClick,
	categorieId,
}: Props) {
	return (
		<div
			onClick={() => onClick(categorieId)}
			className={`flex-none p-2 w-3/4 md:w-1/3 lg:w-1/4 text-center rounded border-2 border-blue-900 ${
				isSelect ? "bg-blue-900 text-white" : "bg-white text-blue-900 "
			}`}
		>
			{title}
		</div>
	);
}
