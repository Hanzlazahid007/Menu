import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const uniques = ['all',...new Set(items.map((item)=> item.category))];
// console.log(uniques);
function App() {
  const [menuItems,setMenuItems] = useState(items);
  const [categories,setCatogries] = useState(uniques);

  const filterItem = (catogry)=>{
    if(catogry==='all')
    {
      
    setMenuItems(items);
    return;
    }
    const newItem = items.filter((item)=> item.category===catogry);
    setMenuItems(newItem);
    
  }
  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterItem={filterItem} />
      <Menu items={menuItems} />
    </section>
  </main>;
}

export default App;
