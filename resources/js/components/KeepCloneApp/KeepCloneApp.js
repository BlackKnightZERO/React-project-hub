import KeepContainer from "./KeepContainer";
import KeepModal from './KeepModal'

import { KeepProvider } from "./Context/KeepContext";

const KeepCloneApp = () => {

    return (
        <>
            <KeepProvider>
                <KeepContainer />
                <KeepModal />
            </KeepProvider>
        </>       
    )

}

export default KeepCloneApp