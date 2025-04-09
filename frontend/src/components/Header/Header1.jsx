import React from "react";
import "./Header1.css"
import enIcon from "../../assets/en.png"
import viIcon from "../../assets/vi.png"


const Header1 = () => {
    return (
        <div class="H1_container">
            <ul>
                <li>
                    <a href="">Tạp chí khoa học và đào tạo                                              |</a>
                </li>
                <li>
                    <a href="">Tuyển dụng   |</a>
                </li>
                <li>
                    <a href="">Doanh nghiệp   |</a>
                </li>
                <li>
                    <a href="">Góp ý </a>
                </li>
                <li>
                    <a href="">
                    <img src={viIcon}/>
                    <span>Tiếng Việt</span>
                    </a>
                </li>
                <li>
                    <a href="">
                    <img src={enIcon}/>
                    <span>Tiếng Anh</span>
                    </a>
                </li>
            </ul>
        </div>
    );
} 

export default Header1;