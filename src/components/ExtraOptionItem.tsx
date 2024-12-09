import {useEffect, useState} from "react";
import {ExtraWithOption} from "../pages/ItemListPage";
import {useFormContext} from "./../contexts/FormContext";

interface Props {
	extraOptionDetails: ExtraWithOption;
	option: Option;
	optionType: "checkbox" | "radio";
	isRequired: boolean | number;
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
}: Props) {
	const ExtraId = extraOptionDetails.extra_id;

	const {form, updateForm} = useFormContext();

	const isChecked = form.extras.some(
		(extra) => extra.extra_id === ExtraId && extra.option_id === option.id
	);
	const [isSelected, setIsSelected] = useState(isChecked);

	useEffect(() => {
		setIsSelected(isChecked);
	}, [form.extras, ExtraId, option.id]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isChecked = e.target.checked;
		setIsSelected(isChecked);

		if (optionType === "radio") {
			const updatedExtras = form.extras.filter(
				(extra) => extra.extra_id !== ExtraId
			);
			if (isChecked) {
				updatedExtras.push({
					extra_id: ExtraId,
					option_id: option.id as number,
				});
			}
			updateForm({extras: updatedExtras});
		}

		if (optionType === "checkbox") {
			const updatedExtras = [...form.extras];
			const existingIndex = updatedExtras.findIndex(
				(extra) =>
					extra.extra_id === ExtraId && extra.option_id === option.id
			);

			if (isChecked && existingIndex === -1) {
				updatedExtras.push({
					extra_id: ExtraId,
					option_id: option.id as number,
				});
			} else if (!isChecked && existingIndex !== -1) {
				updatedExtras.splice(existingIndex, 1);
			}
			updateForm({extras: updatedExtras});
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
