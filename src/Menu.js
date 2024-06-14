import React from 'react';

const Menu = ({items}) => {
  // const {id,title,category,price,desc} = items
  return <article className='setion-center'>
{
  items.map((item) =>{
   const {id,title,category,price,desc,img} = item;
   return <article className='menu-item' key={id}>
    <img className='photo' src={img}></img>
    <div className="item-info">
      <header>
        <h4>{title}</h4>
        <h4 className='price'>${price}</h4>
      </header>
        <p className='item-text'>{desc}</p>
    </div>
   </article>


  })
}

  </article>;
};

export default Menu;
