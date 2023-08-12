
import MovieSlider from "@/app/(components)/MovieSlider";
import MainSlider from "@/app/(components)/mainSlider/MainSlider";
import {getActorData, getCategoriesData, getMoviesData} from "@/app/utils/getdata";
import Description from "@/app/(components)/Description";
import TitleOfCategorySlider from "@/app/(components)/TitleOfCategorySlider";
export async function generateMetadata({params}) {
    const categoryData = await getCategoriesData();
    const categories = categoryData.record;
    const catId = params.categoryId;
    const category = categories.find((category)=>{
      return category.id == catId ;
    })
    return {
      title: category.name,
      description : category.description
    }
  }

export default async function CategoryId({params}) {

    const movies = await getMoviesData();
    const movie = movies.record;
    const category = await getCategoriesData();
    const categories = category.record;
    const categoryId = params.categoryId;
    const describe = categories.find(item => item.id == categoryId).description;
    const actorData= await getActorData();
    const actor = actorData.record;
    const categoryName = categories.find((category)=>{
        return category.id == categoryId
    })
    const categorymovie = movie.filter((movie)=>{
        return movie.categoryId == categoryId
      })

    return (
        <div>
            
            <MainSlider categoryId={categoryId}  movieData={movie} actors={actor} subject={"categoryPath"}/>
           
            <TitleOfCategorySlider title={categoryName.name} link={"#"}/>
            <MovieSlider data= {categorymovie}/>
            <Description describe={describe}/>

        </div>
    ); }

