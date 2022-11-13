type FilterType={
	money: Array<MoneyTypeArray>;
}
type MoneyTypeArray={
	banknote: string;
	nominal: number;
	number: string;
}
export const Filter =(props:FilterType)=>{
	return(
		<ul>
			{props.money.map((objFromMoneyArr, index) => {
				return (
					<li key={index}>
						<span> {objFromMoneyArr.banknote}</span>
						<span> {objFromMoneyArr.nominal}</span>
						<span> {objFromMoneyArr.number}</span>
					</li>
				)
			})}
		</ul>
	);
}