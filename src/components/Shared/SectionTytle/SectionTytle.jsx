import React from 'react';

const SectionTytle = ({heading, subHeading}) => {
    return (
        <div className='md:w-6/12 text-center mx-auto mb-12'>
            <p className='text-[#d99904] mb-2 italic'>--- {subHeading} ---</p>
            <h4 className='text-3xl uppercase border-y-4 py-4 font-semibold'>{heading}</h4>
        </div>
    );
};

export default SectionTytle;