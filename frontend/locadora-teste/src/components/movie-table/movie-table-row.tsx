import { useState } from "react";
import EditMovieForm from "../edit-movie-form/edit-movie-form"

function MovieTableRow({ id, title, genre, launch_year, status }: { id: string, title: string, genre: string, launch_year: string, status: string }) {
    let [isToggled, toggle] = useState(false)
    
    let openModal = (e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        toggle(true);
    }
    
    return (
        <tr>
            { EditMovieForm(isToggled, () => toggle(false)) }
            <td><a href='#blank' onClick={(e) => openModal(e)}>{id}</a></td>
            <td><a href='#blank' onClick={(e) => openModal(e)}>{title}</a></td>
            <td>{genre}</td>
            <td>{launch_year}</td>
            <td>{status}</td>
            <td className='exclude-td'><a href='#blank'>Excluir</a></td>
        </tr>
    )
}

export default MovieTableRow