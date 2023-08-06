import PageHeading from "@/components/PageHeading";
import EditCourseSheet from "@/components/EditCourseSheet";
import { useCourse } from "@/hooks/course/useCourse";
import DeleteSheet from "@/components/DeleteSheet";

function CourseDetails() {
  const { course, isLoading } = useCourse();
  if (isLoading) return <div>Loading...</div>;
  if (!course) return <div className="text-center">Course not found</div>;
  return (
    <>
      <PageHeading>{course.name}</PageHeading>

      <h2 className="my-3 text-xl">{course.description}</h2>
      <div className="mt-5 space-x-2">
        <EditCourseSheet course={course} />
        <DeleteSheet id={course.id} />
      </div>
    </>
  );
}
export default CourseDetails;
