
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


function Task(){

    const nav=useNavigate();
    const[name,setName]=useState();
    const[task,setTask]=useState(false);
    const[taskName,setTaskName]=useState();
    const[taskStartDate,setTaskStartDate]=useState();
    const[taskEndDate,setTaskEndDate]=useState();
    const[taskDescription,setTaskDescription]=useState();

    const[taskData,setTaskData]=useState();
     useEffect(()=>{
        getData();
        getTaskData();
   },[taskData]);

    const getData=()=>{
         axios.get("http://localhost:8000/users").
    then((res)=>{
        const data=res.data;
        const loggedInEmail=localStorage.getItem("email");
        const user=data.find((user)=>user.email===loggedInEmail);
        if(user)
        {
            setName(user.name);
        }else
        {
            setName("unknown")
        }
    }).catch((err)=>{
        console.log(err);
    })
    }

    const getTaskData=()=>{
        axios.get("http://localhost:8000/tasks").
        then((res)=>{
                    setTaskData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    
   
    const handleAddData=()=>{
        axios.post("http://localhost:8000/data",{taskName,taskStartDate,taskEndDate,taskDescription}).
        then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
        
    }

    const date=new Date();
    const finaldate=`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

    const addTask=()=>{
        setTaskName("");
        setTaskDescription("");
        setTaskEndDate("");
        setTaskStartDate("");
        setTask(true);
    }

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:8000/data/${id}`).
        then((res)=>{
            const data=res.data;
            const deleted=data.filter((data)=>data._id!==id);
            setTaskData(deleted);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div className="tcontainer">
            <div className="theader">
                <div className="left">
                    <p>Task App</p>
                </div>
                <div className="middle">
                    <p>WELCOME {name}</p>
                </div>
                <div className="right">
                    <p>{finaldate}</p>
                </div>
            </div>
            <div className="tsidebar">
                <p onClick={()=>nav("/dashboard")}>Calculator</p>
                <p onClick={()=>nav("/")}>Logout</p>
                  <button onClick={()=>addTask()}>Add task</button>
            </div>

            
                
                 <div className="task-grid">
                 {taskData && taskData.map((task)=>
            
        <div className="task-gridp" key={task._id} >
            <p>TaskName: {task.taskName}</p>
            <p>Start Date: {task.taskStartDate}</p>
            <p>End Date: {task.taskEndDate}</p>
            <p>Description: {task.taskDescription}</p>
            <button className="delete-btn" onClick={()=>handleDelete(task._id)}>Delete</button>

            </div>)}
            </div>
            
           
           

              {
                task && 
                <div className="task-detail">
                        <h4>Add task</h4>
                        <span onClick={()=>setTask(false)}>&times;</span>
                       <label name="taskname">Task Name:</label>
                       <input type="text" value={taskName} onChange={(e)=>setTaskName(e.target.value)} name="taskname"/>
                       <br/>

                       <label name="taskstartdate">Start date:</label>
                       <input type="text" value={taskStartDate} onChange={(e)=>setTaskStartDate(e.target.value)} name="taskstartdate"/>
                       <br/>

                       <label name="taskenddate">End date:</label>
                       <input type="text" value={taskEndDate} onChange={(e)=>setTaskEndDate(e.target.value)} name="taskenddate"/>
                       <br/>

                       <label name="taskdescription">Task Description:</label>
                       <input type="text" value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)} name="taskdescription"/>

                       <button onClick={()=>handleAddData()}>ADD</button>
                       
                </div>
              }  
              

        </div>
    )
}
export default Task;