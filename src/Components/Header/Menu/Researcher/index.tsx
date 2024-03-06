import { useState, useContext, useEffect } from 'react';
import Loading from '../../../Loading';
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../Context/AppContext";
import "./index.css"


function Researcher(props: any) {
    const [searchTerm, setSearchTerm] = useState("");
    const [display, setDisplay] = useState(true);
    const { IrAoItem } = useContext(AppContext);
    const { NovoItem } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (display === false) {
          const handleScroll = () => {
            setDisplay((prevDisplay) => !prevDisplay);
          };
          
          window.addEventListener('scroll', handleScroll);
          
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }
      }, [display]);
      

    const filteredProducts = props.data?.filter((product: any) =>
        product.productName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function getProduct(product: any) {
        const clusterHighlights = product.clusterHighlights
        const productClusters = product.productClusters
        const result = Object.entries({ ...clusterHighlights, ...productClusters }).reduce((acc: any, [key, value]) => {
            if (!acc.hasOwnProperty(key)) {
                acc[key] = value;
            }
            return acc;
        }, {});

        const newFlag = Object.entries(result).map(([key, value]) => {
            return { id: key, label: value };
        });
        const productItem = [
            {
                "productId": product?.productId,
                "productName": product?.productName,
                "productBrand": product?.brand,
                "productDescription": product?.description,
                "imageProduct": product?.items[0].images[0].imageUrl,
                "flags": newFlag,
                "ListPrice": product?.items[0].sellers[0].commertialOffer.ListPrice,
                "Price": product?.items[0].sellers[0].commertialOffer.Price,
                "installmentOptionsCount": product?.items[0].sellers[0].commertialOffer.PaymentOptions.installmentOptions[0].installments[2].count,
                "installmentOptionsValue": product?.items[0].sellers[0].commertialOffer.PaymentOptions.installmentOptions[0].installments[2].value
            }
        ]

        return productItem;
    }


    const pageProduct = (product: any) => {
        const productItem = getProduct(product);
        NovoItem();
        IrAoItem(productItem);
        navigate("/Producto");
    }

    if (!props.error) {
        return (
            !props.loading === true ?
                <div className={props.className ? "searchBox " + props.className : " searchBox"}>
                    <div className='group-input'>
                        <div className="box-input" style={{ display: display ? "none" : "flex" }}>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="box-input__content-button">
                                <button className="search-close" onClick={(e) => setDisplay(!display)}>
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0,0,256,256"><g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path></g></g></svg>
                                </button>
                                <div className="box-input__content">
                                    <ul className="box-input__content-um">
                                        <li><strong>Discover</strong></li>
                                        <li><a className='links' href="/">Jewelry</a></li>
                                        <li><a className='links' href="/">Gifts</a></li>
                                        <li><a className='links' href="/">Store Locator</a></li>
                                    </ul>
                                    <ul className="box-input__content-dois">
                                        <li><strong>Need Help?</strong></li>
                                        <li><a href="/">Contact Client Care</a></li>
                                        <li><a href="/">Call 800 843 3269</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button className="search" onClick={(e) => setDisplay(!display)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18C36 22.6107 34.2664 26.8166 31.4155 30.0013L47.4142 46L46 47.4142L30.0013 31.4155C26.8166 34.2664 22.6107 36 18 36ZM18 34C26.8366 34 34 26.8366 34 18C34 9.16344 26.8366 2 18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34Z" fill="black" />
                                <mask id="mask0_1230_395" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18C36 22.6107 34.2664 26.8166 31.4155 30.0013L47.4142 46L46 47.4142L30.0013 31.4155C26.8166 34.2664 22.6107 36 18 36ZM18 34C26.8366 34 34 26.8366 34 18C34 9.16344 26.8366 2 18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_1230_395)">
                                    <rect width="48" height="48" fill="black" />
                                </g>
                            </svg>

                            <img className="icon-hover" src="./imgs/search-icon.gif" width={"100%"} alt="" />
                        </button>
                    </div>

                    <div className='answer-search' style={{ display: !searchTerm ? "none" : "" }}>
                        {filteredProducts.map((product: any) => (
                            <div key={product.productId} style={{ display: !searchTerm ? "none" : "" }} onClick={() => pageProduct(product)}>
                                <img alt="" width="100%" src={product.items[0].images[0].imageUrl} />
                                <h4>{product.productName}</h4>
                                <p>{product.brand}</p>
                            </div>
                        ))}
                    </div>
                </div>
                : <Loading type="spinningBubbles" color="black" />
        );
    }
    return <></>
}

export default Researcher;
