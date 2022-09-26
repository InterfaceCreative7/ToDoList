import classes from "./Dates.module.css"


const Dates = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();
    const week = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
    return (
        <div className={classes.date}>
            {year}년&nbsp;
            {month}월&nbsp;
            {date}일&nbsp;
            {week[day]}
        </div>
    );
}



export default Dates;