import React, {createContext, useContext, useState, ReactNode} from "react";
type Extra = {
	extra_id: number;
	option_id: number;
};
type Form = {
	restaurant_id: number | null;
	item_id: number | null;
	quantity: number | null;
	extras: Extra[];
};
// Define the form structure
const defaultForm: Form = {
	restaurant_id: null,
	item_id: null,
	quantity: null,
	extras: [],
};

type FormContextType = {
	form: Form;
	updateForm: (newForm: Partial<Form>) => void;
};

// Create the context
const FormContext = createContext<FormContextType | undefined>(undefined);

// Provide the context
export const FormProvider: React.FC<{children: ReactNode}> = ({children}) => {
	const [form, setForm] = useState<Form>(defaultForm);

	const updateForm = (newForm: Partial<Form>) => {
		setForm((prevForm) => ({...prevForm, ...newForm}));
	};

	return (
		<FormContext.Provider value={{form, updateForm}}>
			{children}
		</FormContext.Provider>
	);
};

// Custom hook to use the FormContext
export const useFormContext = () => {
	const context = useContext(FormContext);
	if (!context) {
		throw new Error("useFormContext must be used within a FormProvider");
	}
	return context;
};
