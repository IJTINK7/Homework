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
					<tr key={index}>
						<td>{index+1}</td>
						<td>{el.manufacturer}</td>
						<td>{el.model}</td>
					</tr>
				);
			})}
			</tbody>
		</table>
	);
}