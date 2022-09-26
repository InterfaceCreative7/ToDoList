import Dates from "./Dates";
import Weather from "./Weather";
import classes from "./Header.module.css"

const Header = () => {
    return (
        <div className={classes.header}>
            <Dates />
            <Weather />
        </div>
    )
}

export default Header;