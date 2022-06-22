function titleMaker(title) {
  const result = title.length > 50 ? title.slice(0,51) + '...' : title;
  return result;
}

function priceMaker(code, price) {
  const result = code === 'USD' || code === 'EUR' ? code + price : price + ' ' + code;
  return result;
}

function quantityMaker(quantity) {
  const className = quantity < 11 ? 'level-low' : quantity > 10 && quantity < 21 ? 'level-medium' : 'level-high';
  return className;
}

export { titleMaker, priceMaker, quantityMaker };