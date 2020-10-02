import React from 'react';

const Searchbox =({searchfield, searchChange}) => {
    return (
        <div className='p2'>
         <input
            className='p3 ba b--green bg-lighest-blue'
            type ='search' 
            placeholder='search robots'
            onChange={searchChange}
         />
         </div>
    );
}

export default Searchbox;