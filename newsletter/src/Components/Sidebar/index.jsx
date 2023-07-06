import { useState } from "react"
import { FiX } from "react-icons/fi"
import MenuSidebar from "./MenuSidebarFreatures"
import ButtonSidebar from "./ButtonSidebar"
import RegisterButtonSidebar from "./RegisterButton"
import MenuFreaturesSidebar from "./MenuFreatures"
import MenuCompanySidebar from "./MenuCompanySidebar"

export default function Sidebar({ onClose }) {
    const [menuFeaturesSidebar, setMenuFeaturesSidebar] = useState(false)
    const [menuCompanySidebar, setMenuCompanySidebar] = useState(false)


    return (
        <div className="absolute  bg-[#b9b0b0] right-0 top-0 flex flex-col grow-[2] h-full w-[75%] basis-96 px-9 z-50">
            <FiX className="absolute right-2 top-2 text-5xl" onClick={onClose}/>
            <div className="mt-20 ">
                <MenuSidebar setMenu={() => setMenuFeaturesSidebar(!menuFeaturesSidebar)}>
                    Features
                    {menuFeaturesSidebar ? (
                        <img className="ml-2" src="../../../images/icon-arrow-up.svg" alt="" />
                    ) : (
                        <img className="ml-2" src="../../../images/icon-arrow-down.svg" alt="" />
                    )}
                </MenuSidebar>

                {menuFeaturesSidebar
                ? (
                    <MenuFreaturesSidebar />
                ): null}

                <MenuSidebar setMenu={() => setMenuCompanySidebar(!menuCompanySidebar)}>
                    Company
                    {!menuCompanySidebar ? (
                        <img className="ml-2" src="../../../images/icon-arrow-down.svg" alt="" />
                    ) : (
                        <img className="ml-2" src="../../../images/icon-arrow-up.svg" alt="" />
                    )}
                </MenuSidebar>
                {menuCompanySidebar 
                ? (
                    <MenuCompanySidebar />
                ) : null}
                <ButtonSidebar>
                    Careers
                </ButtonSidebar>
                <ButtonSidebar>
                    About
                </ButtonSidebar>
            </div>
            <div className="flex flex-col items-center mt-5">
                <ButtonSidebar>
                    Login
                </ButtonSidebar>
                <RegisterButtonSidebar>
                    Register
                </RegisterButtonSidebar>
            </div>
        </div>
    )
}