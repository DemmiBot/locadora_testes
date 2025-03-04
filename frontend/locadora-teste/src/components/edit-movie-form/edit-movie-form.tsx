import { useEffect, useRef } from "react";
import "./edit-movie-form.css"
import image from "../../assets/esea05pj84o21.webp"

function EditMovieForm(openModal:boolean, closeModal:Function) {

    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if(ref.current == null)
            return 
        if (openModal == true) {
            ref.current.showModal();
        } else {
            ref.current.close();
        }
      }, [openModal]);
    

    return(
        <dialog open={false} ref={ref} onCancel={() =>closeModal()}>
            <div className="suspended-form modal-form">
                <p style={{fontWeight:"bold", textAlign:"center", padding:"20px"}}>Atualizar Cadastro</p>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <form>
                        <label>Título</label>
                        <input name="titulo" />
                        <label>Gênero</label>
                        <input name="genero" />
                        <label>Ano de lançamento</label>
                        <input name="lancamento " />
                        <label>Status</label>
                        <input name="status" />
                        <label>Thumbnail</label>
                        <input className="thumbnail" name="thumbnail" type="file" accept=".jpg, .png"/>
                        <button type="submit" formMethod="dialog" onSubmit={() => closeModal()} onClick={() => closeModal()}>Adicionar</button>
                    </form>
                    <img className="thumbnail-edit" src={image}/>
                </div>
            </div>
        </dialog>

    )
}

export default EditMovieForm