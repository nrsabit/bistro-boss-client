import React from 'react';

const SharedMenu = ({item}) => {
    const {image, name, recipe, price} = item
    return (
        <div className='md:flex gap-4'>
            <img className='w-28 h-24' style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <p className='uppercase mb-2 text-[#151515] font-semibold'>{name} ------------</p>
                <p className='text-sm text-[#737373]'>{recipe}</p>
            </div>
            <p className='text-[#d99904]'>${price}</p>
        </div>
    );
};

export default SharedMenu;