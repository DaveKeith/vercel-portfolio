import classes from '../../styles/modules/headline.module.scss';

const Headline = (props) => {
    return <h1 className={classes.header}>{props.text}</h1>
}

export default Headline;