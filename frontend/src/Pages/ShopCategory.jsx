import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import dropdown from '../Components/Assets/dropdown_icon.png';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="indexsort" >
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by: <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopcategory-product">
       {all_product.map((item,i)=>{
        if (props.category===item.category) {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }
       })}
      </div>
      <div className="shopcategory-loadmore">
        Explore more...
      </div>
    </div>
  );
};

export default ShopCategory;