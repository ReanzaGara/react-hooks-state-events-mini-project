import React from 'react';
import Task from './Task';

function TaskList({ tasks, handleDeleteTask }) {
	return (
		<div className="tasks">
			{tasks.map((task, index) => {
				if (task.display === true || task.display === undefined) {
					return (
						<Task
							key={index}
							text={task.text}
							category={task.category}
							handleDeleteTask={handleDeleteTask}
						/>
					);
				}
				return <div> </div>;
			})}
		</div>
	);
}

export default TaskList;