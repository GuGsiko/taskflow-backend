    let tasks = [
        { id : 1, title:"Learn Node.js", status: "in_progress"},
        {id : 3, title : "Connect Frontend", status : "todo"},
    ];

    export const fetchTasks = () => {
        return tasks;
    };
    export const createTask = (title) => {
        const newTask = {
            id: Date.now(),
            title,
            status:"todo",
        };

        tasks.push(newTask)
        return newTask
    };
    export const toggleTaskStatus = (id) => {
        const task = tasks.find ((t) => t.id == id );
        if (!task) throw new Error ("Task not found");

        task.status = task.status == "done" ? "todo" : "done" ;
        return task;
    }

    export const removeTask = (id) => {
        tasks = tasks.filter((t) => t.id != id);
    };