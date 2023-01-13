import React, {useState} from "react";
import './Settings.css';

export const Settings = () => {
	const [SetButtonStatus, setSetButtonStatus] = useState(true)
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
					className={"SetButton"}
					disabled={SetButtonStatus}>set
				</button>
			</div>
		</div>
	);
}