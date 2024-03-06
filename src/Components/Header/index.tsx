import React, { useRef, useState, useEffect } from "react";
import Loading from "../Loading";
import Logo from "../Logo";
import Researcher from "./Menu/Researcher";
import MenuContent from "./Menu";
import Minicart from "../MiniCart";
import FavoriteLink from "../FavoriteLink";
import Profile from "../Profile";
import "./header.css";
import Link from "../Link";
import ImageHover from "../ImageHover";
import { useWindowSize } from "../../Hooks/useWindowSize";


interface MenuProps {
  data: any;
  loading: boolean;
  error: any;
}

interface MinicartProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function Menu(props: MenuProps) {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isBlock, setisBlock] = useState(false);

  const window = useWindowSize();

  const handleMouseEnter: MinicartProps["onMouseEnter"] = () => {
    setIsHovered(true);
    document.body.classList.add("block");
  };

  const handleMouseLeave: MinicartProps["onMouseLeave"] = () => {
    setIsHovered(false);
    document.body.classList.remove("block");
  };


  useEffect(() => {
    fetch("./api/Menu.json", {
      headers: {
        Accept: "application/json"
      }
    }).then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    }).then(data => {
      setData(data);
    }).catch(error => {
      console.error("Error fetching data: ", error);
      setError(error);
    }).finally(() => {
      setLoading(false)
    })

  }, [])
 
  const MiniCartSvg: React.FC = () => {
    return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M6 18C6 28.0078 14 40 24 47.9985C34 40 42 27.9411 42 18C42 8.05887 33.9411 0 24 0C14.0589 0 6 8.05887 6 18ZM24 2C32.8366 2 40 9.16344 40 18C40 26.4333 33.4423 37.3927 23.9998 45.4074C14.5314 37.3763 8 26.4753 8 18C8 9.16344 15.1634 2 24 2ZM24 26C19.5817 26 16 22.4183 16 18C16 13.5817 19.5817 10 24 10C28.4183 10 32 13.5817 32 18C32 22.4183 28.4183 26 24 26ZM30 18C30 21.3137 27.3137 24 24 24C20.6863 24 18 21.3137 18 18C18 14.6863 20.6863 12 24 12C27.3137 12 30 14.6863 30 18Z" fill="black" />
          <mask id="mask0_1230_485" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="6" y="0" width="36" height="48">
            <path fillRule="evenodd" clipRule="evenodd" d="M6 18C6 28.0078 14 40 24 47.9985C34 40 42 27.9411 42 18C42 8.05887 33.9411 0 24 0C14.0589 0 6 8.05887 6 18ZM24 2C32.8366 2 40 9.16344 40 18C40 26.4333 33.4423 37.3927 23.9998 45.4074C14.5314 37.3763 8 26.4753 8 18C8 9.16344 15.1634 2 24 2ZM24 26C19.5817 26 16 22.4183 16 18C16 13.5817 19.5817 10 24 10C28.4183 10 32 13.5817 32 18C32 22.4183 28.4183 26 24 26ZM30 18C30 21.3137 27.3137 24 24 24C20.6863 24 18 21.3137 18 18C18 14.6863 20.6863 12 24 12C27.3137 12 30 14.6863 30 18Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1230_485)">
            <rect width="48" height="48" fill="black" />
          </g>
        </svg>
        <img className="icon-hover" width={"100%"} src="./imgs/store-locator.gif" alt="" />
      </>
    );
  };


  const handleClick = () => {
    setisBlock(!isBlock);
    setIsHovered(!isHovered);
    !isHovered === true ? document.body.classList.add("block") : document.body.classList.remove("block");
  };

  if (!error) {

    return (
      <header ref={headerRef} className="sticky">
        <div className="header_child">
          {
            <div className="container head">
              <div className="groupResearch">

                <Researcher className="desktop" data={props.data} loading={props.loading} error={props.error} />
                <Link className="MiniCartSvg" href="/" text="" >
                  <MiniCartSvg />
                </Link>
                <Link className="groupResearch__ContactUs" href="/" text="" >
                  <ImageHover className="groupResearch__ContactUs-img">
                    <img src="https://media.tiffany.com/is/content/tiffanydm/Concierge?$tile$&" alt="" width={"16px"} height={"16px"} />
                    <img src="https://media.tiffany.com/is/content/tiffanydm/customer-service?$tile$&" alt="" width={"16px"} height={"16px"} />
                  </ImageHover>
                  Contact Us
                </Link>
              </div>
              <Logo />
              <div className="groupProfile__content">
                <div className={isHovered ? "groupProfile fixed" : "groupProfile"}>
                  <Link className="groupResearch__ContactUs" href="/" text="" >
                    <ImageHover className="groupResearch__ContactUs-img">
                      <img src="https://media.tiffany.com/is/content/tiffanydm/Appointment?$tile$&" alt="" width={"16px"} height={"16px"} />
                      <img src="https://media.tiffany.com/is/content/tiffanydm/book-an-apppointment?$tile$&" alt="" width={"16px"} height={"16px"} />
                    </ImageHover>
                    Book an Appointment
                  </Link>
                  <Profile />
                  <FavoriteLink />
                  <div className="Minicart-box__button"
                    onClick={handleClick}
                    onMouseEnter={window.width && window.width > 900 ? handleMouseEnter : undefined}
                    onMouseLeave={window.width && window.width > 900 ? handleMouseLeave : undefined}
                  >
                    <Minicart />
                  </div>
                </div>
              </div>
            </div>
          }
          {!loading === true ? <MenuContent api={data} /> : <Loading type="spinningBubbles" color="black" />}
        </div>
        <Researcher className="mobile" data={props.data} loading={props.loading} error={props.error} />
      </header>
    );
  }
  return <></>;
}

export default Menu;
