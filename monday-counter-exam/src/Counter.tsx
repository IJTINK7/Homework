import React, {useState} from "react";

export const Counter = () => {
	const [initialNumber, setNewNumber] = useState(0);
	// const [disableButtonStatus, setDisableButtonStatus] = useState(true)
	const increaseNumberHandler =(displayNumber:number)=>{
		setNewNumber(++displayNumber);
	}
	const resetDisplayHandler =()=>{
		setNewNumber(0);
	}
	return (
		<div className={"Container"}>
			<div className={"Display"}>{initialNumber}</div>
			<div className={"ButtonsContainer"}>
				<button onClick={()=>{increaseNumberHandler(initialNumber)}} disabled={false}>inc</button>
				<button onClick={resetDisplayHandler} disabled={true}>reset</button>
			</div>
		</div>
	);
}