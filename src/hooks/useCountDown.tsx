import { useState } from "react"

const useCountDown = ( date:any ) => {
    const [day, setDay] = useState<number | any>();
    const [hour, setHour] = useState<number | any>();
    const [minutes, setMinutes] = useState<number | any>();
    const [second, setSecond] = useState<number | any>();
 const countDown = () =>{
    const countDate = new Date(date).getTime();

    const now = new Date().getTime();

    const interval = countDate - now;
    const second = 1000;
    const minutes = second *60;
    const hour =minutes *60;
    const day = hour *24;

    const dayNumber = Math.floor(interval/day)
    const hourNumber = Math.floor((interval%day)/ hour)
    const minuteNumber = Math.floor(interval%hour/minutes)
    const secondNumber = Math.floor(interval%minutes/second)
    setDay(dayNumber);
    setHour(hourNumber);
    setMinutes(minuteNumber);
    setSecond(secondNumber)
 }
 setInterval(countDown, 1000);
 return [day, hour, minutes, second]

}
export default useCountDown