"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useTaskStore } from "./store/taskState"

export default function Counter() {
    const {tasks} = useTaskStore();
    const  [counter, setCounter] = useState<number>(0);
    useEffect(()=>{
        setCounter(0);
        tasks.map((task) => {
            if(task.completed){
                setCounter(prev => prev + 1);
                return;
            }
        })
    } , [tasks])
  return (
    <div className=" flex items-center justify-center bg-zinc-900 p-4">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-white">Counter</h1>
        <div className="text-4xl font-semibold text-blue-400">{counter}</div>
      </div>
    </div>
  )
}
