
import MovieSlider from "@/app/(components)/MovieSlider";
import MainSlider from "@/app/(components)/mainSlider/MainSlider";
import {getCategoriesData, getMoviesData} from "@/app/utils/getdata";
import Description from "@/app/(components)/Description";

export default async function CategoryId({params}) {

    const movies = await getMoviesData();
    const movie = movies.record;
    const category = await getCategoriesData();
    const categories = category.record;
    const categoryId = params.categoryId;
    const describe = categories.find(item => item.id == categoryId).description;


    return (
        <div>
            <MainSlider categoryId={categoryId}  movieData={movie} subject={"categoryPath"}/>
            <Description describe={describe}/>

        </div>
    ); }

