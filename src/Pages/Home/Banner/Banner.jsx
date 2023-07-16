import React, { useRef } from "react";
import { Link } from "react-router-dom";
import style from './Banner.module.css'

const Banner = () => {

  return (
<div className={style.custom}>
<div className="container mx-auto">
      <div className="flex items-center justify-center w-full h-[90vh]">
        <Link to="/form" className="border py-2 px-6 rounded-lg text-white font-medium hover:bg-white hover:text-black transition-all">
          Print pdf
        </Link>
      </div>
    </div>
</div>
  );
};

export default Banner;
