import { useEffect, useRef } from "react";
import "./edit-movie-form.css"


function EditMovieForm({openModal, closeModal} :{openModal: boolean, closeModal: Function}) {

    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (ref.current == null)
            return
        if (openModal == true) {
            ref.current.showModal();
        } else {
            ref.current.close();
        }
    }, [openModal]);


    return (
        <dialog className="suspended-form" open={false} ref={ref} onCancel={() => closeModal()}>
            <p style={{ fontWeight: "bold", textAlign: "center", padding: "20px" }}>Atualizar Cadastro</p>
            <form>
                <label>Título</label>
                <input name="titulo" />
                <label>Gênero</label>
                <input name="genero" />
                <label>Status</label>
                <input name="status" />
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button type="submit" formMethod="dialog" onSubmit={() => closeModal()} onClick={() => closeModal()}>Adicionar</button>
                </div>
            </form>
        </dialog>

    )
}

export default EditMovieForm