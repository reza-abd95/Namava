import Image from "next/image";



export default function MoviePicturs({images,isVisible,setIsVisible}) {
    const handleOnClick = (e) => {
        console.log(e.target)
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
                    return <div key={index+1} className="MoviePictures__pictureHolder"> <Image onClick={handleOnClick} id={index+1} className="MoviePictures__pictureStyle" src={image}/> </div>
                })
                }
            </div>
        </div>
    )
}