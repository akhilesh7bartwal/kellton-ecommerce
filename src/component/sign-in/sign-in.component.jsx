import FormInput from '../form-input/form-input.component'

import './sign-in.style.scss'
import React from 'react'
import CustomButton from '../custom-button/custom-button.component'

import firebase from 'firebase'

class SignIn extends React.Component{
constructor(){
    super()
    this.state={
        name:'',
        password:''
    }
}

handleChange = (event)=>{
    const {name,value}=event.target
    //console.log(`${name} => {value}`)
    this.setState({[name]:value})
}

  render(){
        return(
            <>
                <div className='sign-in'>
                    <h2>I already have an account</h2>
                    <span>
                        Sign in with your email and password
                    </span>
                    <form>
                        <FormInput 
                            name='email'
                            placeholder='email'
                            type='email'
                            onChange={this.handleChange}
                        />
                        <FormInput 
                            name='password'
                            placeholder='password'
                            type='password'
                            onChange={this.handleChange}
                        />
                        <CustomButton
                            type='submit'>
                            Sign in
                        </CustomButton>
                    </form>
                </div>
            </>
        )
    }
}
export default SignIn