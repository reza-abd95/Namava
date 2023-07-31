'use client'



export default function SearchArea () {

    return (
    <div className=" w-full px-6 ml:px-7 des:px-10 flex justify-between items-center ">
        <div className=" des:h-16 tab:h-12 h-11 bg-white w-full flex justify-between items-center rounded-lg px-4 ml-6" >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" ><path  d="M23.175 7.15a9.78 9.78 0 0 0-7.108-3.394q-.17-.006-.342-.006a9.9 9.9 0 0 0-6.979 2.883 9.85 9.85 0 0 0-1.483 12.046 1.84 1.84 0 0 1-.264 2.252l-3.68 3.68a1.1 1.1 0 0 0-.317.79.94.94 0 0 0 .288.68c.394.353.992.344 1.375-.02l3.73-3.732c.587-.595 1.505-.712 2.223-.283 1.54.93 3.303 1.42 5.1 1.418a9.88 9.88 0 0 0 7.418-3.358c3.24-3.706 3.256-9.23.04-12.956zm-1.44 11.56a7.89 7.89 0 0 1-12.022.002c-2.48-2.95-2.48-7.258 0-10.21a7.89 7.89 0 0 1 12.025-.001c2.48 2.952 2.477 7.258-.003 10.208z"></path></svg>                    
            <input className=" h-full mx-2 bg-transparent text-black placeholder:text-black w-full text-xs des:text-sm border-0 outline-0 " placeholder="جستجوی فیلم"/>

        </div>
        <div className=" text-white flex justify-between items-center align-middle ">
            <svg className="fill-white pl-2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><path  d="M16.4 14.85l-4.488-4.488L16.4 5.874a1.1 1.1 0 0 0 0-1.552 1.1 1.1 0 0 0-1.552 0L10.36 8.8 5.873 4.322a1.1 1.1 0 0 0-1.552 0 1.1 1.1 0 0 0 0 1.552l4.488 4.488L4.32 14.85a1.1 1.1 0 0 0 0 1.552 1.1 1.1 0 0 0 1.552 0l4.488-4.488 4.488 4.488a1.1 1.1 0 0 0 1.552 0 1.1 1.1 0 0 0 0-1.552z"></path></svg>
            <span className=" text-sm">بستن</span>
        </div>
    </div>

    )
}

