type FilterType = {
	money: Array<MoneyTypeArray>;
}
type MoneyTypeArray = {
	banknote: string;
	nominal: number;
	number: string;
}
export const Filter = (props: FilterType) => {
	const onclickFilterHandlerAll =(nameButton:string)=>{
		console.log(nameButton)
	}
	const onclickFilterHandlerDollar =(nameButton:string)=>{
		console.log(nameButton)
	}
	const onclickFilterHandlerRuble =(nameButton:string)=>{
		console.log(nameButton)
	}
	return (
		<>
			<ul>
				{props.money.filter((filteredMoney) => {
					return filteredMoney.banknote === "ruble"
				}).map((objFromMoneyArr, index) => {
					return (
						<li key={index}>
							<span> {objFromMoneyArr.banknote}</span>
							<span> {objFromMoneyArr.nominal}</span>
							<span> {objFromMoneyArr.number}</span>
						</li>
					)
				})}
			</ul>
			<div style={{marginLeft:"15px"}}>
				<button onClick={()=>onclickFilterHandlerAll('All')}>All</button>
				<button onClick={()=>onclickFilterHandlerDollar('Dollar')}>Dollar</button>
				<button onClick={()=>onclickFilterHandlerRuble('Ruble')}>Ruble</button>
			</div>
		</>

	);
}