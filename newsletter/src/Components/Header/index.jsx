import { useState } from "react";
import ButtonHeader from "./ButtonHeader";
import ButtonArrow from "./ButtonArrow";
import RegisterButton from "./RegisterButton";
import MenuFreature from "./MenuFreature";
import MenuCompany from "./MenuCompany";
import { FaBars } from 'react-icons/fa'
import Sidebar from "../Sidebar";

export default function Header() {
   const [arrow, setArrow] = useState(false)
   const [menuCompany, setMenuCompany] = useState(false)
   const [sideBar, setSideBar] = useState(false)

    return (
        <div 
            className=" px-5 xl:px-9 h-16 lg:h-20 flex flex-row
            w-full items-center justify-between"
        >
            <div className="flex justify-between w-full md:hidden ">
                <span
                    className="inline md:hidden mr-12 font-[1000] text-3xl"
                >
                    SNAP
                </span>
                <FaBars onClick={() => setSideBar(!sideBar)} className="text-4xl"/>
                {sideBar ? (
                    <Sidebar onClose={() => setSideBar(!sideBar)}/>
                ) : null}
            </div>
            <div className="hidden md:flex">
                <span
                    className="mr-12 font-[1000] text-3xl"
                >
                    SNAP
                </span>
                <span className="flex gap-8">
                    <ButtonArrow setArrow={() => setArrow(!arrow)}>
                        Features 
                        {arrow ? (
                            <img className="inline ml-1" src="../../../images/icon-arrow-up.svg" alt="" />
                        ) : (
                            <img className="inline ml-1" src="../../../images/icon-arrow-down.svg" alt="" />
                        )}
                        {arrow ? (
                            <MenuFreature />
                            
                        ) : null}
                    </ButtonArrow>
                    <ButtonArrow setArrow={() => setMenuCompany(!menuCompany)}>
                        Company 
                        {menuCompany ? (
                            <img className="inline ml-1" src="../../../images/icon-arrow-up.svg" alt="" />
                        ) : (
                            <img className="inline ml-1" src="../../../images/icon-arrow-down.svg" alt="" />
                        )}
                        {menuCompany ? (
                            <MenuCompany />
                        ) : null}
                    </ButtonArrow>
                    <ButtonHeader>Careers</ButtonHeader>
                    <ButtonHeader>About</ButtonHeader>
                </span>
            </div>
            <div className="hidden md:flex gap-10"> 
                <ButtonHeader>Login</ButtonHeader>
                <RegisterButton>Registrar</RegisterButton>
            </div>
        </div>
    )
}

// '../../../images/icon-arrow-down.svg'