import React, { useState, useEffect } from "react";
import {observer} from "mobx-react-lite";
import {Card, Container, Form, Button, Col} from 'react-bootstrap';
import {MAIN_ROUTE} from '../utils/consts'
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const MainPage = observer(() => {
    document.body.style.backgroundColor="#fcfcee"
    const location = useLocation()
    const isLogin = location.pathname === MAIN_ROUTE
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      address: '',
      message: '',
    });
    const [errors, setErrors] = useState('');

    useEffect(() => {
      const newErrors = {};
      for (const [key, value] of Object.entries(formData)) {
        if (!value) {
          newErrors[key] = 'Поле не может быть пустым';
        }
      }
      setErrors(newErrors);
    }, [formData]);
  
    const Change = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const Submit = (e) => {
      e.preventDefault();
      if (Object.keys(errors).length === 0) {
        console.log('Данные отправлены:', formData);
      }
    };
    


    return (
        <Container
        style = {{backgroundColor:'#D0D0D0', justifyContent:'space-between', position:'relative', padding:'20px', borderRadius: '15px', width: '1240px', height: '1100px', marginTop:'6px', fontFamily:"Play", paddingTop: '10px'}}>
        <Card style={{borderRadius: 80, fontFamily:"Play"}} className="p-5 #FFFAF4">
        <Form className="d-flex flex-column" onSubmit={Submit}>
        <Form.Control
                style={{borderRadius: 70, height: 71, border: "1px solid", fontSize: "24px", marginBottom:'20px'}}
                className="mt-3"
                placeholder = "Введите имя..."
                size="lg"
                type={formData.name}
            //     isInvalid={!!errors[key]}
                onChange={Change}/>
          <Form.Control
                style={{borderRadius: 70, height: 71, border: "1px solid", fontSize: "24px", marginBottom:'20px'}}
                className="mt-3"
                placeholder = "Введите номер телефона..."
                size="lg"
                type="number"
                onChange={Change}/>
          <Form.Control
                style={{borderRadius: 70, height: 71, border: "1px solid", fontSize: "24px", marginBottom:'20px'}}
                className="mt-3"
                placeholder = "Введите email адрес..."
                size="lg"
                type="email" 
                onChange={Change}/>
          <Form.Control
                style={{borderRadius: 40, height: 71, border: "1px solid", fontSize: "24px", marginBottom:'20px', height: '150px'}}
                className="mt-3"
                placeholder = "Ваще сообщение"
                size="lg"
                type="text" 
                onChange={Change}/>
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