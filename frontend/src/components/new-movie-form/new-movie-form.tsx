
import "./new-movie-form.css"
import { useState } from "react";
import axios from "axios";

function NewMovieForm() {
    

    const [formData, setFormData] = useState({
        title: "",
        genre: "",
        status: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "file" ? files![0] : value
        }));
    };

    const handleSubmit = () => {
        try{
            axios.post("http://localhost:5000/movies/", formData).then((response) => console.log(response));
        } catch (err) {
            console.log(err);
        }
    };


    return(
        <div className="suspended-form">
            
            <form onSubmit={handleSubmit}>
                <label>Título</label>
                <input name="title" onChange={handleChange} />
                <label>Gênero</label>
                <input name="genre" onChange={handleChange} />
                <label>Status</label>
                <select name="status" onChange={ (e) => {
                    const { name, value } = e.target;
                    setFormData((prev) => ({
                        ...prev,
                        [name]:  value == "disponivel" ? true : false
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