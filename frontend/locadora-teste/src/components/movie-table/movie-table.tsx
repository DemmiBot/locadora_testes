import './movie-table.css'

function MovieTable() {
    return(
    <table>
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Título</th>
                <th scope="col">Gênero</th>
                <th scope="col">Ano de lançamento</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href='#blank'>100002</a></td>
                <td>100002100002</td>
                <td>Gen</td>
                <td>Ano</td>
                <td>Status</td>
                <td>b</td>
            </tr>
            <tr>
                <td>Id</td>
                <td>Tit</td>
                <td>Gen</td>
                <td>Ano</td>
                <td>Status</td>
                <td>b</td>
            </tr>
        </tbody>
    </table>
    )
}

export default MovieTable