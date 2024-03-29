import "./index.css"

function Profile() {
    return (
        <div className="Profile">
            <a href="/">
                <picture>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 12C12 18.6274 17.3726 24 24 24C30.6274 24 36 18.6274 36 12C36 5.37258 30.6274 0 24 0C17.3726 0 12 5.37258 12 12ZM34 12C34 17.5228 29.5228 22 24 22C18.4772 22 14 17.5228 14 12C14 6.47715 18.4772 2 24 2C29.5228 2 34 6.47715 34 12ZM6 48C6 38.0589 14.0589 30 24 30C33.9411 30 42 38.0589 42 48H44C44 36.9543 35.0457 28 24 28C12.9543 28 4 36.9543 4 48H6Z" fill="black" />
                        <mask id="mask0_1230_630" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="4" y="0" width="40" height="48">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 12C12 18.6274 17.3726 24 24 24C30.6274 24 36 18.6274 36 12C36 5.37258 30.6274 0 24 0C17.3726 0 12 5.37258 12 12ZM34 12C34 17.5228 29.5228 22 24 22C18.4772 22 14 17.5228 14 12C14 6.47715 18.4772 2 24 2C29.5228 2 34 6.47715 34 12ZM6 48C6 38.0589 14.0589 30 24 30C33.9411 30 42 38.0589 42 48H44C44 36.9543 35.0457 28 24 28C12.9543 28 4 36.9543 4 48H6Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_1230_630)">
                            <rect width="48" height="48" fill="black" />
                        </g>
                    </svg>

                    <img className="icon-hover" src="./imgs/profile.gif" alt="" />
                </picture>
            </a>
        </div>
    )
}

export default Profile;