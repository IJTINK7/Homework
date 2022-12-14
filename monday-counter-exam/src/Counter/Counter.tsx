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
	const container = {
		width: "400px",
		height: "330px",
		backgroundColor: "#2b2b35",
		margin: "50px auto",
		border: "3px #6ee4fe solid",
		borderRadius: "10px,"
	}
	const display = {
		width: "350px",
		height: "170px",
		backgroundColor: "#6ee4fe",
		margin: "20px auto",
		borderRadius: "10px",
		fontSize: "120px",
		fontWeight: "700",
		color: initialNumber === 5 ? "#e30043" : "#2b2b35",
	}
	const buttonsContainer = {
		width: "350px",
		height: "90px",
		margin: "20px auto",
		border: "3px #6ee4fe solid",
		borderRadius: "10px",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
	}
	const increaseButtonStyle = {
		backgroundColor: disableIncreaseButtonStatus ? "#457685" : "#6ee4fe",
		border: disableIncreaseButtonStatus ? "3px #457685 solid" : "3px #6ee4fe solid",
		borderRadius: "10px",
		width: "120px",
		height: "50px",
		fontSize: "40px",
		fontWeight: "700",
		color: "#2b2b35",
	}
	const resetButtonStyle = {
		backgroundColor: disableResetButtonStatus ? "#457685" : "#6ee4fe",
		border: disableResetButtonStatus ? "3px #457685 solid" : "3px #6ee4fe solid",
		borderRadius: "10px",
		width: "120px",
		height: "50px",
		fontSize: "40px",
		fontWeight: "700",
		color: "#2b2b35",
	}
	return (
		<div style={container}>
			<div style={display}>{initialNumber}</div>
			<div style={buttonsContainer}>
				<button style={increaseButtonStyle} className={"Button"} onClick={() => {
					increaseNumberHandler(initialNumber)
				}} disabled={disableIncreaseButtonStatus}>inc
				</button>
				<button style={resetButtonStyle} onClick={resetDisplayHandler}
						disabled={disableResetButtonStatus}>reset
				</button>
			</div>
		</div>
	);
}