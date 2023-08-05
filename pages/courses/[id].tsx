import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import PageHeading from "@/components/PageHeading";
import { Course, getCourse, getCourses } from "@/services/apiCourse";

export const getStaticPaths: GetStaticPaths = async () => {
  const courses = await getCourses();
  const paths = courses.map((course) => {
    return { params: { id: course.id.toString() } };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { props: {} };

  const id = context.params.id;
  if (!id || typeof id !== "string") return { props: {} };

  const course = await getCourse(id);

  return {
    props: { course },
  };
};

function CourseDetails({ course }: { course: Course }) {
  return (
    <>
      <PageHeading>{course.name}</PageHeading>
      <h2 className="my-3 text-xl">{course.description}</h2>
    </>
  );
}
export default CourseDetails;
