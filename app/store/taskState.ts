import { create } from 'zustand'

export interface TaskType {
  id: number
  title: string
  completed: boolean 
}

interface TaskStateType {
  tasks: TaskType[]
  addTask: (title: string) => TaskType 
  checkTask : (id: number) => void
  removeTask: (id: number) => void
}

export const useTaskStore = create<TaskStateType>()((set) => ({
  tasks: [],
  addTask: (title: string) => {
    const newTask: TaskType = { id: Date.now(), title, completed: false, }

    set((state) => {return {tasks: [...state.tasks, newTask]}})

    return newTask 
  },
  checkTask: (id: number) => {
    set((state)=>{
      const updatedTask = state.tasks.map((task) => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
      return {tasks: updatedTask}
    })
  },
  removeTask: (id: number) => {
    set((state)=>{
      const removedTask = state.tasks.filter((task)=> task.id != id)
      return {tasks: removedTask}
    })
  }
}))
