import React, { useEffect, useState } from 'react';
import SectionTytle from '../../../Shared/SectionTytle/SectionTytle';
import SharedMenu from '../../../Shared/SharedMenu/SharedMenu';

const MenuItems = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menues.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    }, [])
    return (
        <section className='mb-16'>
            <SectionTytle
            heading="From Our Menu"
            subHeading="Check it Out"
            ></SectionTytle>
            <div className='grid md:grid-cols-2 gap-6 p-8 md:p-0'>
                {menu.map(item => <SharedMenu key={item._id} item={item}></SharedMenu>)}
            </div>
        </section>
    );
};

export default MenuItems;