import { useForm } from "react-hook-form";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
import { useLogin } from "@/hooks/authentication/useLogin";
import { log } from "console";
import ButtonLoading from "@/components/ButtonLoading";
import AlreadyLoggedIn from "@/components/AlreadyLoggedIn";

const formSchema = z.object({
  email: z.string().min(2, { message: "Email must be at least 2 characters." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Login() {
  const { login, isLoggingIn } = useLogin();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: FormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const { email, password } = values;
    login({ email, password }, { onSettled: () => form.reset() });
  }

  return (
    <AlreadyLoggedIn>
      <div className="mx-auto h-full max-w-xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Type your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Type your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {isLoggingIn ? (
                  <ButtonLoading className="w-full" />
                ) : (
                  <Button className="w-full" type="submit">
                    LOGIN
                  </Button>
                )}
              </form>
            </Form>
            <hr className="mt-10 rounded-md border-[1.5px] border-solid" />
            <p className="mt-7 text-center">
              Need an account?{" "}
              <Link href={"/register"} className="underline">
                SIGN UP
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </AlreadyLoggedIn>
  );
}
