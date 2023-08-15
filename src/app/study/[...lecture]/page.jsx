"use client";

const Lecture = ({ params }) => {
  //   Suppose you are trying to access => http://localhost:3000/study/1788a/u6uhxsl/abc-1
  console.log(params.lecture);
  //   [ '1788a', 'u6uhxsl', 'abc-1' ]
  const relURL = params.lecture.join("/");

  return (
    <div>
      <h1>Lecture - {relURL}</h1>
    </div>
  );
};

export default Lecture;
