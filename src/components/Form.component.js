import React from "react";
//I think the issue is here
            const Form = ({ setInputText, tasks, setTasks, inputText }) => {
                const inputTextHandler = (e) => {
                    //event handler
                    console.log(e.target.value);
                    setInputText(e.target.value);
                };
                const submitTaskHandler = (e) => {
                    e.preventDefault();
                    setTasks([
                        ...tasks, 
                        { text: inputText, completed: false, id:Math.random() * 1000},
                    ]);
                    setInputText("");
                }
                return (
                <form>
                <input 
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="task-input" />
                <button onClick={submitTaskHandler} className="task-button btn btn-default bg-dark btn-dark" type="submit">
                    <i className="primary-btn">Submit</i>
                </button>
                <div className="select">
                <select name="tasks" className="filter-tasks">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
                </div>
                </form>
                        );
                                }

export default Form
