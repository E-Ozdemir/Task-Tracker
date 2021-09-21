import {useState} from 'react'

const CreateTask = () => {
    const [text,setText] = useState('');
    const [day,setDay] = useState('');

    const handleTextChange = (e)=>setText(e.target.value)
    const handleDayChange = (e)=>setDay(e.target.value)
    console.log(`form values`, {text,day})
    return (
        <form className="add-form">
            <div className='form-control'>
                <label htmlFor="task">Task</label>
                <input type="text" id='task' name='text' placeholder='Enter a task name' 

                // required
                value={text}
                onChange={handleTextChange}
                />
            </div>
            <div className='form-control'>
                <label htmlFor="day">Day & Time</label>
                <input type="text" id='day' name='day' placeholder='Enter a day and time' 

                // required
                value={day}
                onChange={handleDayChange}
                />
            </div>
            <input type="submit" value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default CreateTask
