    let tasks = [
        { id : 1, title:"Learn Node.js", status: "in_progress"},
        {id : 3, title : "Connect Frontend", status : "todo"},
    ];

    export const fetchTasks = () => {
        return tasks;
    };
    export const createTask = (title) => {
        const newTask = {
            id: tasks.length + 1,
            title,
            status:"todo",
        };

        tasks.push(newTask)
        return newTask
    };