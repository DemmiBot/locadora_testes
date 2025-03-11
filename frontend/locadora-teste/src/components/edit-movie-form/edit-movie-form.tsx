import { useEffect, useState ,useRef } from "react";
import "./edit-movie-form.css";
import Movie from "../../models/movie";

function EditMovieForm({
    openModal,
    closeModal,
    movie,
    submitMovie,
  }: {
    openModal: boolean;
    closeModal: Function;
    movie: Movie | null;  // Allow movie to be null initially
    submitMovie: (updatedMovie: Movie) => void;
  }) {
    const ref = useRef<HTMLDialogElement>(null);
  
    // Initialize form values with movie data if movie is available
    const [formData, setFormData] = useState({
      title: movie?.title || "",  // Default to empty if movie is null
      genre: movie?.genre || "",
      status: movie?.status || false,  // Default to false if movie is null
    });
  
    // Update form data if movie changes
    useEffect(() => {
      if (movie) {
        setFormData({
          title: movie.title,
          genre: movie.genre,
          status: movie.status,
        });
      }
    }, [movie]);
  
    useEffect(() => {
      if (ref.current == null) return;
      if (openModal === true) {
        ref.current.showModal();
      } else {
        ref.current.close();
      }
    }, [openModal]);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    };
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
  
      // Ensure movie data exists before submitting
      if (!movie) return;  // Don't proceed if movie is not available
  
      const updatedMovie: Movie = {
        ...movie,
        ...formData, // Use the updated formData
      };
  
      submitMovie(updatedMovie);
      closeModal();
    };
  
    // Ensure movie is available before rendering the form
    if (!movie) return null;
  
    return (
      <dialog className="suspended-form" open={false} ref={ref} onCancel={() => closeModal()}>
        <p style={{ fontWeight: "bold", textAlign: "center", padding: "20px" }}>Atualizar Cadastro</p>
        <form onSubmit={handleSubmit}>
          <label>
            Título
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Gênero
            <input
              name="genre"
              value={formData.genre}
              onChange={handleChange}
            />
          </label>
          <label>
            Status
            <input
              type="checkbox"
              name="status"
              checked={formData.status}
              onChange={handleChange}
            />
          </label>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Atualizar</button>
          </div>
        </form>
      </dialog>
    );
  }

export default EditMovieForm