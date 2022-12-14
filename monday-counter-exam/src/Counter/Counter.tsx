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
		if (displayNumber === 5) {
			setDisableIncreaseButtonStatus(true);
		}
	}
	const resetDisplayHandler = () => {
		setNewNumber(0);
		setDisableResetButtonStatus(true);
		setDisableIncreaseButtonStatus(false);
	}
	const displayColor = {
		color: initialNumber === 5 ? "#e30043" : "#2b2b35",
	}
	const increaseButtonStyle = {
		backgroundColor: disableIncreaseButtonStatus ? "#457685" : "#6ee4fe",
		border: disableIncreaseButtonStatus ? "3px #457685 solid" : "3px #6ee4fe solid",
	}
	const resetButtonStyle = {
		backgroundColor: disableResetButtonStatus ? "#457685" : "#6ee4fe",
		border: disableResetButtonStatus ? "3px #457685 solid" : "3px #6ee4fe solid",
	}
	return (
		<div className={"Container"}>
			<div style={displayColor} className={"Display"}>{initialNumber}</div>
			<div className={"ButtonsContainer"}>
				<button style={increaseButtonStyle}
						className={"Button"}
						onClick={() => {increaseNumberHandler(initialNumber)}}
						disabled={disableIncreaseButtonStatus}>inc
				</button>
				<button style={resetButtonStyle}
						onClick={resetDisplayHandler}
						disabled={disableResetButtonStatus}>reset
				</button>
			</div>
		</div>
	);
}