import React from "react";

function NewsLetterBox() {
  const onSumbitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subcribe now & get 20% off
      </p>
      <p className="text-gray-600 mt-3">
        Subscribe now and enjoy 20% off your next purchase! Don’t miss out on
        this exclusive offer.
      </p>
      <form
        onSubmit={onSumbitHandler}
        action=""
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button className="bg-black text-white text-xs px-10 py-4">
          SUBCRIBE
        </button>
      </form>
    </div>
  );
}

export default NewsLetterBox;
