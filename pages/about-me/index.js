import Image from "next/image";
import { Fragment } from "react";
import Headline from "../../components/header/headline";
import { withRouter } from "next/router";

const AboutMe = () => {
    return <Fragment>
        <Headline text={"About Me"} />
        <section className="content me">
            <div className="me--details">
                <div className="me--img me--img__pic1">
                    <Image 
                        src="/imgs/davekeithpic.jpg" 
                        alt="Dave Keith" 
                        width={200} 
                        height={200} 
                    />
                </div>
                <div>
                    <p>
                        <span>{"Hi, I'm Dave Keith  "}</span> 
                        {"  (with my dog Loopy, an American Eskimo Dog mix and a good boy). I go by David as well but I've noticed David Keith is a much more common profile name. I'm a software developer with experience in a wide array of technologies, accustomed to working in a wide array of work environments. On top of that, I'm very ambitious and willing to learn new technologies."}
                    </p>
                </div>
            </div>
            <div className="me--details me--alt-bg">
                <p>
                    <span>{"I'm from Charlotte, North Carolina.  "}</span>  
                    {"  Moved here when I was five years old, lived here most of my life, and currently live here.  In the past I've lived in Raleigh while attending college at NC State and later for MetLife, Mayport (near Jacksonville, Florida) when I was in the Navy, and New Hampshire for my role at Liberty Mutual."}
                </p>
                <div className="me--img me--img__pic2">
                    <Image 
                        src="/imgs/charlotte.jpg" 
                        alt="Charlotte" 
                        width={384} 
                        height={240} 
                    />
                </div>
            </div>
            <div className="me--details me--rv-col">
                <div className="me--img me--img__pic3">
                    <Image 
                        src="/imgs/cg64.jpg" 
                        alt="USS Gettysburg" 
                        width={338} 
                        height={225} 
                    />
                </div>
                <div>
                    <p>
                        <span>{"I'm a Navy Veteran.  "}</span>
                        {"  I was stationed at Naval Station Mayport from 2010-2014 and served aboard a frigate called the USS Underwood (FFG36) and a cruiser called the USS Gettysburg (CG64)."}
                    </p>
                    <p>{"On the USS Underwood, we deployed to the Caribbean and to the Pacific side of South America (via the Panama Canal).  We were able to visit numerous countries such as Panama, Colombia, Chile, Jamaica, Trinidad and Tobago, Curacao, and Honduras."}</p>
                    <p>{"On the USS Gettysburg, we deployed to the Persian Gulf as part of a carrier group.  We stopped in Marseilles, France en route and while in the Persian Gulf, made several port visits to Bahrain and Dubai.  My enlistment contract ended in the middle of that deployment, and I was flown to a carrier in a helicopter and launched off the aircraft carrier in a cargo plane."}</p>
                </div>
            </div>
        </section>
    </Fragment>
}

export default withRouter(AboutMe);