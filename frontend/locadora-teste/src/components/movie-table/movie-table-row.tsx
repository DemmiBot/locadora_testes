

function MovieTableRow({ id, title, genre, status, openModal }: { id: string, title: string, genre: string, status: string, openModal:( n:number ) => void }) {
    
    return (
        <>
            <tr>
                <td><a href='#blank' onClick={() => openModal(Number(id))}>{id}</a></td>
                <td><a href='#blank' onClick={() => openModal(Number(id))}>{title}</a></td>
                <td>{genre}</td>
                <td>{status}</td>
                <td className='exclude-td'><a href='#blank'>Excluir</a></td>
            </tr>
        </>
    )
}

export default MovieTableRow