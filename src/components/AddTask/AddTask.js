import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddTasks.css';
import { Link } from "react-router-dom";


const AddTask = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    console.log(user.email);

    const onSubmit = (data, event) => {
        console.log(data)
        event.target.reset();
        toast('Task is Added');

        const url = `http://localhost:5000/tasks`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='w-50 mx-auto my-5' style={{ minHeight: "50vh" }}>
            <h2 className='text-center mb-4' style={{ color: "#01497c" }}>Add New Tasks</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' type="text" {...register("name", { required: true, maxLength: 50 })} />

                <input placeholder='Email' type="email" className='my-2' {...register("email")} readOnly value={user?.email} />

                <textarea placeholder='Description' className='my-2' {...register("description", { required: true })} />

                <input className='w-50 mx-auto' type="submit" style={{ backgroundColor: "#3bb630", border: "none", color: "white", fontWeight: "400", padding: "0.3rem", borderRadius: "4px", fontSize: "1.1rem" }} value="Add Task" />
            </form>

            <div className="d-flex justify-content-center align-itmes-center">
                <Link to="/myTasks">
                    <button className=' mx-auto button-add-task'>My Tasks</button>
                </Link>

            </div>
        </div>
    );
};

export default AddTask;