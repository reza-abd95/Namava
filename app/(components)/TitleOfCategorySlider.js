import Link from "next/link";

export default function TitleOfCategorySlider({title , link}) {
  return (
  <div className="group text-white w-80 ">
    <Link href={link} className=" flex items-center" >

      <div className="hover-item cursor-pointer">
        <p className="text-white text-right mr-14 text-lg">{title}</p>
      </div>

      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex mr-5 text-xs justify-center items-center">
        <span className="mr-1">مشاهده همه</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="25"
          viewBox="10 0 20 40"
          className="p-0 m-0 fill-white"
        >
          <path
            className=""
            d="M14.77 18.793c0-.493.196-.967.545-1.315l6.2-6.2a1.86 1.86 0 0 1 2.626 2.633l-4.88 4.882 4.88 4.88a1.86 1.86 0 0 1-2.63 2.63l-6.2-6.2c-.347-.348-.54-.82-.54-1.31z"
          ></path>
        </svg>
      </div>
    </Link>
  </div>


  )
}
