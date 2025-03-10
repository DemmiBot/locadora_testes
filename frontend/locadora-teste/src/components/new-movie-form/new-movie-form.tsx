
import "./new-movie-form.css"
import { useState } from "react";

function NewMovieForm() {
    

    const [formData, setFormData] = useState({
        titulo: "",
        genero: "",
        status: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "file" ? files![0] : value
        }));
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };


    return(
        <div className="suspended-form">
            
            <form onSubmit={handleSubmit}>
                <label>Título</label>
                <input name="titulo" onChange={handleChange} />
                <label>Gênero</label>
                <input name="genero" onChange={handleChange} />
                <label>Ano de lançamento</label>
                <input name="lancamento" onChange={handleChange} />
                <label>Status</label>
                <select name="status" onChange={ (e) => {
                    const { name, value } = e.target;
                    setFormData((prev) => ({
                        ...prev,
                        [name]:  value
                    }));
                }}>
                <option value={"alugado"}>Alugado</option>
                <option value={"disponivel"}>Disponivel</option>
                </select>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}

export default NewMovieForm