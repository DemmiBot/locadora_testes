import './movie-table.css'
import MovieTableRow from './movie-table-row'
import { useState } from 'react';
import EditMovieForm from "../edit-movie-form/edit-movie-form"

function MovieTable() {

    let [isToggled, toggle] = useState(false)

    let openModal = (id:number) => {
        toggle(true);
    }


    return (
        <>
            <EditMovieForm openModal={isToggled} closeModal={() => toggle(false)} />
            <table>
                <thead>
                    <tr>
                        <th scope="col" style={{ width: "10%" }}>Id</th>
                        <th scope="col" >Título</th>
                        <th scope="col" style={{ width: "12%" }}>Gênero</th>
                        <th scope="col" style={{ width: "10%" }}>Status</th>
                        <th scope="col" style={{ width: "14%" }}></th>
                    </tr>
                </thead>
                <tbody>
                    <MovieTableRow id='1' title='Titulo Teste de filme' genre='Comedia' status='alugado' openModal={openModal}/>
                    <MovieTableRow id='1' title='Titulo Teste de filme' genre='Comedia' status='alugado' openModal={openModal}/>
                    <MovieTableRow id='1' title='Titulo Teste de filme' genre='Comedia' status='alugado' openModal={openModal}/>
                </tbody>
            </table>
        </>
    )
}



export default MovieTable