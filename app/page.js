import CategorySlider from './(components)/CategorySlider'
import FilmCrewSlider from './(components)/FilmCrewSlider'
import MovieSlider from './(components)/MovieSlider'
import MainSlider from './(components)/mainSlider/MainSlider'
import { getActorData, getHomeSliderData, getMoviesData } from './utils/getdata';



export default async function Home() {
  const sliderData = await getHomeSliderData();
  const slider = sliderData.record
  const movieData = await getMoviesData()
  const movie = movieData.record
  const actorData= await getActorData();
  const actor = actorData.record
  return (
        

        <div>
            <MainSlider/>
            <CategorySlider data={slider}/> 
            <p className=" text-white text-right mr-14 text-lg "> فیلم ها</p>
            <MovieSlider data={movie}/>
            <FilmCrewSlider data={actor}/>
            
        </div>
  )
}
