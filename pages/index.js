import { Fragment } from "react";
import { withRouter } from "next/router";
import Headline from "../components/header/headline";
import Link from "next/link";

const HomePage = () => {
    return <Fragment>
        <Headline text={"Welcome to the Home Page!"} />
        <section className="content">
            <p className="text-center">Here we break down the site and {"it's"} features.</p>
            <div className="home-grid">
                <Link href='/about-me' passHref>
                    <div className="home-grid__item home-grid__item--left">
                        <div>
                            <h2>About Me</h2>
                            <p>Get to know a little about my background.</p>
                        </div>
                    </div>
                </Link>
                <Link href='/about-the-site' passHref>
                    <div className="home-grid__item home-grid__item--right">
                        <div>
                            <h2>About The Site</h2>
                            <p>Shows what technologies go into making this site.</p>
                        </div>
                    </div>
                </Link>
                <Link href='/projects' passHref>
                    <div className="home-grid__item home-grid__item--left">
                        <div>
                            <h2>Projects</h2>
                            <p>Gives a list of some of my past projects.</p>
                        </div>
                    </div>
                </Link>
                <Link href='/resume' passHref>
                    <div className="home-grid__item home-grid__item--right">
                        <div>
                            <h2>Resume</h2>
                            <p>Just in case you {"don't"} have my resume on hand.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    </Fragment>
}

export default withRouter(HomePage);