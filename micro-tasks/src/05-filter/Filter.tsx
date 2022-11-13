import {useState} from "react";

type FilterType = {
	money: Array<MoneyTypeArray>;
}
type MoneyTypeArray = {
	banknote: string;
	nominal: number;
	number: string;
}
export const Filter = (props: FilterType) => {

	let[currency, setCurrency] = useState('all')
	const onclickFilterHandler =(nameButton:string)=>{
		setCurrency(nameButton)
	}

	return (
		<>
		<ul>
			{props.money.filter((filteredMoney) => {
				if(currency === "all"){
					return props.money
				}else
				 return filteredMoney.banknote === currency}).map((objFromMoneyArr, index) => {
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
			<button onClick={()=>onclickFilterHandler('all')}>All</button>
			<button onClick={()=>onclickFilterHandler('dollar')}>Dollar</button>
			<button onClick={()=>onclickFilterHandler('ruble')}>Ruble</button>
		</div>
</>

);
}