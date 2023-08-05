import Course from "@/types/Course";
import { GetStaticPaths, GetStaticProps } from "next";
import { API_URL } from ".";
import PageHeading from "@/components/PageHeading";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/courses`);
  const courses: Course[] = await res.json();
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
  const course: Course = await res.json();

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
