import React from "react";
import Images from "../assets/8.png";

export default function About(){
    return(

        <div className="About">

            <div class="box">
				<div class="img">
					<div class="imgborder">
				    </div>
                </div>

				<div class="imgbox">
						<img src={Images} alt="about page" />
				</div>
			
				
			</div>

            <div className="Textbox">
                <p>Text Converter is simple App build on React by Mr.<a className="active" target="blank" href="https://arjun-chhetri.epizy.com/"> Arjun Chhetri</a>. It is faster and helpful for those people who want to style their text by changing to uppercase, lowercase, removing extra spaces or you can convert to normal as you want.</p>
            

                <p className="copyRight">&#169; 2023- Build and Design by <a className="active" target="blank" href="https://arjun-chhetri.epizy.com/">Arjun Chhetri</a> </p>
            </div>
            
        </div>
      
    );
}