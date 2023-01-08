import React from "react";

const Preloader: React.FC<any> = () => {
  return (
    <div className="preloader">
      <div className="preloader-inner">
        <div className="preloader-icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
