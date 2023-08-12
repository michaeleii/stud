import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { AlarmClock, BookCopy, Calendar, ListTodo } from "lucide-react";
import Footer from "@/components/Footer";

function LandingPage() {
  const { theme } = useTheme();

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 lg:pb-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <a
            href="#"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          >
            Stud is now in beta 🎉
          </a>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Stay on top of school.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A simple, yet powerful tool to help you manage your school life.
          </p>
          <div className="space-x-2">
            <Button asChild>
              <Link href="/login">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/michaeleii/StuD" target="_blank">
                Github
              </a>
            </Button>
          </div>
        </div>
        <div>
          <Image
            src={
              theme === "light" ? "/hero-lightmode.jpg" : "/hero-darkmode.jpg"
            }
            id="heroImage"
            alt="The Study app dashboard"
            width={2530}
            height={2560}
          />
        </div>
      </section>
      <section className="mx-auto flex max-w-[58rem] flex-col items-center text-center">
        <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-3xl md:text-6xl">
          Features
        </h2>
        <p className="text-md mb-10 mt-3 max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          This project is aimed to help students easily manage their school
          life.
        </p>
        <div className=" grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
          <div className="space-y-2 overflow-hidden rounded-lg  border bg-background p-10">
            <div>
              <BookCopy size={50} />
            </div>
            <h3 className="text-xl font-bold tracking-tight">Courses</h3>
            <p className="text-md max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
              Add your courses and keep track of your schedule.
            </p>
          </div>
          <div className=" space-y-2 overflow-hidden rounded-lg  border bg-background p-10">
            <div>
              <ListTodo size={50} />
            </div>
            <h3 className="text-xl font-bold tracking-tight">Tasks</h3>
            <p className="text-md max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
              Add your tasks and keep track of school work.
            </p>
          </div>
          <div className=" space-y-2 overflow-hidden rounded-lg  border bg-background p-10">
            <div>
              <AlarmClock size={50} />
            </div>
            <h3 className="text-xl font-bold tracking-tight">Pomodoro</h3>
            <p className="text-md max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
              Use the Pomodoro timer to help you focus on your tasks.
            </p>
          </div>
          <div className=" space-y-2 overflow-hidden rounded-lg  border bg-background p-10">
            <div>
              <Calendar size={50} />
            </div>
            <h3 className="text-xl font-bold tracking-tight">Calendar</h3>
            <p className="text-md max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
              Easily view your schedule for the day.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default LandingPage;
