import { FooterSection } from "./styles";
import Image from "next/image";
import codeBoost from "../../../public/assets/logo-codeboost.svg";

export function Footer() {
    return (
        <FooterSection>
            <div className="container">
                <div className="left">
                    <strong>Módulo JavaScript</strong>
                    <p>Consumindo e exibindo dados de uma API</p>
                </div>

                <Image src={codeBoost} alt="codeBoost"/>
            </div>
        </FooterSection>
    );
}