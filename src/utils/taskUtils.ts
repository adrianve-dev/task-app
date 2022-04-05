import { CompletedTask, ReadonlyTask } from '../Types/tasks';

// make array readonly
export const completeAll = (tasks: readonly ReadonlyTask[]): CompletedTask[] => {
    // We want it to return a new array
    // instead of modifying the original array
    return tasks.map(task => ({
        ...task,
        done: true
    }))
}

export const toggleTask = (_task: ReadonlyTask): ReadonlyTask => {
    return {
        ..._task,
        done: !_task.done
    }
}