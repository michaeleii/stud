import PageHeading from "@/components/PageHeading";
import EditCourseSheet from "@/components/EditCourseSheet";
import { useCourse } from "@/hooks/course/useCourse";
import DeleteSheet from "@/components/DeleteSheet";
import Todo from "@/components/TodoList";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Trash2 } from "lucide-react";

export interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
}

function CourseDetails() {
  const { course, isLoading } = useCourse();
  const [todos, setTodos] = useState([] as Todo[]);
  const [name, setName] = useState("");
  if (isLoading) return <div>Loading...</div>;
  if (!course) return <div className="text-center">Course not found</div>;

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return;
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      name,
      isCompleted: false,
    };
    setTodos([newTodo, ...todos]);
    setName("");
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2">
      <div>
        <PageHeading>{course.name}</PageHeading>

        <h2 className="my-3 text-lg xl:text-xl">{course.description}</h2>
        <div className="my-5 space-x-2">
          <EditCourseSheet key={course.id} course={course} />
          <DeleteSheet id={course.id} />
        </div>
      </div>

      <Todo>
        <Todo.Heading>Tasks</Todo.Heading>
        <form className="mb-4 flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="What do you need to get done?"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button>Add</Button>
        </form>

        <Todo.List>
          {todos.map((todo) => (
            <Todo.Item key={todo.id} todo={todo}>
              <div className="ml-auto space-x-2">
                <Button
                  variant="destructive"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(todo.id);
                  }}
                >
                  <Trash2 />
                </Button>
              </div>
            </Todo.Item>
          ))}
        </Todo.List>
      </Todo>
    </div>
  );
}
export default CourseDetails;
