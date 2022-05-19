import React, { useEffect, useState } from 'react';
import './MyTasks.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Button, Card, Container } from 'react-bootstrap';

const MyTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `https://glacial-escarpment-44117.herokuapp.com/tasks?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setTasks(result);
            })
    }, [user])

    const handleDelete = id => {
        const confirmation = window.confirm("Are you sure to delete the item?");

        if (confirmation) {
            fetch(`https://glacial-escarpment-44117.herokuapp.com/task/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remainingData = tasks.filter(task => task._id !== id);
                    setTasks(remainingData);
                });
        }
    }

    const handleComplete = () => {

    }

    const displayDescription = (description) => {
        return description.length < 100 ? description : description.slice(0, 97) + "...";
    }

    return (
        <div className='my-items'>
            <Container>
                <h2 className='text-center my-5' style={{ color: "#01497c" }}>My Total Tasks: {tasks.length}</h2>

                <div className="my-4 card-container ">
                    {
                        tasks.map(task => <Card key={task._id} className="h-100" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                            <Card.Body>
                                <Card.Title className='fw-bolder'>{task.name}</Card.Title>
                                <Card.Text title={task.description}>
                                    {
                                        displayDescription(task.description)
                                    }
                                </Card.Text>

                                <div className='d-flex justify-content-center'>
                                    <div className=' me-5'>
                                        <button className='w-100  mx-3 bg-danger text-white border-0 p-1 rounded' onClick={() => handleDelete(task._id)}>Delete</button>
                                    </div>

                                    <div className=' me-2'>
                                        <button className=' w-100 bg-success text-white border-0 p-1 mx-2 rounded' onClick={() => handleComplete()}>Complete</button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        )
                    }
                </div>
            </Container >
        </div >
    );
};

export default MyTasks;