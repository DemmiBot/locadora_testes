import { useState } from "react"
import "./new-movie-form.css"
import EditMovieForm from "../edit-movie-form/edit-movie-form"

function NewMovieForm() {
    let [isToggled, toggle] = useState(false)

    return(
        <div className="suspended-form">
            {EditMovieForm(isToggled, () => toggle(false))}
            <form>
                <label>Título</label>
                <input name="titulo" />
                <label>Gênero</label>
                <input name="genero" />
                <label>Ano de lançamento</label>
                <input name="lancamento " />
                <label>Status</label>
                <input name="status" />
                <label htmlFor="thumbnail">Thumbnail</label>
                <input className="thumbnail" name="thumbnail" type="file" accept=".jpg, .png"/>
                <button type="submit" onClick={(e) =>{
                    e.preventDefault();
                    toggle(true);
                }}>Adicionar</button>
            </form>
        </div>
    )
}

export default NewMovieForm