import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddTask = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, event) => {
        console.log(data);
        event.target.reset();
        toast('Task is Added');
    };

    return (
        <div className='w-50 mx-auto my-5' style={{ minHeight: "50vh" }}>
            <h2 className='text-center mb-4' style={{ color: "#01497c" }}>Add New Tasks</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' type="text" {...register("name", { required: true, maxLength: 50 })} />

                <textarea placeholder='Description' className='my-2' {...register("description", { required: true })} />

                <input className='w-75 mx-auto' type="submit" style={{ backgroundColor: "#3bb630", border: "none", color: "white", fontWeight: "400", padding: "0.3rem", borderRadius: "4px", fontSize: "1.1rem" }} value="Add Task" />
            </form>
        </div>
    );
};

export default AddTask;