import "./index.css"

function CloseButton({ onClick }: any) {
  return (
    <>
      <button className="CloseButton" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="30" height="30" x="0" y="0" viewBox="0 0 357 357" xmlSpace="preserve" ><g><path d="M357 35.7 321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z" fill="#080808" opacity="1" data-original="#000000"></path></g></svg>
      </button>
    </>
  );
}

export default CloseButton;
