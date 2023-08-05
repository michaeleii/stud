import Course from "@/types/Course";
import { GetStaticPaths, GetStaticProps } from "next";
import { API_URL } from ".";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/courses`);
  const courses = (await res.json()) as Course[];
  const paths = courses.map((course) => {
    return { params: { id: course.id.toString() } };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const noCourse = { props: {} };
  if (!context.params) return noCourse;

  const id = context.params.id;
  const res = await fetch(`${API_URL}/courses/${id}`);
  const course = (await res.json()) as Course;

  if (!course) return noCourse;

  return {
    props: { course },
  };
};

function CourseDetails({ course }: { course: Course }) {
  return (
    <>
      <h1>{course.name}</h1>
      <h2 className="my-3 text-xl">{course.description}</h2>
    </>
  );
}
export default CourseDetails;
