import { Fragment } from "react";
import Headline from "../../components/header/headline";

const HomePage = () => {
    return <Fragment>
        <Headline text={"Home Page"} />
        <section className="content">Hello World!</section>
    </Fragment>
}

export default HomePage;