import React from 'react';
import offers from './offers';
import { titleMaker, priceMaker, quantityMaker } from './funcs';

export default function Listing({ items }) {
	const resultArr = offers.map(offer => {
    if (offer.state !== 'active') {
      return
    }
  	const title = titleMaker(offer.title);
  	const price = priceMaker(offer.currency_code, offer.price);
    const quantityClass = quantityMaker(offer.quantity);
    const quantityText = offer.quantity + ' left';
    const tag = <div className="item" key={offer.listing_id}>
      <div className="item-image">
        <a href={offer.url}>
          <img src={offer.MainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{price}</p>
        <p className='item-quantity ${quantityClass}' >{quantityText}</p>
      </div>
    </div>
    resultArr.push(tag)
  });

  return(
  	<div className='item-list'>{resultArr}</div>
  	)
}

