import CloseButton from "./CloseButton";
import ContainerInstructionsGuide from "./ContainerInstructionsGuide";
import "./index.css"
import TabLayout from "./TabLayout";

function SizeModal({setModal, Modal} : any) {
    return (
        <div className={`modal-container ${Modal ? 'visible' : ''}`}>
        <div className="modal-content">
            <CloseButton onClick={() => setModal(false)}/>
            <TabLayout/>
            <ContainerInstructionsGuide/>
        </div>
        </div>
    )
}

export default SizeModal;