import React, {useState} from "react";
import './Counter.css';

export const Counter = () => {
	const [initialNumber, setNewNumber] = useState(0);
	const [disableIncreaseButtonStatus, setDisableIncreaseButtonStatus] = useState(false)
	const [disableResetButtonStatus, setDisableResetButtonStatus] = useState(true)
	const increaseNumberHandler = (displayNumber: number) => {
		setNewNumber(++displayNumber);
		if (displayNumber === 1) {
			setDisableResetButtonStatus(false);
		}
		if (displayNumber === 10) {
			setDisableIncreaseButtonStatus(true);
		}
	}
	const resetDisplayHandler = () => {
		setNewNumber(0);
		setDisableResetButtonStatus(true);
		setDisableIncreaseButtonStatus(false);
	}
	const display = initialNumber === 10 ? "RedDisplayValue" : "";
	return (
		<div className={"Container"}>
			<div className={`${display} Display`}>{initialNumber}</div>
			<div className={"ButtonsContainer"}>
				<button
					className={"IncreaseButton"}
					onClick={() => {
						increaseNumberHandler(initialNumber)
					}}
					disabled={disableIncreaseButtonStatus}>inc
				</button>
				<button
					className={"ResetButton"}
					onClick={resetDisplayHandler}
					disabled={disableResetButtonStatus}>reset
				</button>
			</div>
		</div>
	);
}