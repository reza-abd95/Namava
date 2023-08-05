// import React from 'react';

// export default function Add ({ showFirstSvg })  {
//   return (
//     <div>
//       {showFirstSvg ? (
//         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M11.883 3.007L12 3a1 1 0 0 1 .993.883L13 4v7h7a1 1 0 0 1 .993.883L21 12a1 1 0 0 1-.883.993L20 13h-7v7a1 1 0 0 1-.883.993L12 21a1 1 0 0 1-.993-.883L11 20v-7H4a1 1 0 0 1-.993-.883L3 12a1 1 0 0 1 .883-.993L4 11h7V4a1 1 0 0 1 .883-.993L12 3l-.117.007Z"/></svg>
      
//         ) : (
//         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"/></svg>
//       )}
//     </div>
//   );
// };

import React, { useState } from 'react';

export default function WishlistButton() {
  const [isWishlist, setIsWishlist] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [hoverText, setHoverText] = useState('');
  const handleClick = () => {
    setIsWishlist(!isWishlist);
    const updatedMessage = isWishlist
      ? 'This item is added to your wishlist!'
      : 'Add this item to your wishlist by clicking the button!';
      const updatehoverText = isWishlist
      ? 'افزودن'
      : 'حذف کردن';
    setUserMessage(updatedMessage);
    setTimeout(() => {
      setUserMessage('');
    }, 3000); // 2 seconds

    setHoverText(updatehoverText);

  };
 
  return (
    <div className='bg-black text-white'>
      <button onClick={handleClick}>
        {isWishlist ?         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M11.883 3.007L12 3a1 1 0 0 1 .993.883L13 4v7h7a1 1 0 0 1 .993.883L21 12a1 1 0 0 1-.883.993L20 13h-7v7a1 1 0 0 1-.883.993L12 21a1 1 0 0 1-.993-.883L11 20v-7H4a1 1 0 0 1-.993-.883L3 12a1 1 0 0 1 .883-.993L4 11h7V4a1 1 0 0 1 .883-.993L12 3l-.117.007Z"/></svg>

         :         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"/></svg>

         }
      </button>
      <div>{userMessage}</div>
      <div>{hoverText}</div>
    </div>
  );
}