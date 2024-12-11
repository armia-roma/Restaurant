import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import Template from "./components/Template";
import {FormProvider} from "./contexts/FormContext.tsx";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CategoriesListPage from "./pages/CategoriesListPage.tsx";
import ItemListPage from "./pages/ItemListPage.tsx";
import App from "./App.tsx";
import {CartProvider} from "./contexts/CartContext.tsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
	},
	{
		path: "/items/:CategoryId",
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
		<CartProvider>
			<FormProvider>
				<RouterProvider router={router} />
			</FormProvider>
		</CartProvider>
	</StrictMode>
);
