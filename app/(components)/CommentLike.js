import React from 'react';
export default function CommentLike ({like , showFirstSvg2})  {
    return (
        <div>
            {showFirstSvg2 ? (
                <div className="flex justify-center items-center">
                    <svg className="w-[30px] h-[30px] tab:w-[35px] tab:h-[35px]"  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="white" d="M8.035 1.923c.21-.52.795-1.08 1.546-.871c.59.164.973.52 1.193.996c.204.443.254.965.264 1.462c.01.535-.102 1.176-.233 1.738a14.53 14.53 0 0 1-.195.74h1.385a2 2 0 0 1 1.919 2.563l-1.364 4.646a2.5 2.5 0 0 1-3.148 1.681l-5.356-1.682a2 2 0 0 1-1.273-1.205l-.52-1.384a2 2 0 0 1 .856-2.426l1.872-1.104a4.063 4.063 0 0 0 .523-.495c.344-.389.817-1.036 1.292-2.045c.205-.436.377-.779.533-1.09c.253-.503.465-.924.706-1.524ZM5.519 7.92a.517.517 0 0 1-.017.01L3.617 9.042a1 1 0 0 0-.428 1.213l.52 1.384a1 1 0 0 0 .637.603L9.7 13.924a1.5 1.5 0 0 0 1.89-1.008l1.363-4.646a1 1 0 0 0-.96-1.282H9.927a.5.5 0 0 1-.471-.667c.1-.282.252-.771.376-1.302c.126-.538.215-1.082.207-1.49c-.01-.468-.059-.816-.173-1.062c-.098-.215-.251-.368-.552-.452c-.043-.012-.094-.008-.16.035a.538.538 0 0 0-.19.246a20.426 20.426 0 0 1-.765 1.651c-.155.309-.318.634-.497 1.015c-.514 1.094-1.04 1.822-1.45 2.283c-.204.23-.378.393-.506.502a2.922 2.922 0 0 1-.202.157l-.016.01l-.005.004l-.003.002Zm-.543-.84l-.001.001Z"/></svg>
                    <p className="pr-[10px]">{like}</p>
                </div>

            ) : (
                <div className="flex justify-center items-center">
                    <svg className="w-[30px] h-[30px] tab:w-[35px] tab:h-[35px] animate-animName animation-fill-forwards"  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="white" d="M9.58 1.052c-.75-.209-1.336.35-1.545.871c-.24.6-.453 1.021-.706 1.524a44.75 44.75 0 0 0-.533 1.09c-.475 1.01-.948 1.656-1.293 2.045a4.063 4.063 0 0 1-.405.402a1.92 1.92 0 0 1-.101.081l-.016.012L3.109 8.18a2 2 0 0 0-.856 2.426l.52 1.384a2 2 0 0 0 1.273 1.205l5.356 1.682a2.5 2.5 0 0 0 3.148-1.68l1.364-4.647a2 2 0 0 0-1.92-2.563H10.61c.066-.227.133-.479.195-.74c.131-.562.243-1.203.232-1.738c-.009-.497-.06-1.019-.264-1.462c-.219-.475-.602-.832-1.192-.996ZM4.978 7.08l-.002.001Z"/></svg>
                    <p className="pr-[10px]">{like + 1}</p>
                </div>
            )}
        </div>


    );
};
