import Directory from '../../component/directory/directory.component'
import React from 'react'
import './homepage.style.scss'

import {connect} from 'react-redux'

//class HomePage extends React.Component 
const HomePage = ({sections}) => {
    
    return (
        <>
        <div className='homepage'>
            <h1>Welcome to my Homepage</h1>
            <Directory sections ={sections}/>           
        </div>
        </>
    )

}

const mapStateToProps = (state) => ({
    sections: state.directory.sections
})
    
export default connect(mapStateToProps,null)(HomePage)