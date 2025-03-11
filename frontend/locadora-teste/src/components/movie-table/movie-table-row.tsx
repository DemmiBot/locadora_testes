

function MovieTableRow({
    id,
    title,
    genre,
    status,
    openModal,
  }: {
    id: string;
    title: string;
    genre: string;
    status: string;
    openModal: () => void;
  }) {
    return (
      <tr>
        <td onClick={openModal}>{id}</td>
        <td onClick={openModal}>{title}</td>
        <td>{genre}</td>
        <td>{status}</td>
        <td>
          <button onClick={openModal}>Edit</button>
        </td>
      </tr>
    );
  }

export default MovieTableRow