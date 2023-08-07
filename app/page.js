import CategorySlider from './(components)/CategorySlider'
import FilmCrewSlider from './(components)/FilmCrewSlider'
import MovieSlider from './(components)/MovieSlider'
import MainSlider from './(components)/mainSlider/MainSlider'
import { getHomeSliderData } from './utils/getdata';



export default async function Home() {
  const slider = await getHomeSliderData();
  const sliders = slider.record

  return (
        

        <div>
            <MainSlider/>
            <CategorySlider data={sliders} /> 
            <MovieSlider/>
            <FilmCrewSlider/>
            
        </div>
  )
}
