import React, { useState } from 'react';


export default function WishlistButton() {
  const [isWishlist, setIsWishlist] = useState(false);
  const [userMessage, setUserMessage] = useState('');

  const [hoverText, setHoverText] = useState('لیست من');
  const handleAddClick = () => {
    setIsWishlist(!isWishlist);
    const updatedMessage = isWishlist
      ? (<div className='flex h-12 items-center justify-around flow-row transition-opacity '>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="green" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>       
 به لیست من اضافه شد

        </div>
        )
      : (<div className='flex h-12 items-center justify-around flow-row transition-opacity'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="green" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>      
 از لیست من حذف شد
        </div>
        );
      const updatehoverText = isWishlist
      ? 'حذف کردن از لیست من'
      : 'افزوردن به لیست من';
    
    setUserMessage(updatedMessage);
    setTimeout(() => {
      setUserMessage('');
    }, 2000); 

    setHoverText(updatehoverText);

  };
 
  return (
    <div className='text-black relative'>
      <div 
      className="text-[20px] relative tooltip flex  items-center justify-center cursor-pointer bg-[#414141] opacity-[70%] hover:opacity-[100%] hover:bg-[#6e6e6e] w-[42px] h-[42px] rounded-full"
       onClick={handleAddClick}>
        <div className=" flex items-center justify-center absolute top-[53px] right-[-56px] tooltip_text text-[15px] invisible opacity-0 rounded-[4px] h-[48px] w-[150px] left-1 bg-white text-black transition-opacity duration-1000">
        {hoverText}
        </div>
        {isWishlist ?         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M11.883 3.007L12 3a1 1 0 0 1 .993.883L13 4v7h7a1 1 0 0 1 .993.883L21 12a1 1 0 0 1-.883.993L20 13h-7v7a1 1 0 0 1-.883.993L12 21a1 1 0 0 1-.993-.883L11 20v-7H4a1 1 0 0 1-.993-.883L3 12a1 1 0 0 1 .883-.993L4 11h7V4a1 1 0 0 1 .883-.993L12 3l-.117.007Z"/></svg>

         :     
          
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"/></svg>

         }
      </div>
      <div className='bg-white fixed left-[42%] rounded-md top-[120px] w-[190px]'>{userMessage}</div>
    </div>
  );
}