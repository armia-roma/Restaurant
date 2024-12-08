import {useState} from "react";
import {ExtraWithOption} from "../pages/ItemListPage";

interface Props {
	extraOptionDetails: ExtraWithOption;
	option: Option;
	optionType: "checkbox" | "radio";
	isRequired: boolean | number;
	onSelect?: (option: Option) => void;
}

interface Option {
	id: number | string;
	name: string;
	option_has_price: boolean;
	currency: string;
	price: number;
}

export default function ExtraOptionItem({
	extraOptionDetails,
	option,
	optionType,
	isRequired,
	onSelect,
}: Props) {
	const [isSelected, setIsSelected] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isChecked = e.target.checked;

		setIsSelected(isChecked);

		if (isChecked && onSelect) {
			onSelect(option);
		}
	};
	return (
		<div className="flex items-center justify-between p-2">
			<p className="text-base font-medium text-gray-700 ">
				{option.name}
			</p>
			<div className="flex items-center space-x-2">
				{option.option_has_price && (
					<p className="text-base text-gray-800">
						+ {option.currency} {option.price}
					</p>
				)}
				<input
					id={option.id.toString()}
					type={optionType}
					value={option.id}
					name={extraOptionDetails.extra_id.toString()}
					checked={isSelected}
					required={!!isRequired}
					onChange={handleInputChange}
					className="w-5 h-5 border border-gray-900"
				/>
			</div>
		</div>
	);
}
