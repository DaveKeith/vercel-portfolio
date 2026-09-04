import Link from 'next/link';
import { useState } from 'react';

import classes from '../../styles/modules/footer.module.scss';

const Footer = () => {
    const [showEmail, setShowEmail] = useState(0);
    const [showPhoneNum, setShowPhoneNum] = useState(0);

    const revealEmail = () => {
        if (showEmail === 0) {
            setShowEmail(1);
        } else {
            setShowEmail(0);
        }
    }

    const revealPhoneNum = () => {
        if (showPhoneNum === 0) {
            setShowPhoneNum(1);
        } else {
            setShowPhoneNum(0);
        }
    }

    return (
        <footer className={classes.footerClass} id="footer">
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/david-keith-70704989/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label='LinkedIn Profile'
                    >
                        <i className="bi bi-linkedin" aria-label="LinkedIn Profile" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/DaveKeith"
                        target="_blank"
                        rel="noreferrer"
                        aria-label='GitHub Profile'
                    >
                        <i className="bi bi-github" aria-label="GitHub Profile" />
                    </a>
                </li>
                <li>
                    <i className="bi bi-envelope" onClick={revealEmail} />
                    <span className={classes["my-email"]} style={{ transform: `scale(${showEmail})`, bottom: "20rem" }}>
                        d.keith78@yahoo.com
                    </span>
                </li>
                <li>
                    <i className='bi bi-phone' onClick={revealPhoneNum} />
                    <span className={classes["my-phone-number"]} style={{ transform: `scale(${showPhoneNum})`, bottom: "15rem" }}>
                        803-415-4207
                    </span>
                </li>
                <li>
                    <a href="https://docs.google.com/document/d/1TqaZfZuaU8a1mVuaSsYgJeyU2XZ359xHMD7R404Baz0/export?format=pdf" target="_blank" rel="noreferrer">
                        <div className={classes["resume-link"]}>
                            <div>
                                <div className="text-center">Resume</div>
                                <div className="text-center">Download</div>
                            </div>
                            <i className="bi bi-filetype-pdf" />
                        </div>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;