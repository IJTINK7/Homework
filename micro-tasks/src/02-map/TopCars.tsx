type TopCarsType = {
	cars: Array<TopCarsArrayType>;
}
type TopCarsArrayType = {
	manufacturer: string;
	model: string;
}
export const TopCars = (props: TopCarsType) => {
	return (
		<table>
			<tbody>
			<tr>
				<th>№</th>
				<th>Manufacturer</th>
				<th>Model</th>
			</tr>
			{props.cars.map((el, index) => {
				return (
					<tr>
						<td key={index+1}>{index+1}</td>
						<td key={index+1}>{el.manufacturer}</td>
						<td key={index+1}>{el.model}</td>
					</tr>
				);
			})}
			</tbody>
		</table>
	);
}