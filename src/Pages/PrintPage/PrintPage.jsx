import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import Template from "../../Components/Template/Template";
import FormModal from "../../Components/Modal/FormModal";

const PrintPage = () => {
  const [data, setData] = useState({});
  const [isForm, setIsForm] = useState(false);
  const pdf = useRef();

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const course_title = form.course_title.value;
    const course_code = form.course_code.value;
    const student_id = form.student_id.value;
    const session = form.session.value;
    const year = form.year.value;
    const semester = form.semester.value;
    const dept_name = form.dept_name.value;
    const course_teacher = form.course_teacher.value;
    const title = form.title.value;
    const institution = form.institution.value;
    const date = form.date.value;
    const t_dept = form.t_dept.value;
    const info = {
      name,
      course_title,
      course_code,
      student_id,
      session,
      year,
      semester,
      dept_name,
      course_teacher,
      title,
      institution,
      date,
      t_dept,
    };
    setData(info);
    setIsForm(true);
  };

  return (
    <div className="container mx-auto">
      {!isForm ? (
        <FormModal handleForm={handleForm} />
      ) : (
        <>
          {" "}
          <div className="">
            <h2 className="text-center font-medium text-2xl my-4 text-[#2D7136]">Do not worry about Design!!</h2>
          <div ref={pdf}>
            <Template data={data} />
          </div>
          </div>
          <ReactToPrint
            trigger={() => ( <div className="text-center py-7">
              <button className="py-2 px-6 border rounded-lg bg-blue-500 text-white font-medium text-base">
                Click to print
              </button></div>
            )}
            content={() => pdf.current}
          />
        </>
      )}
    </div>
  );
};

export default PrintPage;
