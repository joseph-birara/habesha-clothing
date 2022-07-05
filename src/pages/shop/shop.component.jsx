import React from "react";
import Shop_Data from "./shop.data";
import CollectionPreview from "../../components/preview-collaction/preview-collection.component"; 
class ShopPage extends React.Component{
    constructor(props) {
        super();
        this.state = {
            collactions: Shop_Data

        };
    }
    render() {
        const { collactions } = this.state;
        return (
            <div className="shop-page">
                {
                    collactions.map(({ id, ...otherCollectionprops }) =>
                    (
                        <CollectionPreview key={id} {...otherCollectionprops}/>
                    ))

                }

        </div>);
    }
}
export default ShopPage;