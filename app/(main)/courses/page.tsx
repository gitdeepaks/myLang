import { getCourses, getUserProgress } from "@/db/quesries";
import { List } from "./List";

const CoursesPage = async () => {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Lagnuage Courses</h1>
      <List activeCoursesId={userProgress?.activeCourseId} courses={courses} />
    </div>
  );
};

export default CoursesPage;
