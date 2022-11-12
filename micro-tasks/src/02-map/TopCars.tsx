type TopCarsType={
	cars:Array<TopCarsArrayType>;
}
type TopCarsArrayType ={
	manufacturer: string;
	model: string;
}
export const TopCars = (props:TopCarsType) => {
	return(
		<div>{props.cars}</div>
	);
}