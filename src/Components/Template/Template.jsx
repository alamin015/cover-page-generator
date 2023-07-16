import React from "react";
import Logo from "../../assets/logo.jpg";
import moment from 'moment';

const Template = ({data}) => {
  console.log(data)
  const {course_code,name,course_title,course_teacher,date,dept_name,institution,semester,session,year,student_id,title,t_dept} = data
  return (
    <div className="py-6 px-10 mt-10">
        <div className="outline outline-[#2D7136] outline-offset-8 outline-4 border-4 border-[#2D7136]  p-4">
        <h2 className="text-center font-bold sm:text-3xl text-base text-black">
        Bangabandhu Sheikh Mujibur Rahman Science and Technology University,
        Gopalganj-8100
      </h2>
      <img src={Logo} className="w-[200px] mx-auto mt-7" alt="" />
      <div className="text-center mt-4">
        <h3 className="sm:text-2xl text-base font-medium">Department of EEE</h3>
        <h4 className="sm:text-2xl text-base font-medium">Assignment On</h4>
      </div>
      <div className="mt-10">
        <h3 className="sm:text-2xl text-base font-medium">
          Course Title : {course_title}
        </h3>
        <h3 className="sm:text-2xl text-base font-medium">Course Code : {course_code}</h3>
      </div>
      <div className="mt-12 w-full overflow-x-auto">
        <table className="table w-full min-w-[600px] border-collapse">
          <thead>
            <tr>
              <th className="border border-slate-300 py-2 px-1">Submitted by</th>
              <th className="border border-slate-300 py-2 px-1">Submitted to</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 py-2 px-1 w-1/2">
                <h3 className="sm:text-2xl text-base font-medium">Name: {name}</h3>
                <h3 className="sm:text-2xl text-base font-medium">Student ID: {student_id}</h3>
                <h3 className="sm:text-2xl text-base font-medium">Year: {year}</h3>
                <h3 className="sm:text-2xl text-base font-medium">Semester: {semester}</h3>
                <h3 className="sm:text-2xl text-base font-medium">Session: {session}</h3>
                <h3 className="sm:text-2xl text-base font-medium">Department: {dept_name}</h3>
              </td>
              <td className="border border-slate-300 py-2 px-1">
                <h3  className="sm:text-2xl text-base font-medium">{`${course_teacher} ${title} Department of ${t_dept} ${institution}`}</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <h3 className="font-medium mt-5 sm:text-2xl text-base">Submission Date: {moment(date).format('LL')}</h3>
      </div>
        </div>
    </div>
  );
};

export default Template;
