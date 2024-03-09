import "./index.css"

function FavoriteLink() {
    return (
        <div className="FavoriteLink">
            <picture>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.1008 8.57478C14.7925 3.72701 18.961 0 24 0C29.0412 0 33.2111 3.73024 33.9001 8.58109C39.3458 9.03065 43.9994 14.451 43.9994 21.3324C43.9994 32.3779 33.9996 42.9977 23.9997 47.9964C13.9897 42.9912 4 32.3779 4 21.3324C4 14.453 8.65646 9.02787 14.1008 8.57478ZM31.8855 8.64387C31.2414 4.87148 27.956 2 24 2C20.0465 2 16.7629 4.86774 16.1157 8.6365C18.3411 8.95908 20.617 10.1409 22.6978 12.4053L23.0718 12.8266C23.0718 12.8266 23.6959 13.585 23.9997 14.0035C24.3041 13.5855 24.9293 12.828 24.9293 12.828L25.304 12.4072C27.3861 10.1475 29.6614 8.9671 31.8855 8.64387ZM23.9998 45.7459C34.1712 40.3251 41.9994 30.3412 41.9994 21.3326C41.9994 11.1772 31.8938 6.56177 25.6164 15.1811L23.9972 17.4044L22.3813 15.1787C16.1176 6.55104 6 11.1747 6 21.3326C6 30.3435 13.8217 40.3208 23.9998 45.7459Z" fill="black" />
                </svg>
                <img className="icon-hover" alt="" width={"100%"} src="./imgs/wishlisticon-empty.gif" />
            </picture>
        </div>
    )
}

export default FavoriteLink;