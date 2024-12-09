import {useNavigate} from "react-router-dom";
import {Category} from "../pages/CategoriesListPage";
interface Props {
	category: Category;
}
export default function CategoryCard({category}: Props) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/items/${category.id}`);
	};
	return (
		<div
			className="p-2 w-1/2 relative"
			key={category.id}
			onClick={handleClick}
		>
			<div className="bg-white rounded-lg shadow-md overflow-hidden w-full h-40 md:h-80 relative">
				<img
					src={category.image}
					alt="Image 1"
					className="w-full h-full object-cover"
				/>

				<div className="absolute bottom-0 w-full text-center py-2">
					<p className="text-sm md:text-lg font-sans font-bold text-white  md:tracking-widest [text-shadow:0_0_10px_rgba(0,0,0,0.8)]">
						{category.display_name}
					</p>
				</div>
			</div>
			{category.opens_at && (
				<div className="absolute top-6 -left-0.5 p-1 md:p-2 md:h-10 text-sm md:text-lg bg-red-600 text-white rounded-r-xl">
					{category.opens_at}
				</div>
			)}
		</div>
	);
}
