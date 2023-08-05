import { courses } from "@/data/courses";
import Course from "@/types/Course";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = courses.map((course) => {
    return { params: { id: course.id.toString() } };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const noCourse = { props: {} };
  if (!context.params) return noCourse;

  const id = context.params.id;

  const course = courses.find((course) => course.id === id);

  if (!course) return noCourse;

  return {
    props: { course },
  };
};

function CourseDetails({ course }: { course: Course }) {
  console.log(courses);
  return (
    <>
      <h1>{course.name}</h1>
      <h2 className="my-3 text-xl">{course.description}</h2>
    </>
  );
}
export default CourseDetails;
