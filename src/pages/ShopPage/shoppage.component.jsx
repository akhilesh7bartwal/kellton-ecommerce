import './shoppage.style.scss'

import CollectionPreview from '../../component/collection-preview/collection-preview.component.jsx'
import React from 'react'

import {connect} from 'react-redux'

const ShopPage =({collections}) => {

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
const mapStateToProps= (state) => ({
    collection: state.collection.collections
})

export default connect(mapStateToProps,null)(ShopPage)