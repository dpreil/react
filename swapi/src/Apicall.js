import React from 'react';

class Apicall extends React.Component {
	constructor() {
		super();
		this.state =  {
			data:[1,2,3]
		}
	}

	componentDidMount(){
			fetch("https://swapi.co/api/people")
			.then(resp => resp.json())
			.then(resp => {
				this.setState({data:resp.results});
			//	console.log(resp);
			})
	}

	render(){
	//	console.log(this.state.data);
	//	const a = this.state.data.map(a => console.log(a));
		//console.log(a);
		return(
			<div className='div1 f2 white'>
				<ul className = "list p10">
					{this.state.data.map((value, index) => {
						return <li key={index} className="listItem">{value.name}</li>
					})}
				</ul>
			</div>)
	}
}



export default Apicall;

