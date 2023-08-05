import CategorySlider from './(components)/CategorySlider'
import FilmCrewSlider from './(components)/FilmCrewSlider'
import MovieSlider from './(components)/MovieSlider'
import MainSlider from './(components)/mainSlider/MainSlider'


export default function Home() {
  return (
        

        <div>
            <MainSlider/>
            <CategorySlider/> 
            <MovieSlider/>
            <FilmCrewSlider/>
            
        </div>
  )
}
