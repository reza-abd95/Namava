



export default function MovieLogo({src,alt,onClick}) {
  return (
    
   <img 
   className='h-full w-full cursor-pointer'
          src={src}
          alt={alt}
          onClick={onClick}
        />
   
  )};