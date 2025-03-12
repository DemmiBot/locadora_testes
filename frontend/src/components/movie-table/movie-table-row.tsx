
function MovieTableRow({
    id,
    title,
    genre,
    status,
    openModal,
    deleteMovie
  }: {
    id: string;
    title: string;
    genre: string;
    status: string;
    openModal: () => void;
    deleteMovie: (id:number) => void;
  }) {
    return (
      <tr>
        <td onClick={openModal}>{id}</td>
        <td onClick={openModal}>{title}</td>
        <td>{genre}</td>
        <td>{status}</td>
        <td>
          <a style={{color:"red", cursor:"pointer"}} onClick={() => deleteMovie(Number(id))}>Excluir</a>
        </td>
      </tr>
    );
  }

export default MovieTableRow