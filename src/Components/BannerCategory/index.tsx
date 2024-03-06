import React from "react";
import "./index.css";

function Banner() {

    return (
        <div className="d-grid-1fr-1fr container-banner-category">
            <div className="text-center d-flex justify-center align-center">
                <div className="Container___texGroup d-flex flex-column justify-center align-center">
                    <div >
                        <h4>Presentes Para Ela</h4>
                    </div>
                    <div>
                        <p>
                            O presente de hoje é a herança familiar de amanhã. Conheça nossa seleção para encontrar o presente perfeito.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <picture>
                    <img src="imgs/anelBanner.webp" alt="Banner" className="banner-collection__image" />
                </picture>
            </div>
        </div>
    );
}

export default Banner;
