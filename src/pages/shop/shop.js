import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import Previewcollection from '../../components/preview-collection/previewcollection';

class shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <Previewcollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default shop;
