import PageHeading from "@/components/PageHeading";
import EditCourseSheet from "@/components/EditCourseSheet";
import { useCourse } from "@/hooks/course/useCourse";
import DeleteSheet from "@/components/DeleteSheet";
import Todo from "@/components/TodoList";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useTasks } from "@/hooks/task/useTasks";
import { useCreateTask } from "@/hooks/task/useCreateTask";
import ButtonLoading from "@/components/ButtonLoading";
import LoadingFullPage from "@/components/LoadingPage";
import { useRouter } from "next/router";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useUser } from "@/hooks/authentication/useUser";

export interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
}

function CourseDetails() {
  const router = useRouter();
  const id = Number(router.query.id);
  const { course, isLoading } = useCourse(id);
  const { tasks, isLoading: isLoadingTasks } = useTasks(id);
  const { createTask, isCreatingTask } = useCreateTask();
  const { user, isLoadingUser } = useUser();

  useEffect(() => {
    if (!isLoadingUser && !user) {
      router.replace("/landing");
    }
  }, [user, isLoadingUser, router]);

  const [name, setName] = useState("");
  if (isLoading) return <LoadingFullPage />;

  if (!course) return router.replace("/404");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newTodo = {
      name,
      course_id: course.id,
    };
    //CREATE
    createTask(newTodo);
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
      {isLoadingTasks ? (
        <div>Fetching Tasks...</div>
      ) : (
        <Todo>
          <Todo.Heading>Tasks</Todo.Heading>
          <form className="mb-4 flex gap-2" onSubmit={handleSubmit}>
            <Input
              placeholder="What do you need to get done?"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {isCreatingTask ? <ButtonLoading text="" /> : <Button>Add</Button>}
          </form>

          <Todo.List>
            {tasks &&
              tasks
                .sort((a, b) => {
                  if (a.is_completed === b.is_completed) {
                    return a.id - b.id; // If both tasks have the same completed status, sort by id
                  }
                  return a.is_completed ? 1 : -1; // Completed tasks come last
                })
                .map((task) => <Todo.Item key={task.id} task={task} />)}
          </Todo.List>
        </Todo>
      )}
    </div>
  );
}
export default CourseDetails;
