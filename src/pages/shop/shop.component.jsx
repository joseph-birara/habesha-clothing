import React from 'react';
import { Route } from 'react-router-dom';


import CollectionPage from '../collection/collection.component.jsx';


 import CollectionOverView from '../../components/collection-overview/collection-overview.components';

const ShopPage = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverView} />
      <Route path={`${match.path}/:CollectionId`} component ={ CollectionPage}/>
    </div>

  )

};
  
  


  

  
     
export default ShopPage;
