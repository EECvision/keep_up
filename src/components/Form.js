import React from 'react';

function MapForm(props){

    const task = {
        'A': 'Task',
        'M': 'Edit'
    }

    return (
        <div className="form-container">
        <form>
            <div className="name-section sect">
            <h4 className='form-header'>{task[props.text]}</h4>
                <div className="input-field">
                    <label>Name</label>
                    <input value={props.name} type="text" onChange={(e)=>props.setName(e.target.value)}></input>
                </div>
            </div>
            <div className="time-section sect">
            <h4 className="form-header">Due By</h4>
                <div className="input-field">
                    <label>Date</label>
                    <input value={props.date} type="date" onChange={(e)=>props.setDate(e.target.value)}></input>
                </div>
                <div className="input-field">
                    <label>Time</label>
                    <input value={props.time} type="time" onChange={(e)=>props.setTime(e.target.value)}></input>
                </div>
            </div>
        </form>
        <div className="button-section">
            <button onClick={()=>props.onSave(props.id,props.name,props.time,props.date)}>Save</button>
            <button onClick={props.onCancel}>Cancel</button>
            {props.deleteButton}
        </div>
    </div>
    )
}

export default function Form(props){

    const delet=()=>{
        props.deleteTask(props.id);
    }

    const save=(id,name,time,date)=>{
        let d = new Date();
        d = d.toLocaleTimeString().split(':').join(' ').split(' ')[2];
        time=time+":"+d;
        props.saveTask(id,name,time,date);
    }
    const cancel=()=>{
        props.cancelTask();
    } 
    const deleteButton = <button onClick={delet}>Delete</button>



    return(
        props.status
        ?<MapForm 
        text='A'
        onSave={save} 
        onCancel={cancel} 
        deleteButton={null}
        id={props.id}
        time={props.time}
        date={props.date}
        name={props.name}
        setName={props.setName}
        setDate={props.setDate}
        setTime={props.setTime}
        />
        :<MapForm 
        text='M'
        onSave={save} 
        onCancel={cancel} 
        onDelete={delet}
        deleteButton={deleteButton}
        id={props.id}
        time={props.time}
        date={props.date}
        name={props.name}
        setName={props.setName}
        setDate={props.setDate}
        setTime={props.setTime}
        />
    )
}