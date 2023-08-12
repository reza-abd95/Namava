'use client'
import Image from "next/image";



export default function MoviePicturs({images,isVisible,setIsVisible , movieName}) {
    const handleOnClick = (e) => {

        setIsVisible({...isVisible,['visible']: true,['imageId']: Number(e.target['id'])})
    }
    return (
        <div className="MoviePictures__container">
            <span className="MoviePictures__text">
                تصاویر و جزئیات
            </span>
            <div className="MoviePictures__box">    
                
                {
                images.map((image,index) => {
                    return <div key={index+1} className="MoviePictures__pictureHolder"> <Image width={200} height={150} onClick={handleOnClick} alt={`${movieName}-${index}`} id={index+1} className="MoviePictures__pictureStyle" src={"https://static.namava.ir/Content/Upload/Images/" + image}/> </div>
                })
                }
            </div>

        </div>
    )
}