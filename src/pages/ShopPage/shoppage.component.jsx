import './shoppage.style.scss'

import CollectionPreview from '../../component/collection-preview/collection-preview.component.jsx'
import React from 'react'
import SHOP_DATA from './shop.data'

class ShopPage extends React.Component {
    constructor(){
        super()
        this.state={
            collections:SHOP_DATA
        }
    }
    render(){
        const{collections} = this.state
        return (
            <>
            {
                collections.map(
                    collection => <CollectionPreview key={collection.id} collection = {collection}/>
                 )
            }

            </>
        )
    }

}
export default ShopPage