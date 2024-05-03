import { Link, useParams } from "react-router-dom";
import placeholderImage from "./../assets/placeholder.png";
import studentsData from "./../assets/students.json";

function StudentDetailsPage() {
  // Find the current student profile by id.
  // In this case, the student with id 1. The `studentId` is hard-coded for now.
  // This could be a URL parameter from React Router, e.g. /students/:studentId
  const { guillaume } = useParams();

  const studentProfile = studentsData.find(
    (student) => student._id === studentId
  );

  return (
    <div className="StudentDetailsPage bg-gray-100 py-6 px-4 m-2">
      <h1>Student Details Page</h1>
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        {studentProfile && (
          <>
            <img
              src={studentProfile.image || placeholderImage}
              alt="profile-photo"
              className="rounded-full w-32 h-32 object-cover border-2 border-gray-300"
            />
            <h1 className="text-2xl mt-4 font-bold absolute">
              {studentProfile.firstName} {studentProfile.lastName}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 mb-4 border-b pb-4">
              <p className="text-left mb-2 border-b pb-2">
                <strong>LinkedIn:</strong>{" "}
                <a
                  href={studentProfile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  {studentProfile.linkedinUrl}
                </a>
              </p>

              <p className="text-left mb-2 border-b pb-2">
                <strong>Email:</strong>{" "}
                <span className="ml-2 text-blue-500 hover:underline">
                  {studentProfile.email}
                </span>
              </p>

              <p className="text-left mb-2 border-b pb-2">
                <strong>Languages:</strong>{" "}
                {studentProfile.languages.join(", ")}
              </p>

              <p className="text-left mb-2 border-b pb-2">
                <strong>Program:</strong> {studentProfile.program}
              </p>

              <p className="text-left mb-2 pb-2">
                <strong>Background:</strong> {studentProfile.background}
              </p>

              <p className="text-left mb-2 pb-2">
                <strong>Cohort:</strong>
                <span className="ml-2 text-blue-500 hover:underline">
                  {studentProfile.cohort}
                </span>
              </p>
            </div>

            {/* Back button */}
            <Link
              to="/"
              className="text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Back
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default StudentDetailsPage;
