import './movie-table.css'
import MovieTableRow from './movie-table-row'

function MovieTable() {

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col" style={{ width: "10%" }}>Id</th>
                    <th scope="col" >Título</th>
                    <th scope="col" style={{ width: "12%" }}>Gênero</th>
                    <th scope="col" style={{ width: "14%" }}>Ano de lançamento</th>
                    <th scope="col" style={{ width: "10%" }}>Status</th>
                    <th scope="col" style={{ width: "14%" }}></th>
                </tr>
            </thead>
            <tbody>
                <MovieTableRow id='1' title='Titulo Teste de filme' genre='Comedia' launch_year='1986' status='alugado' />
                <MovieTableRow id='1' title='Titulo Teste de filme' genre='Comedia' launch_year='1986' status='alugado' />
                <MovieTableRow id='1' title='Titulo Teste de filme' genre='Comedia' launch_year='1986' status='alugado' />
            </tbody>
        </table>
    )
}



export default MovieTable