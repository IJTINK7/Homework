type NewComponentType = {
	students: Array<NewComponentArrayType>;
}
type NewComponentArrayType = {
	id: number;
	name: string;
	age: number;
}
export const NewComponent = (props: NewComponentType) => {
	return (
		<div>{props.students}</div>
	);
}
