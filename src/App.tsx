import {Link, Outlet} from "react-router-dom";
import Nav from "./components/Nav";

function App() {
	return (
		<>
			<Nav></Nav>
			<Link
				to="/categories"
				className="flex items-center justify-center text-white mt-10 hover:translate-x-1"
			>
				<div className="w-1/2 h-48 bg-blue-900 flex items-center justify-center text-white rounded cursor-pointer">
					<h1 className="text-4xl md:text-6xl font-bold">
						Categories
					</h1>
				</div>
			</Link>
		</>
	);
}

export default App;
