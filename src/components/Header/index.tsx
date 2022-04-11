import { SectionHeader } from "./styles";
import Image from "next/image";
import logo from "../../../public/assets/logo.svg";

export function Header() {
    return (
       <SectionHeader>
           <div className="container">
               <Image src={logo} title="logo" alt="logo"/>

               <span>Case Study -&gt; Code<strong>Boost</strong></span>
           </div>
       </SectionHeader>
    );
}