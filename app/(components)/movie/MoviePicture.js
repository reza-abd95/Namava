import Image from "next/image"

export default  function MoviePicture({index,handleOnClick,image,movieName}) {

    return (
        <div key={index+1} className="MoviePictures__pictureHolder"> <Image width={200} height={150} onClick={handleOnClick} alt={`${movieName}-${index}`} id={index+1} className="MoviePictures__pictureStyle" src={"https://static.namava.ir/Content/Upload/Images/" + image}/> </div>
    )
}