import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Trash2 } from "lucide-react";
import { Pen } from "lucide-react";

import { Button } from "./ui/button";
import { Task } from "@/services/apiTask";
import { useDeleteTask } from "@/hooks/task/useDeleteTask";
import ButtonLoading from "./ButtonLoading";

function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="my-3 text-2xl font-semibold">{children}</h3>;
}
function Todo({ children }: { children: React.ReactNode }) {
  return <div className="max-w-xl">{children}</div>;
}
function List({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col gap-5 ">{children}</ul>;
}

function Item({ task }: { task: Task }) {
  const [isChecked, setIsChecked] = useState(task.is_completed);
  const { deleteTask, isDeletingTask } = useDeleteTask();

  const handleDelete = (id: number) => {
    deleteTask(id);
  };
  return (
    <li className="flex items-center">
      <Card
        className={
          "flex flex-1 items-center gap-5 p-5 hover:cursor-pointer" +
          (isChecked ? " bg-green-300 dark:bg-green-900" : "")
        }
        onClick={() => setIsChecked(!isChecked)}
      >
        <Checkbox checked={isChecked} />
        <h4 className={"text-xl" + (isChecked ? " line-through" : "")}>
          {task.name}
        </h4>
        <div className="ml-auto space-x-2">
          {isDeletingTask ? (
            <ButtonLoading text="" />
          ) : (
            <Button
              variant="destructive"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(task.id);
              }}
            >
              <Trash2 />
            </Button>
          )}
        </div>
      </Card>
    </li>
  );
}
Todo.Heading = Heading;
Todo.List = List;
Todo.Item = Item;

export default Todo;
