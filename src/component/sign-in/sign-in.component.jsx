import './sign-in.style.scss'
import React from 'react'

class SignIn extends React.Component{
constructor(){
    super()
    this.state={
        name:'',
        password:''
    }
}

handleChange = (event)=>{
    const {name}=event.target
    console.log(`${name} => {value}`)
   // this.setState({[name]:value})
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
                        <input 
                            name='email'
                            placeholder='email'
                            type='email'
                            onChange={this.handleChange}
                        />
                        <input 
                            name='password'
                            placeholder='password'
                            type='password'
                            onChange={this.handleChange}
                        />
                        <input 
                            type='submit'
                            value='submit Form'
                            />
                    </form>
                </div>
            </>
        )
    }
}
export default SignIn