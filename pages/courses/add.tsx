import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import PageHeading from "@/components/PageHeading";
import { useForm } from "react-hook-form";
import { useCreateCourse } from "@/hooks/course/useCreateCourse";
import ButtonLoading from "@/components/ButtonLoading";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

function AddCourseForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const { createCourse, isLoading } = useCreateCourse();
  async function onSubmit(values: FormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const { name, description } = values;
    const newCourse = { name, description };
    createCourse(newCourse);
  }
  return (
    <div>
      <PageHeading>Add a new course</PageHeading>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-md space-y-8 p-10"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter course name"
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
                  <Input
                    placeholder="Enter course description"
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {isLoading ? (
            <ButtonLoading />
          ) : (
            <Button type="submit" className="w-full max-w-sm">
              Add
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
}
export default AddCourseForm;
