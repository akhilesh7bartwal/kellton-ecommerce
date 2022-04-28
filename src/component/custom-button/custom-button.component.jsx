// import './custom-button.style.scss'

// const CustomButton = ({childern,...otherProps}) =>{
//     <button 
//     {...otherProps} 
//     className='custom-button'
//     >
//         {childern}
//     </button>
// }
// export default CustomButton

import './custom-button.style.scss'


const CustomButton = ({children,...otherProps})=>(
    <button
   {...otherProps}
   className='custom-button'
    >
        {children}
    </button>
)

export default CustomButton