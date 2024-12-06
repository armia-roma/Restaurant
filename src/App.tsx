import ItemCard from "./components/ItemCard";
import ItemListPage from "./pages/ItemListPage";
function App() {
	const cards = [
		{id: 1, title: "Card 1", content: "This is the first card."},
		{id: 2, title: "Card 2", content: "This is the second card."},
		{id: 3, title: "Card 3", content: "This is the third card."},
		{id: 4, title: "Card 4", content: "This is the fourth card."},
	];
	return (
		<>
			<ItemListPage></ItemListPage>
			<div className="bg-gray-50 flex flex-col items-center">
				<div className="container p-4">
					{cards.map((card) => (
						<ItemCard></ItemCard>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
