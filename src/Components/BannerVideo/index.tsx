import React, { useState } from "react";
import "./BannerVideo.css";
import ImageClick from "../ImageClick";
import { useWindowSize } from "../../Hooks/useWindowSize";

type ArrayType = {
  src: string;
  poster: string;
};

const BannerVideo: React.FC = () => {
  const [mutedConst, setmutedConst] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const window = useWindowSize();


  const array: number | ArrayType =
    window.width && window.width < 900
      ? {
        src: "//media.tiffany.com/is/content/tiffanydm/ZOE_HARDWEAR_LIKEYOUMEANIT_Desktop-1",
        poster: "//media.tiffany.com/is/image/tiffanydm/ZOE_HARDWEAR_LIKEYOUMEANIT_Mobile-1?$tile$&amp;&amp;hei=900",
      }
      : {
        src: "//media.tiffany.com/is/content/tiffanydm/ZOE_HARDWEAR_LIKEYOUMEANIT_Mobile",
        poster: "//media.tiffany.com/is/image/tiffanydm/ZOE_HARDWEAR_LIKEYOUMEANIT_Desktop?$tile$&amp;&amp;hei=900",
      };


  const handleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };
  
  const handlemutedConst = () => {
    setmutedConst(!mutedConst);
  };

  const { src, poster } = array;

  return (
    <div className="container">
      <div className="container-box__video">
        <video
          style={{ zIndex: "-1", position: "relative" }}
          width="100%"
          height="100%"
          muted={mutedConst}
          loop
          playsInline
          disablePictureInPicture
          preload="auto"
          data-preload="true"
          src={src}
          className="load-lazily b-loaded"
          poster={poster}
          autoPlay={autoPlay ? true : false}
        ></video>
        <div className="box-video">
          <h2>This Is Tiffany HardWear</h2>
          <p>Our brand ambassadors redefine Tiffany HardWear in our latest campaign.</p>
          <a
            className="button-video cta secondary"
            href="https://www.tiffany.com/jewelry/shop/tiffany-hardwear/"
            target="_self"
          >
            Shop the Collection
          </a>
        </div>
        <div className="box-pause-play-mute">
          <ImageClick className="groupResearch__ContactUs-img">
            <button style={{ display: "none" }} onChange={handleAutoPlay}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="50px"
                height="50px"
                viewBox="0 0 256 256"
              >
                <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                  <g transform="scale(5.12,5.12)">
                    <path d="M25,2c-12.69141,0 -23,10.30859 -23,23c0,12.69141 10.30859,23 23,23c12.69141,0 23,-10.30859 23,-23c0,-12.69141 -10.30859,-23 -23,-23zM25,4c11.60938,0 21,9.39063 21,21c0,11.60938 -9.39062,21 -21,21c-11.60937,0 -21,-9.39062 -21,-21c0,-11.60937 9.39063,-21 21,-21zM16,15v20h7v-20zM27,15v20h7v-20zM18,17h3v16h-3zM29,17h3v16h-3z" />
                  </g>
                </g>
              </svg>
            </button>
            <button style={{ display: "none" }} onClick={handleAutoPlay}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="50px"
                height="50px"
                viewBox="0 0 256 256"
              >
                <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                  <g transform="scale(5.12,5.12)">
                    <path d="M25,2c-12.69141,0 -23,10.30859 -23,23c0,12.69141 10.30859,23 23,23c12.69141,0 23,-10.30859 23,-23c0,-12.69141 -10.30859,-23 -23,-23zM25,4c11.60938,0 21,9.39063 21,21c0,11.60938 -9.39062,21 -21,21c-11.60937,0 -21,-9.39062 -21,-21c0,-11.60937 9.39063,-21 21,-21zM18,13.25v23.5l1.5,-0.875l17,-10l1.46875,-0.875l-1.46875,-0.875l-17,-10zM20,16.75l14,8.25l-14,8.25z" />
                  </g>
                </g>
              </svg>
            </button>
          </ImageClick>
          <ImageClick className="groupResearch__ContactUs-img">
            <button onClick={handlemutedConst} style={{ display: !mutedConst ? "none" : "unset" }}>
              <svg version="1.1" style={{ scale: "0.5" }} xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0,0,256,256">
                <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                  <g transform="scale(5.12,5.12)">
                    <path d="M24.15625,3c-0.30469,0 -0.60547,0.0625 -0.90625,0.15625c-0.60547,0.19141 -1.18359,0.55078 -1.6875,1.0625l-11.75,11.75h-6.8125c-1.66797,0 -3.03125,1.36328 -3.03125,3.03125v12c0,1.66797 1.36328,3.03125 3.03125,3.03125h6.8125l11.71875,11.65625c1.11719,1.12109 2.55078,1.61328 3.71875,1.0625c1.17578,-0.55469 1.75,-1.89062 1.75,-3.4375v-37c0,-1.5 -0.76562,-2.74609 -1.9375,-3.15625c-0.29297,-0.10156 -0.60156,-0.15625 -0.90625,-0.15625zM24.1875,5c0.10156,0 0.17969,0.00781 0.25,0.03125c0.28516,0.09766 0.5625,0.35156 0.5625,1.28125v37c0,1.06641 -0.35156,1.54297 -0.59375,1.65625c-0.24219,0.11328 -0.73047,0.125 -1.5,-0.65625l-12.59375,-12.59375c-0.01953,-0.01172 -0.04297,-0.02344 -0.0625,-0.03125c0.07422,0.06641 -0.25,-0.56641 -0.25,-0.9375v-11.5c0,-0.37109 0.33594,-1.01172 0.25,-0.9375c0.02344,-0.01953 0.04297,-0.03906 0.0625,-0.0625l12.65625,-12.625c0.46875,-0.47266 0.91016,-0.62109 1.21875,-0.625zM3,18.03125h5.1875c-0.12891,0.38281 -0.1875,0.80078 -0.1875,1.21875v11.5c0,0.41797 0.0625,0.83203 0.1875,1.21875h-5.1875c-0.53906,0 -0.96875,-0.42969 -0.96875,-0.96875v-12c0,-0.53906 0.42969,-0.96875 0.96875,-0.96875zM31.90625,18.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.375,0.06641 -0.67578,0.33984 -0.78125,0.70313c-0.10547,0.36719 0.00391,0.75781 0.28125,1.01563l4.28125,4.28125l-4.28125,4.28125c-0.39844,0.39844 -0.39844,1.03906 0,1.4375c0.39844,0.39844 1.03906,0.39844 1.4375,0l4.28125,-4.28125l4.28125,4.28125c0.39844,0.39844 1.03906,0.39844 1.4375,0c0.39844,-0.39844 0.39844,-1.03906 0,-1.4375l-4.28125,-4.28125l4.28125,-4.28125c0.32422,-0.30078 0.41016,-0.77734 0.21484,-1.17187c-0.19141,-0.39844 -0.625,-0.61719 -1.05859,-0.54687c-0.22266,0.02344 -0.43359,0.125 -0.59375,0.28125l-4.28125,4.28125l-4.28125,-4.28125c-0.20703,-0.22266 -0.50781,-0.33594 -0.8125,-0.3125z">
                    </path>
                  </g>
                </g>
              </svg>
            </button>
            <button style={{ display: mutedConst ? "none" : "unset" }} onClick={handlemutedConst}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                style={{ scale: "0.5" }}
                width="50px"
                height="50px"
                viewBox="0 0 256 256"
              >
                <g
                  fill="#000000"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: 'normal' }}
                >
                  <g transform="scale(5.12,5.12)">
                    <path
                      d="M24.15625,3c-0.30469,0 -0.60547,0.0625 -0.90625,0.15625c-0.60547,0.19141 -1.18359,0.55078 -1.6875,1.0625l-11.75,11.75h-6.8125c-1.66797,0 -3.03125,1.36328 -3.03125,3.03125v12c0,1.66797 1.36328,3.03125 3.03125,3.03125h6.8125l11.71875,11.65625c1.11719,1.12109 2.55078,1.61328 3.71875,1.0625c1.17578,-0.55469 1.75,-1.89062 1.75,-3.4375v-37c0,-1.5 -0.76562,-2.74609 -1.9375,-3.15625c-0.29297,-0.10156 -0.60156,-0.15625 -0.90625,-0.15625zM24.1875,5c0.10156,0 0.17969,0.00781 0.25,0.03125c0.28516,0.09766 0.5625,0.35156 0.5625,1.28125v37c0,1.06641 -0.35156,1.54297 -0.59375,1.65625c-0.24219,0.11328 -0.73047,0.125 -1.5,-0.65625l-12.59375,-12.59375c-0.01953,-0.01172 -0.04297,-0.02344 -0.0625,-0.03125c0.07422,0.06641 -0.25,-0.56641 -0.25,-0.9375v-11.5c0,-0.37109 0.33594,-1.01172 0.25,-0.9375c0.02344,-0.01953 0.04297,-0.03906 0.0625,-0.0625l12.65625,-12.625c0.46875,-0.47266 0.91016,-0.62109 1.21875,-0.625zM38.28125,6.8125c-0.4375,0.07422 -0.77344,0.42969 -0.82422,0.87109c-0.04687,0.44141 0.19531,0.86328 0.60547,1.03516c5.94922,3 10,9.15234 10,16.28125c0,7.12891 -4.05078,13.28125 -10,16.28125c-0.36719,0.125 -0.625,0.45313 -0.66797,0.83594c-0.04297,0.38672 0.14063,0.76172 0.47266,0.96484c0.32813,0.19922 0.74609,0.19141 1.07031,-0.01953c6.60156,-3.33203 11.125,-10.16797 11.125,-18.0625c0,-7.89453 -4.52344,-14.73047 -11.125,-18.0625c-0.17187,-0.09766 -0.36719,-0.14062 -0.5625,-0.125c-0.03125,0 -0.0625,0 -0.09375,0zM34.71875,12.125c-0.44531,0.05469 -0.80078,0.40234 -0.86328,0.84766c-0.06641,0.44141 0.17188,0.875 0.58203,1.05859c3.90234,2.10547 6.5625,6.21484 6.5625,10.96875c0,4.73828 -2.64844,8.85938 -6.53125,10.96875c-0.48437,0.26563 -0.66016,0.875 -0.39062,1.35938c0.26563,0.48438 0.875,0.66016 1.35938,0.39063c4.50781,-2.44922 7.5625,-7.23437 7.5625,-12.71875c0,-5.5 -3.0625,-10.30469 -7.59375,-12.75c-0.17969,-0.10156 -0.38672,-0.14453 -0.59375,-0.125c-0.03125,0 -0.0625,0 -0.09375,0zM3,18.03125h5.1875c-0.12891,0.38281 -0.1875,0.80078 -0.1875,1.21875v11.5c0,0.41797 0.0625,0.83203 0.1875,1.21875h-5.1875c-0.53906,0 -0.96875,-0.42969 -0.96875,-0.96875v-12c0,-0.53906 0.42969,-0.96875 0.96875,-0.96875zM30.53125,18.40625c-0.54687,0 -0.96875,0.42187 -0.96875,0.96875v11.25c0,0.54687 0.42188,0.96875 0.96875,0.96875h-5.15625c0.125,-0.41797 0.1875,-0.83203 0.1875,-1.21875v-11.5c0,-0.41797 -0.0625,-0.83594 -0.1875,-1.25zM20.03125,23.0625c-0.33984,0 -0.625,0.27734 -0.625,0.625v5.1875c0,0.34375 0.28516,0.625 0.625,0.625h11.625c0.33984,0 0.625,-0.28125 0.625,-0.625v-5.1875c0,-0.34766 -0.28516,-0.625 -0.625,-0.625zM21.40625,24.4375v2.9375h-1.75v-2.9375zM25.96875,24.4375v2.9375h-1.75v-2.9375zM30.53125,24.4375v2.9375h-1.75v-2.9375zM21.40625,28v2.9375h-1.75v-2.9375zM25.96875,28v2.9375h-1.75v-2.9375zM30.53125,28v2.9375h-1.75v-2.9375z"
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
          </ImageClick>
        </div>
      </div>
    </div>
  );
};

export default BannerVideo;
