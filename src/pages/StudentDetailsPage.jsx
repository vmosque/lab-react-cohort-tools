// StudentDetailsPage.jsx
import React from "react";
import placeholderImage from "./../assets/placeholder.png";
import studentsData from "./../assets/students.json";
import { Link, useParams } from "react-router-dom"; // <-- IMPORT CORRECTO

function StudentDetailsPage() {
  const { studentId } = useParams();

  // DEBUG: ver en consola qué llega
  console.log("StudentDetailsPage -> studentId from URL:", studentId);
  console.log("studentsData length:", studentsData?.length);
  console.log("studentsData first item:", studentsData?.[0]);

  // Buscar estudiante: probamos match por string y por número (si tus _id son numéricos)
  const studentProfile =
    studentsData.find((s) => String(s._id) === String(studentId)) ||
    studentsData.find((s) => Number(s._id) === Number(studentId));

  if (!studentProfile) {
    return (
      <div className="StudentDetailsPage bg-gray-100 py-6 px-4 border-2 border-fuchsia-500 m-2">
        <h1>Student Details Page</h1>
        <div className="bg-white p-8 rounded-lg shadow-md mb-6">
          <p className="mb-4">
            No se encontró ningún estudiante con ID:{" "}
            <strong>{studentId}</strong>
          </p>
          <p className="mb-4 text-sm text-gray-600">
            Comprueba en la consola si `studentId` y `studentsData` están
            llegando correctamente.
          </p>
          <Link to="/">
            <button className="text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition">
              Back
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="StudentDetailsPage bg-gray-100 py-6 px-4 border-2 border-fuchsia-500 m-2">
      <h1>Student Details Page</h1>

      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <img
          src={studentProfile.image || placeholderImage}
          alt="profile-photo"
          className="rounded-full w-32 h-32 object-cover border-2 border-gray-300"
        />

        <h1 className="text-2xl mt-4 font-bold">
          {studentProfile.firstName} {studentProfile.lastName}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-4 border-b pb-4">
          <p className="border-b pb-2">
            <strong>LinkedIn:</strong>{" "}
            <a
              href={studentProfile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline ml-2"
            >
              {studentProfile.linkedinUrl}
            </a>
          </p>

          <p className="border-b pb-2">
            <strong>Email:</strong>{" "}
            <span className="text-blue-500 hover:underline ml-2">
              {studentProfile.email}
            </span>
          </p>

          <p className="border-b pb-2">
            <strong>Languages:</strong>{" "}
            {(studentProfile.languages || []).join(", ")}
          </p>

          <p className="border-b pb-2">
            <strong>Program:</strong> {studentProfile.program}
          </p>

          <p className="pb-2">
            <strong>Background:</strong> {studentProfile.background}
          </p>

          <p className="pb-2">
            <strong>Cohort:</strong>{" "}
            <span className="text-blue-500 ml-2 hover:underline">
              {studentProfile.cohort}
            </span>
          </p>
        </div>

        <Link to="/">
          <button className="text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default StudentDetailsPage;
