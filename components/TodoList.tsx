import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Trash2 } from "lucide-react";
import { Pen } from "lucide-react";

import { Todo as ITodo } from "@/pages/courses/[id]";
import { Button } from "./ui/button";

function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="my-3 text-2xl font-semibold">{children}</h3>;
}
function Todo({ children }: { children: React.ReactNode }) {
  return <div className="max-w-xl">{children}</div>;
}
function List({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col gap-5 ">{children}</ul>;
}

function Item({ todo, children }: { todo: ITodo; children: React.ReactNode }) {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
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
          {todo.name}
        </h4>
        {children}
      </Card>
    </li>
  );
}
Todo.Heading = Heading;
Todo.List = List;
Todo.Item = Item;

export default Todo;
