import React, { useEffect, useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [taskData, setTaskData] = useState(tasks);

  useEffect(() => setTaskData(tasks), [tasks])

  function removeTask(id) {
    setTaskData(taskData.filter((_task, index) => index !== id));
  }

  return (
    <div className="tasks">
      {taskData.map((task, index) => (
        <Task
          key={index}
          id={index}
          category={task.category}
          text={task.text}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}

export default TaskList;