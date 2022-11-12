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
		<div>{props.students.map((el)=>{
			return <div>My name is {el.name}. I am {el.age} years old</div>})}
		</div>
	);
}
