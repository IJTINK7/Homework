import React from 'react';
import './App.css';
import {Body} from './01-site/Body';
import {Header} from "./01-site/Header";
import {Footer} from "./01-site/Footer";
import {NewComponent} from "./02-map/NewComponent";
import {TopCars} from "./02-map/TopCars";
import {Button} from "./03-button/Button";


function App() {
	const students = [
		{id: 1, name: "James", age: 8},
		{id: 2, name: "Robert", age: 18},
		{id: 3, name: "John", age: 28},
		{id: 4, name: "Michael", age: 38},
		{id: 5, name: "William", age: 48},
		{id: 6, name: "David", age: 58},
		{id: 7, name: "Richard", age: 68},
		{id: 8, name: "Joseph", age: 78},
		{id: 9, name: "Thomas", age: 88},
		{id: 10, name: "Charles", age: 98},
		{id: 11, name: "Christopher", age: 100},
	]
	const topCars = [
		{manufacturer:"BMW",model:'m5cs'},
		{manufacturer:"Mercedes",model:'e63s'},
		{manufacturer:"Audi",model:'rs6'}
	]
	const foo1 =()=>{
		console.log(777)
	}
	const foo2 =(number: number)=>{
		console.log(number)
	}

	return (
		<>
			<Header title={"Header"}/>
			<Body title={"Body"}/>
			<Footer title={"Footer"}/>
			<NewComponent students={students}/>
			<TopCars cars={topCars}/>
			<button onClick={foo1}>1</button>
			<button onClick={()=>{foo2(777)}}>2</button>
			<Button />
		</>
	);
}
export default App;
