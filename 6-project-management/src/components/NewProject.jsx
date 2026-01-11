import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSaveProject() {
        const projectData = {
            title: title.current.value,
            description: description.current.value,
            dueDate: dueDate.current.value
        }

        if (!projectData.title || !projectData.description || !projectData.dueDate) {
            modal.current.open();
            return;
        }

        onAdd(projectData);
    }

    return (
        <>

            <Modal ref={modal} buttonCaption="Close" onCancel={onCancel}>
                <h2>Invalid input</h2>
                <p>Please fill in all fields</p>
                <p>Please make sure you enter a valid date</p>
            </Modal>

            <div className="w-[35rem] mt-16">
                <menu className="flex gap-4 justify-end items-center my-4">
                    <li>
                        <button onClick={onCancel} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Cancel</button>
                    </li>
                    <li>
                        <button onClick={handleSaveProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Save</button>
                    </li>
                </menu>
                <div>
                    <Input ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea />
                    <Input ref={dueDate} label="Due Date" type="date" />
                </div>
            </div>
        </>
    )
}