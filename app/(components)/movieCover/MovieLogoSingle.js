



export default function MovieLogoSingle({logoUrl , name}) {
    return (
      
     <img 
     className='h-full w-full'
            src={logoUrl}
            alt={name}
          />
     
    )};