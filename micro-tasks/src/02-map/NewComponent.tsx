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
		<ol>{props.students.map((el) => {
			return (
				<li key={el.id} value={el.id}>My name is {el.name}. I am {el.age} years old</li>
			);
		})}
		</ol>
	);
}