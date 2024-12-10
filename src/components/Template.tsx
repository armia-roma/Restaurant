import {ReactNode} from "react";
import Nav from "./Nav";
interface Props {
	children: ReactNode;
}
const Template = ({children}: Props) => {
	return (
		<div className="h-screen bg-gray-50">
			<Nav />
			<div>{children}</div>
		</div>
	);
};

export default Template;
