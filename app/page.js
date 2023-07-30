import CategorySlider from './(components)/CategorySlider'
import FilmCrewSlider from './(components)/FilmCrewSlider'
import MovieSlider from './(components)/MovieSlider'

export default function Home() {
  return (
        <div>
            <CategorySlider/> 
            <MovieSlider/>
            <FilmCrewSlider/>
        </div>
  )
}
