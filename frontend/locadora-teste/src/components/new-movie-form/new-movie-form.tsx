import "./new-movie-form.css"

function NewMovieForm() {
    return(
        <div className="suspended-form">
            <form>
                <label>Título</label>
                <input name="titulo" />
                <label>Gênero</label>
                <input name="genero" />
                <label>Ano de lançamento</label>
                <input name="lancamento " />
                <label>Status</label>
                <input name="status" />
                <label>Thumbnail</label>
                <input className="thumbnail" name="thumbnail" type="file"/>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}

export default NewMovieForm