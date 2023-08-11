import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useCreateCourse } from "@/hooks/course/useCreateCourse";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import ButtonLoading from "./ButtonLoading";
import { Button } from "./ui/button";
import { DialogFooter } from "./ui/dialog";

import { SelectComponent } from "./ui/select";
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  weekdays: z.array(
    z.object({
      value: z.number(),
      label: z.string(),
    })
  ),
  time: z.string(),
});

const dayOfWeekList = [
  { value: 0, label: "Sunday" },
  { value: 1, label: "Monday" },
  { value: 2, label: "Tuesday" },
  { value: 3, label: "Wednesday" },
  { value: 4, label: "Thursday" },
  { value: 5, label: "Friday" },
  { value: 6, label: "Saturday" },
];

type FormValues = z.infer<typeof formSchema>;

function CreateCourseForm() {
  const { createCourse, isLoading } = useCreateCourse();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  function onSubmit(values: FormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const { name, description, weekdays, time } = values;
    const newCourse = { name, description };
    console.log({
      time: time,
      weekdays,
    });
    createCourse(newCourse);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="What is the name of your course?"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="What is your course about?"
                  disabled={isLoading}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="weekdays"
          render={({ field }) => (
            <FormItem>
              <FormLabel>When do you have your course?</FormLabel>
              <FormControl>
                <SelectComponent
                  createAble={false}
                  isMulti={true}
                  options={dayOfWeekList}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>When time do you have your course?</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="What is your course about?"
                  disabled={isLoading}
                  type="time"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          {isLoading ? <ButtonLoading /> : <Button type="submit">Add</Button>}
        </DialogFooter>
      </form>
    </Form>
  );
}
export default CreateCourseForm;
