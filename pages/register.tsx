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
import { useSignUp } from "@/hooks/authentication/useSignUp";
import ButtonLoading from "@/components/ButtonLoading";
import AlreadyLoggedIn from "@/components/AlreadyLoggedIn";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().min(2, { message: "Email must be at least 2 characters." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Register() {
  const { signUp, isSigningUp } = useSignUp();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: FormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const { fullName, email, password } = values;
    signUp({ fullName, email, password }, { onSettled: () => form.reset() });
  }

  return (
    <AlreadyLoggedIn>
      <div className="mx-auto h-full sm:w-1/2 lg:w-1/3">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold">
              Sign Up
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
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full name</FormLabel>
                      <FormControl>
                        <Input placeholder="Type your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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

                {isSigningUp ? (
                  <ButtonLoading className="w-full" />
                ) : (
                  <Button className="w-full" type="submit">
                    SIGN UP
                  </Button>
                )}
              </form>
            </Form>
            <hr className="mt-10 rounded-md border-[1.5px] border-solid" />
            <p className="mt-7 text-center">
              Already have an account?{" "}
              <Link href={"/login"} className="underline">
                LOGIN
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </AlreadyLoggedIn>
  );
}
