import Button from 'react-bootstrap/Button';
import '../Styles/style.button.css'
import { ButtonNoivos } from '../Styles/button.style';
interface ButtonInterateProps  {
    children: String;
    cor: string;
    props? :React.ReactNode;
}
function ButtonInterate ({children, cor, ...props}:ButtonInterateProps){
    return(
 <ButtonNoivos  backgroundColor={cor} >{children}</ButtonNoivos>
    )
}
export default ButtonInterate;