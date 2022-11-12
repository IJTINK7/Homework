import React from 'react';
import './App.css';
import {Body} from './site/Body';
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";


function App() {
	return (
		<>
			<Header title={"Header"}/>
			<Body title={"Body"}/>
			<Footer title={"Footer"}/>
		</>
	);
}

export default App;
