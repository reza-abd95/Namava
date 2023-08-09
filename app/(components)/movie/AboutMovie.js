

export default function AboutMovie({name , nameEn , story, otherCategorieName, langSubtitle, langDubbing}) {

    return (
        <div className="AboutMovie__container">
            <div className="AboutMovie__movieName">
            {nameEn}
            </div>
            <div>
                <div className="AboutMovie__title">
                {name}
                </div>
                <div className="AboutMovie__description">
                    <p className="AboutMovie__descriptionParagraph">{story}</p>
                </div>
            </div>
            <div className="AboutMovie__additionalDetails">
                <div className="AboutMovie__category"> دسته بندی: 
                    {otherCategorieName.map((categorieName)=>{
                        return categorieName + " , "
                    })}
                </div>
                <div className="AboutMovie__voice">
                    <span>صدا:</span>
                    {langDubbing.map((lang)=>{
                        return <span key={lang.id}> {lang.lang} </span>
                    })}
                    <span>{" - "}</span>
                    <span>زبان زیرنویس :</span>
                    {langSubtitle.map((lang)=>{
                        return <span key={lang.id}> {lang.lang} </span>
                    })}
                </div>
            </div>
        </div>
    )
}