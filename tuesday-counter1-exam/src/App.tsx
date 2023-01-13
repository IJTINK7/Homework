import React from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";

function App() {
	return (
		<div className="App">
			<Settings/>
			<Counter/>
		</div>
	);
}

export default App;
