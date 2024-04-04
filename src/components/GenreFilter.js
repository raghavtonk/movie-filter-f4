import { GENRES } from "../Data Set/DATA"
import Button from "./Button"
export default function GenreFilter(){
    return(
        <div className="filter-container">
           
        <div>
        <h2>Filter by Genre</h2>
        </div>
            <div className="button-container">
                {GENRES.map((genre)=>{
                    return(
                        <Button key={genre}>{genre}</Button>
                    )
                })}
            </div>
        </div>
    )
}