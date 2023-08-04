import DoSearchMsg from "../(components)/DoSearchMsg";
import MovieForSlider from "../(components)/MovieForSlider";
import NotFoundSearch from "../(components)/NotFoundSearch";
import SearchArea from "../(components)/SearchArea";

export default function Search() {
    return (
        <div className="min-h-[710px] pb-20">
            <div className=' pt-20'></div>

            <SearchArea/>

            <div className={"block"}>
                <DoSearchMsg/>
            </div>

            <div className={"block"}>
                <NotFoundSearch/>
            </div>



            <div className=" text-white w-full mt-[48px] px-6 ml:px-7 des:px-10 flex flex-wrap  items-center ">

               
                <div className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                    <MovieForSlider/>
                </div> 
               
                <div className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                    <MovieForSlider/>
                </div> 
               
                <div className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                    <MovieForSlider/>
                </div> 
               
                <div className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                    <MovieForSlider/>
                </div> 
               
                <div className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                    <MovieForSlider/>
                </div> 
                
               
                <div className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                    <MovieForSlider/>
                </div> 
                
               
                <div className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                    <MovieForSlider/>
                </div> 
                
               
                <div className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                    <MovieForSlider/>
                </div> 
                
               
                <div className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                    <MovieForSlider/>
                </div> 
                
               
                <div className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                    <MovieForSlider/>
                </div> 
                
                <div className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                    <MovieForSlider/>
                </div> 
                
                <div className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                    <MovieForSlider/>
                </div> 
                
                <div className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                    <MovieForSlider/>
                </div> 
                
                
               
                
            </div>


        </div>
    )
}
