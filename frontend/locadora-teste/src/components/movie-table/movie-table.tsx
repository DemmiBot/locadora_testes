import './movie-table.css'
import MovieTableRow from './movie-table-row'
import Movie from '../../models/movie';
import { useState, useEffect } from 'react';
import EditMovieForm from "../edit-movie-form/edit-movie-form";
import axios from 'axios';

function MovieTable() {
    const [isToggled, toggle] = useState(false);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null); // State to store the selected movie

    const openModal = (movie: Movie) => {
        setSelectedMovie(movie); // Set the movie that was clicked
        toggle(true); // Open the modal
    };

    useEffect(() => {
        axios
            .get("http://localhost:3000/movies")
            .then((response) => {
                setMovies(response.data);
                console.log(response.data);
            })
            .catch((error) => console.error("Error: ", error));
    }, []);

    return (
        <>
            <EditMovieForm
                openModal={isToggled}
                closeModal={() => toggle(false)}
                movie={selectedMovie!} // Pass selected movie here
                submitMovie={(updatedMovie: Movie) => {
                    // Handle movie submission (you might want to update the movie in the backend here)
                    console.log(updatedMovie);
                    toggle(false); // Close the modal after submission
                }}
            />
            <table>
                <thead>
                    <tr>
                        <th scope="col" style={{ width: "10%" }}>
                            Id
                        </th>
                        <th scope="col">Título</th>
                        <th scope="col" style={{ width: "12%" }}>
                            Gênero
                        </th>
                        <th scope="col" style={{ width: "10%" }}>
                            Status
                        </th>
                        <th scope="col" style={{ width: "14%" }}></th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <MovieTableRow
                            key={"" + movie.id}
                            id={"" + movie.id}
                            title={movie.title}
                            genre={movie.genre}
                            status={movie.status === true ? "Disponível" : "Alugado"}
                            openModal={() => openModal(movie)} // Pass movie data on click
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
}



export default MovieTable