import { Fragment } from "react";
import Headline from "../../components/header/headline";
import Image from "next/image";
import { withRouter } from "next/router";

const AboutTheSite = () => {
    return <Fragment>
        <Headline text={"About this Site"} />
        <section className="content">
            <div className="about--intro mb-5">
                {"Here's a bit of detail about the tech and inner workings of this site in particular"}
            </div>
            <div className="about--git mb-5">
                <i className="bi bi-github" aria-label="GitHub Profile" />
                <h3>GitHub</h3>
                <div>I want to start by mentioning that in addition to all the other projects on my <a href="https://github.com/DaveKeith" target="_blank" rel="noreferrer">GitHub</a> account, the source code for this site is on GitHub as well: <a href="https://github.com/DaveKeith/vercel-portfolio" target="_blank" rel="noreferrer">https://github.com/DaveKeith/vercel-portfolio</a>.</div>
            </div>
            <div className="about--react mb-5">
                <Image src="/svgs/react-logo.svg" alt="react-logo" width={200} height={200} />
                <h3>ReactJS</h3>
                <div>
                    <div><a href="https://reactjs.org" target="_blank" rel="noreferrer">ReactJS</a> relies on JSX components to render HTML elements to create a single page application.  This can be very convenient when needing to reuse various elements and their functionalities.  Also simplifies dynamically creating elements.</div>
                    <ul>
                        <li>
                            <h4>NextJS</h4>
                            <div>I see <a href="https://nextjs.org" target="_blank" rel="noreferrer">NextJS</a> as a framework that takes React to the next level.  With the various libraries offered by NextJS, we can improve our routing features (particularly dynamic routing), we can more easily utilize images, and we can even add additional HTML elements such as head and script.</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="about--css mb-5">
                <h3>CSS</h3>
                <div>A portfolio page should have great styling.  Fortunately, I have the skills in CSS (Cascading Style Sheets) to make this site look good.  Here are several notable features:</div>
                <ul>
                    <li>
                        <h4>SCSS</h4>
                        <div>SCSS is a preprocessor derived from SASS (hence the acronym Sassy CSS).  It allows use of variables, functions, and mixins which allow for more reusable and readable stylistic components.  My personal favorite use for it is in responsive design, the way that it eases the transition to various screen sizes without exponentially increasing the amount of CSS code needed.</div>
                    </li>
                    <li>
                        <h4>Bootstrap</h4>
                        <div>{"I like Bootstrap in that it's a well-documented, well-known CSS framework centered around modern design.  The documentation can be found here: "}<a href="https://getbootstrap.com" target="_blank" rel="noreferrer">https://getbootstrap.com</a>.  This site utilizes Bootstrap utilities for base features such as font styles, utilities (shorthand, simple, readable classes to modify an {"element’s"} appearance), and more advanced features such as a carousel.  Additionally, this site uses a sizable list of Bootstrap icons: <a href="https://icons.getbootstrap.com" target="_blank" rel="noreferrer">https://icons.getbootstrap.com</a>.</div>
                    </li>
                    <li>
                        <h4>Tailwind</h4>
                        <div>I implemented Tailwind, a util-based CSS package that allows quick HTML/JSX changes without needing to open a CSS file.  Also nice in that it deletes all unused classes, leaving the application lightweight and quick to load.</div>
                    </li>
                </ul>
            </div>
            <div className="about--hosting">
                <h3>Hosting</h3>
                <i className="bi bi-server" aria-label="Server" />
                <Image src="/vercel.svg" alt="vercel-logo" width={200} height={200} />
                <ul>
                    <li>
                        <h4>Vercel</h4>
                        <p>For the client side of this application, {"I'm"} hosting with <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>.  Why Vercel?  Well, I previously worked with GitHub Pages, but once I learned ReactJS, I wanted to show off those skills in a portfolio.  Unfortunately GitHub Pages did not support certain aspects of hosting a ReactJS application so I turned to Heroku to create my portfolio as it was a free resource and allowed me to show off my ReactJS skillset.</p>
                        <p>However, there were shortcomings with Heroku:</p>
                        <ul>
                            <li>The page took around 30 seconds to load.</li>
                            <li>It works independently from GitHub.  It would be nice if you could link the repositories somehow.</li>
                        </ul>
                        <p />
                        <p>Turns out that Vercel, the organization that brought us NextJS, also hosts for free (up to a certain point), and solves the issues that plagued me with Heroku.</p>
                    </li>
                    <li>
                        <h4>Firebase</h4>
                        <p>For the server portion of this application {"I'm"} using <a href="https://firebase.google.com" target="_blank" rel="noreferrer">Firebase</a> to host.  It made sense as my previous portfolio used a JSON data file in a static public folder, which functions differently in a NextJS app, and Firebase allows you to upload a JSON file.  </p>
                    </li>
                </ul>
            </div>
        </section>
    </Fragment>
}

export default withRouter(AboutTheSite);