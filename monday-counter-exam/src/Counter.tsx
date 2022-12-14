import React from "react";

export const Counter = () => {
	return (
		<div className={"Container"}>
			<div className={"Display"}>0</div>
			<div>
				<button>inc</button>
				<button>reset</button>
			</div>
		</div>
	);
}