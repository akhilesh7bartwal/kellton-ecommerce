import './collection-item.style.scss'

const CollectionItem = ({item}) => {
    const{name, imageUrl, price}= item
    return(
        <>
                <div className='collection-item'>
                    <div
                     className='image'
                     style={{backgroundImage: `url(${imageUrl})`}}
                    />
                    <div>
                        <span className='name'>{name}</span>
                        <span className='price'>{price}</span>
                    </div>
                </div>
        </>
    )
}
export default CollectionItem