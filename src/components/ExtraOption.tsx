import {ExtraWithOption} from "../pages/ItemListPage";
import ExtraOptionItem from "./ExtraOptionItem";

interface Props {
	extraOption: ExtraWithOption;
}
export default function ExtraOption({extraOption}: Props) {
	return (
		<div className="flex flex-col" key={extraOption.extra_id}>
			<div className="flex justify-between items-center bg-gray-50 p-2 ">
				<div className="text-lg font-medium">{extraOption.name}</div>
				{extraOption.is_required === 1 && (
					<div className="text-red-500">Required</div>
				)}
			</div>
			{extraOption.option.map((item) => (
				<ExtraOptionItem
					key={item.id}
					extraOptionDetails={extraOption}
					option={item}
					optionType={extraOption.extra_type_name}
					isRequired={extraOption.is_required}
				/>
			))}
		</div>
	);
}
