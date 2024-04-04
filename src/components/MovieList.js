import { MOVIES } from "../Data Set/DATA"
export default function MovieList(){
    return(
        <div className="movie-container">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {MOVIES.map((movie)=>{
                        return(
                            <tr key={movie.title}>
                                <td>{movie.title}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.year}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}