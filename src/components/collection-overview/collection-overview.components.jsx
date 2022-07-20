import './collection-overview.style.scss'
import React from 'react'
import { createStructuredSelector } from 'reselect'
 import { selectCollections } from '../../redux/shop/shop.slector';
import { connect } from 'react-redux'
import CollectionPreview from '../collection-preview/collection-preview';


const CollectionOverView = ({ collections }) => 
    (
    < div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
collections: selectCollections
}
  

);
export default connect(mapStateToProps)(CollectionOverView);
