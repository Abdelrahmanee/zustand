"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { TaskType, useTaskStore } from "./store/taskState"
import Counter from "./counter"
import { TaskItem } from "./TaskItem"

export default function TaskManager() {
  const { addTask, tasks   } = useTaskStore()
  const [newTask, setNewTask] = useState("")

  const addTaskHandler = () => {
    if (newTask.trim()) {
      addTask(newTask)
      setNewTask("")
    }
  }
  return (
    <div className="min-h-screen bg-zinc-900 p-4 md:p-6">
      <Counter></Counter>
      <div className="mx-auto max-w-2xl space-y-4">
        <div className="flex gap-2">
          <Input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTaskHandler()}
            placeholder="Enter a new task"
            className="bg-white"
          />
          <Button
            onClick={addTaskHandler}
            className="w-20 bg-blue-600 hover:bg-blue-700"
          >
            Add
          </Button>
        </div>
        <div className="space-y-2">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
            />
          ))}
        </div>
      </div>
    </div>
  )
}



