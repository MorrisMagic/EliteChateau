import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px] " src="" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born of a passion for innovation and a desire to
            revolution and discover
          </p>
          <p>
            bla bla bla blabla blabla blabla blabla blabla blabla blabla blabla
            blabla blabla blabla blabla blabla blabla blabla blabla blabla
            blabla blabla blabla blabla blabla blabla blabla blabla blabla
            blabla blabla blabla blabla blabla blabla blabla blabla blabla
            blabla blabla blabla blabla blabla blabla blabla blabla blabla
            blabla blabla bla bla blabla blabla bla
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our Mission to bla bla bla bla
            blablablablablablablablablablablablablablablablablablablablablablablablablabla
          </p>
        </div>
      </div>
      <div className="mt-32">
        <NewsLetterBox />
      </div>
    </div>
  );
}

export default About;
