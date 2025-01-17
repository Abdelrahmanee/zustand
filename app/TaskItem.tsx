import { TaskType, useTaskStore } from "./store/taskState"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface TaskItemProps {
    task: TaskType
}

export function TaskItem({ task }: TaskItemProps) {
    const { checkTask, removeTask } = useTaskStore()

    return (
        <div className="flex items-center justify-between rounded-md bg-white p-2 px-4">
            <div className="flex items-center gap-2">
                <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => checkTask(task.id)}
                />
                <span
                    className={
                        task.completed ? "text-zinc-400 line-through" : "text-zinc-900"
                    }
                >
                    {task.title}
                </span>
            </div>
            <Button
                variant="destructive"
                size="sm"
                onClick={() => removeTask(task.id)}
                className="h-6 w-12 bg-red-600 hover:bg-red-700"
            >
                Del
            </Button>
        </div>
    )
}

TaskItem.displayName = "TaskItem"