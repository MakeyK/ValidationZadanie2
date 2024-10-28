import React, { useState, useEffect } from "react";
import {observer} from "mobx-react-lite";
import {Card, Container, Form, Button, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const MainPage = observer(() => {
    document.body.style.backgroundColor="#313131"
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: ''
    });
    const [nameError, setNameError] = useState();
    const [phoneError, setPhoneError] = useState();
    const [emailError, setEmailError] = useState();
    useEffect(() => {
      if (formData.name === '' || formData.phone === '' || formData.email === '') {
        return;
      }});
    
      const Submit = (e) => {
    // Метод обьекта, для отмены действия браузера по умолчанию, связанного с определённым событием. Отменить переход по ссылке при клике на неё
      e.preventDefault(); 
      setNameError(formData.name === '');
      setPhoneError(formData.phone === '');
      setEmailError(formData.email === '');
    }

    return (
        <Container
        style = {{backgroundColor:'#313131', justifyContent:'space-between', position:'relative', padding:'20px', borderRadius: '15px', width: '1240px', height: '1100px', marginTop:'6px', fontFamily:"Play", paddingTop: '10px'}}>
        <Card style={{borderRadius: 80, fontFamily:"Play", backgroundColor: '#3E3E3E', marginTop: '150px'}} className="p-5 #FFFAF4">
        <Form className="d-flex flex-column" onSubmit={Submit}>
        <Form.Control
                style={{borderRadius: 70, backgroundColor: '#7F933A', height: 71, border: "1px solid", fontSize: "24px", marginBottom:'20px'}}
                className="mt-3"
                placeholder = "Введите имя..."
                size="lg"
                onChange={(e) => setFormData({ name: e.target.value })}/>
                {nameError && <p style={{ color: 'red' }}>Поле не может быть пустым</p>}
          <Form.Control
                style={{borderRadius: 70, backgroundColor: '#7F933A', height: 71, border: "1px solid", fontSize: "24px", marginBottom:'20px'}}
                className="mt-3"
                placeholder = "Введите номер телефона..."
                size="lg"
                // Это обработчик изменения значения для поля телефона в форме. 
                // Он позволяет обновлять состояние formData при изменении значения этого поля.
                onChange={(e) => setFormData({ phone: e.target.value })}/>
                {phoneError && <p style={{ color: 'red' }}>Поле не может быть пустым</p>}
          <Form.Control
                style={{borderRadius: 70, backgroundColor: '#7F933A', height: 71, border: "1px solid", fontSize: "24px", marginBottom:'20px'}}
                className="mt-3"
                placeholder = "Введите email адрес..."
                size="lg"
                type="email" 
                onChange={(e) => setFormData({ email: e.target.value })}/>
                {emailError && <p style={{ color: 'red' }}>Поле не может быть пустым или введен некорректный email</p>}
                <p style={{marginTop:'30px', display:'flex', justifyContent:'center'}}>
                <Button
                            type="submit"
                            size={"lg"}
                            onChange={Submit}
                            variant={"outline-success"}
                            style={{fontWeight:'bold', borderRadius:37, width:'180px', height:'70px'}}
                            >
                            Отправить
                </Button></p>
        </Form>
        </Card>
        
        </Container>
    );
}
);

export default MainPage;