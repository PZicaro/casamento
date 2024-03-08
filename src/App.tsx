import './App.css';

import Noivos from './components/Noivos';
import ButtonInterate from './components/ButtonInterate';
import Counter from './components/Counter';
import useCountDown from './hooks/useCountDown';

import { Button, Form, InputGroup } from 'react-bootstrap';
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyDuJq4DUBxlaaUwquXELx5fAuUC2LjGt3w",
  authDomain: "casamento-cb4ec.firebaseapp.com",
  projectId: "casamento-cb4ec",
  storageBucket: "casamento-cb4ec.appspot.com",
  messagingSenderId: "378985239166",
  appId: "1:378985239166:web:b0999d6c9b47432bcebe2f",
  measurementId: "G-2LN1THR9HP"
};
interface Guest {
  id: any;
  name: string;
  confirm: boolean;
  email: string;
  phone?: string; // A propriedade telefone é opcional
}
const app = initializeApp(firebaseConfig);

function App() {
  const [day, hour, minutes, second] = useCountDown('Jan 25, 2025 19:00:00');
  const [phone, setPhone] = useState<string>('');
  const [guests, setGuests] = useState<Guest[]>([]);
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  }

  const handleClick = async () => {
    guests.forEach(async (prop) => {
      if (prop.phone === phone) {
        const confirm = window.confirm(`Deseja confirmar a presença de ${prop.name}?`);
        if (confirm) {
          try {
            const guestRef = doc(db, 'guests', prop.id);
            await updateDoc(guestRef, {
              confirm: true
            });
            alert(`Presença de ${prop.name} confirmada com sucesso!`);
          } catch (error) {
            console.error('Erro ao atualizar o documento:', error);
            alert('Erro ao confirmar presença. Por favor, tente novamente.');
          }
        }
      }
    });
    setValue('');
  };

  const handleKeyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  const db = getFirestore(app);

  useEffect(() => {
    const fetchGuests = async () => {
      const guestCollection = collection(db, 'guests');
      const querySnapshot = await getDocs(guestCollection);
      const guestsData: Guest[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Guest[];
      setGuests(guestsData);
    };

    fetchGuests();
  }, []); 

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
            <InputGroup   onChange={handleChange} onKeyPress={handleKeyPress} className="mb-3">
              <Form.Control
                onChange={(event) => setValue(event.target.value)} 
                value ={value}
                placeholder="(00) 999999999"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button onClick={handleClick} className='button-search' variant="outline-secondary" id="button-addon2">
                search
              </Button>
            </InputGroup>
          </div>
          <p>Clique <strong>aqui</strong> para ir para o nosso enxoval</p>
        </div>
      </div>
    </>
  );
}

export default App;

