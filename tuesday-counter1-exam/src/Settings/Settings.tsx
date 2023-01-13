import React, {useState} from "react";
import './Settings.css';

export const Settings = () => {
	const [initialNumber, setNewNumber] = useState(0);
	const [disableIncreaseButtonStatus, setDisableIncreaseButtonStatus] = useState(false)

	return (
		<div className={"SettingsContainer"}>
			<div className="SettingsDisplay">
				<div className="valuesContainer">
					<h2>max value:</h2>
					<input type="number" name="maxValue" id=""/>
				</div>
				<div className="valuesContainer">
					<h2>start value:</h2>
					<input type="number" name="startValue" id=""/>
				</div>
			</div>
			<div className={"SettingsButtonsContainer"}>
				<button
					className={"IncreaseButton"}
					disabled={disableIncreaseButtonStatus}>set
				</button>
			</div>
		</div>
	);
}