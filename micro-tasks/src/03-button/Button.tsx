import React from "react";
type ButtonType={
	value:string;
	callBack: ()=>void;
}
export const Button =(props:ButtonType)=>{
	const onClickHandler =()=>{
		props.callBack();
	}
	return(
		<button onClick={onClickHandler}>{props.value}</button>
	);
}