import { Link } from 'react-router-dom'
import './menu-item.style.scss'
const MenuItem= ({menu}) => {
    return (
        <>
                <div className='menu-item'>
                    <div
                        className='background-image'
                        style={{
                            backgroundImage: `url(${menu.imageUrl})`
                        }                          
                        }
                    />
                    <div className='content'>
                        <Link to={`/category/${menu.title}`}>
                            <div className='title'>{menu.title.toUpperCase()}</div>
                            <div className='subtitle'>SHOP NOW</div>
                        </Link>
                    </div>
                </div>

        </>
    )
}

export default MenuItem