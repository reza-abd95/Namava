import CategorySlider from '../(components)/CategorySlider'
import FilmCrewSlider from '../(components)/FilmCrewSlider'
import MovieSlider from '../(components)/MovieSlider'
import TitleOfCategorySlider from '../(components)/TitleOfCategorySlider';
import MainSlider from '../(components)/mainSlider/MainSlider'
import { getActorData,getMoviesData} from '../utils/getdata';



export default async function Movies() {

  const movieData = await getMoviesData()
  const movie = movieData.record
  const actorData= await getActorData();
  const actor = actorData.record
  return (
  
        <div>
          
            <MainSlider movieData={movie} actors={actor} subject={'homePath'}/>
            <TitleOfCategorySlider title={"فیلم ها"} link={"/movies"}/>
            <MovieSlider data={movie}/>
            <FilmCrewSlider data={actor}/>
            
        </div>
  )
}
