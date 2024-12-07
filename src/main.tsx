import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import Template from "./components/Template";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CategoriesListPage from "./pages/CategoriesListPage.tsx";
import ItemListPage from "./pages/ItemListPage.tsx";
import App from "./App.tsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
	},
	{
		path: "/items",
		element: (
			<Template>
				<ItemListPage />,
			</Template>
		),
	},
	{
		path: "/categories",
		element: (
			<Template>
				<CategoriesListPage />
			</Template>
		),
	},
]);
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
