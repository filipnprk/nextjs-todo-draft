const Modal = ({ modalOpen, setModalOpen, children }) => {
    return(
        <dialog id="my_modal_3" className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            {children}
            </form>    
        </div>
        </dialog>
    )
};

export default Modal;