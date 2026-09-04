import Link from 'next/link';
import { useRouter } from 'next/router';

function HeaderNavLink({text, hLink}){
    const router = useRouter();

    if(
        text === "Home" && router.pathname == "/" ||
        text === "About Me" && router.pathname == "/about-me" ||
        text === "About The Site" && router.pathname == "/about-the-site" ||
        text === "Projects" && router.pathname == "/projects" ||
        text === "Resume" && router.pathname == "/resume"
    ){
        return <li key={text} className='active-nav'>
                <Link href={hLink} passHref>
                    <div>
                        <div>{text}</div>
                        <div className='active-indicator' />
                    </div>
                </Link>
            </li>
    }else{
        return <li key={text}>
                <Link href={hLink} passHref>
                    <div>
                        <div>{text}</div>
                        <div className='active-indicator' />
                    </div>
                </Link>
            </li>
    }
}

export default HeaderNavLink;