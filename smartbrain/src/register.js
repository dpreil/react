import React from 'react';

class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email:'',
			password:'',
			passwordCheck:''
		}
	}

	render(){
	//	console.log(this.state);
		const {submitName, submitEmail, submitPassword, submitPasswordCheck, click} = this.props;
		const {name, email, password, passwordCheck} = this.props;
		return(
			<form className='signInForm f1 shadow-3'>
				<span className="mt3 mb4">Please Register</span>
				<input
					className='f4 ba w-80 mb2'
					type='text'
					value= {name}
					placeholder='Name'
					onChange = {submitName}
					/>
				<input
					className='f4 ba w-80 mb2'
					type='text'
					value= {email}
					placeholder='email'
					onChange = {submitEmail}
					/>
				<input
					className='f4 ba w-80 mb2'
					type='password'
					value = {password}
					placeholder='password'
					onChange = {submitPassword}
					/>
				<input
					className='f4 ba w-80 mb3'
					type='password'
					value = {passwordCheck}
					placeholder='please retype your password'
					onChange = {submitPasswordCheck}
					/>
				<input className = 'f4 mb3' type='submit' value='Register' onClick={click}/>
			</form>
		)
	}
}


//{email, password, passwordCheck, submitEmail, submitPassword, submitPasswordCheck, click}
export default Register;

