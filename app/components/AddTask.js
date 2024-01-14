"use client"

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { addTodo } from "@/api";

const AddTask = ({children}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [newTaskValue, setNewTaskValue] = useState('');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleSubmitNewTodo = async (e) => {
        e.preventDefault();
        await addTodo({
            id: 4,
            text: newTaskValue
        })
        setNewTaskValue('');
        setModalOpen(false);
    }

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full"> Add New Task <AiOutlinePlus className="ml-2" size={18}/></button>
            {isClient && (
                <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                    <form onSubmit={handleSubmitNewTodo}>
                        <h3 className="font-bold text-lg">Add new task</h3>   
                        <div className="modal-action">
                            <input type='text' value={newTaskValue} onChange={e => setNewTaskValue(e.target.value)} placeholder='Type Here' className="input input-bordered w-full"/>
                            <button type="submit" className="btn">Submit</button>
                        </div>
                    </form>
                </Modal>
            )}
        </div>
    );
};

export default AddTask;