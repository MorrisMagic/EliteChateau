import React from "react";
import Title from "../components/Title";

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <image src alt="" className="w-full md:max-w-[480px]" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-2xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            5470 Willms Station <br /> Suite 350 Washington, Tunis
          </p>
          <p className="text-gray-500">
            Tel : (21564848545) <br /> Email: hello@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
