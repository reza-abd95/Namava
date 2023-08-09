import CategorySlider from './(components)/CategorySlider'
import FilmCrewSlider from './(components)/FilmCrewSlider'
import MovieSlider from './(components)/MovieSlider'
import MainSlider from './(components)/mainSlider/MainSlider'
import MovieHeader from './(components)/movieCover/MovieHeader';
import { getActorData, getHomeSliderData ,getMoviesData} from './utils/getdata';



export default async function Home() {
  const mainSlider= await getMoviesData();
  const actor = await getActorData();
  const mainSliders = mainSlider.record;
  const slider = await getHomeSliderData();
  const sliders = slider.record;
  const actors = actor.record;

  return (
  
        <div>
          
            <MainSlider movieData={mainSliders} actors={actors} subject={'homePath'}/>
            <CategorySlider data={sliders} /> 
            <MovieSlider/>
            <FilmCrewSlider/>
            
        </div>
  )
}
