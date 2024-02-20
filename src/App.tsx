import './App.css'
import Noivos from './components/Noivos';
import ButtonInterate from './components/ButtonInterate';
import Counter from './components/Counter';
import useCountDown from './hooks/useCountDown';
import { Button, Form, InputGroup } from 'react-bootstrap';

function App() {
  const [day, hour,minutes,second] = useCountDown('Jan 25, 2025 19:00:00')

  return (
    <>
    <div className="container-title">
    <div className="content">
        <Noivos/>
        <a href="#count">
        <ButtonInterate cor={'#ffff'}>Venha nos ver casar</ButtonInterate>
        </a>

    </div>
    </div>
    <div id='count' className="count">
    <div className="tittle-count">
        <h3>Quantos dias faltam para o casamento</h3>
      </div>
      <div className="count-content">
      <Counter title={'Dias'} number={day}/>
      <Counter title={'Horas'} number={hour}/>
      <Counter title={'Minutos'} number={minutes}/>
      <Counter title={'Segundos'} number={second}/>
      
      </div>
    
    </div>
    <div className="container-section">
      <div className="cabecalho"><p>L & I</p></div>
      <p><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.t sequi sint? Quisquam exercitationem consequatur suscipit mollitia!</strong></p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, harum.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptat</p>
      <div className="poema">
        
        <p><strong>"</strong>Se é sem dúvida Amor esta explosão</p>
        <p>de tantas sensações contraditórias;</p>
        <p>a sórdida mistura das memórias,</p>
        <p>tão longe da verdade e da invenção...</p>
        <p>não há dúvida, Amor, que te não fujo</p>
        <p>e que, por ti, tão cego, surdo e sujo,</p>
        <p>tenho vivido eternamente preso! <strong>"</strong></p>
      </div>
     <strong><p>Agradecemos por fazer parte deste momento tão especial em nossas vidas</p></strong> 
     <a href="#presenca">
     <ButtonInterate cor={'#FFBE98'}>confirme sua presença</ButtonInterate>
      </a>
      
    </div>
    <div className="container-section">
      <div id='presenca' className="container-forms">
        <strong><p>Confirme sua presença colocando o seu número de telefone</p></strong>
       
      <div className="search">
    <InputGroup className="mb-3">
        <Form.Control
          placeholder="Número de telefone"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button className='button-search' variant="outline-secondary" id="button-addon2">
          search
        </Button>
      </InputGroup>

      </div>
      <p>Clique <strong>aqui</strong> para ir para o nosso enxoval</p>
      
      </div>
    </div>

    </>
  )
  }
export default App;

