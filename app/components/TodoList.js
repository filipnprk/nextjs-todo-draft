import Task from "./Task";

const TodoList = ({ tasks }) => {
    return (
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Tasks</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                { tasks.map((task) => <Task key={task.id} task={task}/>)}
                </tbody>
            </table>
            </div>
            )
        };

export default TodoList;