import React, {useState} from "react";

export const Counter = () => {
	const [initialNumber, setNewNumber] = useState(0);
	const [disableIncreaseButtonStatus, setDisableIncreaseButtonStatus] = useState(false)
	const [disableButtonStatus, setDisableButtonStatus] = useState(true)
	const increaseNumberHandler =(displayNumber:number)=>{
		setNewNumber(++displayNumber);
		if (displayNumber === 1){
			setDisableButtonStatus(false);
		}
		if(displayNumber === 5){
			setDisableIncreaseButtonStatus(true);
		}
	}
	const resetDisplayHandler =()=>{
		setNewNumber(0);
		setDisableButtonStatus(true);
		setDisableIncreaseButtonStatus(false);
	}
	return (
		<div className={"Container"}>
			<div className={"Display"}>{initialNumber}</div>
			<div className={"ButtonsContainer"}>
				<button onClick={()=>{increaseNumberHandler(initialNumber)}} disabled={disableIncreaseButtonStatus}>inc</button>
				<button onClick={resetDisplayHandler} disabled={disableButtonStatus}>reset</button>
			</div>
		</div>
	);
}