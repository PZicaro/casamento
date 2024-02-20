import { ButtonNoivos } from '../Styles/button.style';
interface ButtonInterateProps  {
    children: string;
    cor: string;
    props? :React.ReactNode;
}
function ButtonInterate ({children, cor, ...props}:ButtonInterateProps){
    return(
 <ButtonNoivos  backgroundColor={cor} >{children}</ButtonNoivos>
    )
}
export default ButtonInterate;