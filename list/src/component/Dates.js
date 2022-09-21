


const Dates = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()
    const date = today.getDate()
    const day = today.getDay();
    const week = ["일", "월", "화", "수", "목", "금", "토"]
    return (
        <div>
            {year}년&nbsp;
            {month}월&nbsp;
            {date}일&nbsp;
            {week[day]}
        </div>
    );
}



export default Dates;