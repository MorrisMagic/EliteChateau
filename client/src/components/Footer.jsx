import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <p className="sm:text-2xl text-xl font-medium">EliteChateau</p>
          <p className="w-full md:w-2/3 text-gray-600">
            Welcome to EliteChateau – your go-to destination for curated fashion
            and lifestyle essentials. Discover a blend of timeless classics,
            modern trends, and top-rated bestsellers, all crafted to elevate
            your style. Shop with confidence and enjoy an exclusive shopping
            experience designed to inspire.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+216 56609009</li>
            <li>contact@EliteChateau.com</li>
            <li>@youssefhabbachi</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ elitechateau.com - All Right Reseverd.
        </p>
      </div>
    </div>
  );
}

export default Footer;
