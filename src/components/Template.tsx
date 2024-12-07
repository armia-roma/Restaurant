import {ReactNode} from "react";
import Nav from "./Nav";
interface Props {
	children: ReactNode;
}
const Template = ({children}: Props) => {
	return (
		<div>
			<Nav />
			<div>{children}</div>
		</div>
	);
};

export default Template;
