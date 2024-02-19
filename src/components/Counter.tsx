import { CounterStyle, NumberStyle, TextStyle } from '../Styles/counter.style';

type CounterProps = {
    title: String;
    number: number;
}
function Counter ( {title, number }: CounterProps )  {

    return(
     <CounterStyle>
        <NumberStyle>{number}</NumberStyle>
        < TextStyle>
            {title}
        </TextStyle>
     </CounterStyle>
    )
}
export default Counter;