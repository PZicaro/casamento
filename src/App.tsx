import './App.css'
import Noivos from './components/Noivos';
import ButtonInterate from './components/ButtonInterate';
import Counter from './components/Counter';
import useCountDown from './hooks/useCountDown';

function App() {
  const [day, hour,minutes,second] = useCountDown('Jan 25, 2025 19:00:00')

  return (
    <>
    <div className="container-title">
    <div className="content">
        <Noivos/>
        <ButtonInterate cor={'#ffff'}>Venha nos ver casar</ButtonInterate>

    </div>
    </div>
    <div className="count">
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
     <ButtonInterate cor={'#FFBE98'}>confirme sua presença</ButtonInterate>
      
    </div>

    </>
  )
  }
export default App;

