import React, {useState} from 'react';
import './App.css';
import {Body} from './01-site/Body';
import {Header} from "./01-site/Header";
import {Footer} from "./01-site/Footer";
import {NewComponent} from "./02-map/NewComponent";
import {TopCars} from "./02-map/TopCars";
import {Button} from "./03-button/Button";
import {Filter} from "./05-filter/Filter";

function App() {
	//useState
	let [a, setA] = useState(23);
	const onclickHandler = () => {
		setA(++a);
		console.log(a)
	}
	const onclickZero = () => {
		setA(0)
		console.log(a)
	}
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
		{manufacturer: "BMW", model: 'm5cs'},
		{manufacturer: "Mercedes", model: 'e63s'},
		{manufacturer: "Audi", model: 'rs6'}
	]
	const foo1 = () => {
		console.log(777)
	}
	const foo2 = (number: number) => {
		console.log(number)
	}
	const button1foo = (name: string, age: number) => {
		console.log(name, age);
	}
	const button2foo = (name: string, age: number, address: string) => {
		console.log(name, age, address);
	}
	const usualButton1 = () => {
		console.log("I'm the usual button 1")
	}
	const usualButton2 = (info: string) => {
		console.log(info)
	}
	//filter
	let money = [
		{banknote: 'dollar', nominal: 100, number: ' a1234567890'},
		{banknote: 'dollar', nominal: 50, number: ' z1234567890'},
		{banknote: 'ruble', nominal: 100, number: ' w1234567890'},
		{banknote: 'dollar', nominal: 100, number: ' e1234567890'},
		{banknote: 'dollar', nominal: 50, number: ' c1234567890'},
		{banknote: 'ruble', nominal: 100, number: ' r1234567890'},
		{banknote: 'dollar', nominal: 50, number: ' x1234567890'},
		{banknote: 'ruble', nominal: 50, number: ' v1234567890'},
	];


	return (
		<>
			<Header title={"Header"}/>
			<Body title={"Body"}/>
			<Footer title={"Footer"}/>
			<NewComponent students={students}/>
			<TopCars cars={topCars}/>
			<button onClick={foo1}>1</button>
			<button onClick={() => {
				foo2(777)
			}}>2
			</button>
			<Button value={"A"} callBack={() => button1foo("Anna", 22)}/>
			<Button value={"B"} callBack={() => {
				button2foo("Boris", 33, 'live in Minsk')
			}}/>
			<Button value={"Usual1"} callBack={usualButton1}/>
			<Button value={"Usual2"} callBack={() => {
				usualButton2("I am the usual button 2")
			}}/>
			<h1>{a}</h1>;
			<button onClick={onclickHandler}>+1</button>
			<button onClick={onclickZero}>0</button>
			<Filter money={money}/>
		</>
	);
}

export default App;
