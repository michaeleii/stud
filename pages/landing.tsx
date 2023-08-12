import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import {
  AlarmClock,
  BookCopy,
  Calendar,
  ListTodo,
  PlayCircle,
} from "lucide-react";
import Footer from "@/components/Footer";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function LandingPage() {
  const { theme } = useTheme();

  return (
    <>
      <section className="lg:pb-30 space-y-6 pb-8 pt-10 md:pb-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Stay on top of school.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A simple, yet powerful tool to help you manage your school life.
          </p>
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <PlayCircle />
                  Watch Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-7xl p-10">
                <video autoPlay controls>
                  <source src="/stud-demo-1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </DialogContent>
            </Dialog>
            <Button asChild>
              <Link href="/login" className="flex items-center gap-2">
                Get Started
              </Link>
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
      <section className="mx-auto flex max-w-[58rem] flex-col items-center pb-8 pt-10 text-center md:pb-32">
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
