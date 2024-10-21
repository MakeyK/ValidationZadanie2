import React, { useState, useEffect } from "react";
import {observer} from "mobx-react-lite";
import {Card, Container, Form, Button, Col} from 'react-bootstrap';
import {MAIN_ROUTE} from '../utils/consts'
import { useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const MainPage = observer(() => {
    document.body.style.backgroundColor="#fcfcee"
    const location = useLocation()
    const isLogin = location.pathname === MAIN_ROUTE
    const [formData, setFormData] = useState({
      email: '',
      name: '',
      phone: '',
      ip: '',
      address: '',
      message: '',
    });

    const [errors, setErrors] = useState('');
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };


    const validate = () => {
      const newErrors = {};
      if (!formData.name) {
        newErrors.name = 'Имя обязательно';
      }
      if (!formData.email) {
        newErrors.email = 'Email обязателен';
      } else if (!formData.email) {
        newErrors.email = 'Email должен быть корректным';
      }
      if (!formData.phone) {
        newErrors.phone = 'Телефон обязателен';
      } else if (!formData.phone) {
        newErrors.phone = 'Телефон должен содержать от 10 до 15 цифр';
      }
      if (!formData.ip) {
        newErrors.ip = 'IP адрес обязателен';
      } else {
        newErrors.ip = 'Некорректный IP адрес';
      }
      if (!formData.address) {
        newErrors.address = 'Адрес обязателен';
      }
      if (!formData.message) {
        newErrors.message = 'Сообщение обязательно';
      }
      return newErrors;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        console.log('Данные отправлены:', formData);
        setErrors({});
      }
    };

    return (
        <Container
        style = {{backgroundColor:'#D0D0D0', justifyContent:'space-between', position:'relative', padding:'20px', borderRadius: '15px', width: '1240px', height: '1100px', marginTop:'6px', fontFamily:"Play", paddingTop: '10px'}}>
        <Card style={{borderRadius: 80, fontFamily:"Play"}} className="p-5 #FFFAF4">
        <Form className="d-flex flex-column" onSubmit={handleSubmit}>
        <Form.Control
                style={{borderRadius: 70, height: 71, border: "1px solid", fontSize: "24px", marginBottom:'20px'}}
                className="mt-3"
                placeholder = "Введите имя..."
                size="lg"
                onChange={handleChange}/>
        <Form.Control
                style={{borderRadius: 70, height: 71, border: "1px solid", fontSize: "24px", marginBottom:'20px'}}
                className="mt-3"
                placeholder = "Введите двухзначное число..."
                size="lg"
                onChange={handleChange}/>
          <Form.Control
                style={{borderRadius: 70, height: 71, border: "1px solid", fontSize: "24px", marginBottom:'20px'}}
                className="mt-3"
                placeholder = "Введите номер телефона..."
                size="lg"
                onChange={handleChange}/>
          <Form.Control
                style={{borderRadius: 70, height: 71, border: "1px solid", fontSize: "24px", marginBottom:'20px'}}
                className="mt-3"
                placeholder = "Введите email адрес..."
                size="lg"
                type="email"
                onChange={handleChange}/>
          <Form.Control
                style={{borderRadius: 70, height: 71, border: "1px solid", fontSize: "24px", marginBottom:'20px'}}
                className="mt-3"
                placeholder = "Введите IP Адрес..."
                size="lg"
                onChange={handleChange}/>
          <Form.Control
                style={{borderRadius: 70, height: 71, border: "1px solid", fontSize: "24px", marginBottom:'20px'}}
                className="mt-3"
                placeholder = "Введите адрес сайта..."
                size="lg"
                onChange={handleChange}/>
          <Form.Control
                style={{borderRadius: 40, height: 71, border: "1px solid", fontSize: "24px", marginBottom:'20px', height: '150px'}}
                className="mt-3"
                placeholder = "Ваще сообщение"
                size="lg"
                onChange={handleChange}/>
                <p style={{marginTop:'30px', display:'flex', justifyContent:'center'}}>
                <Button
                            type="submit"
                            size={"lg"}
                            onChange={handleChange}
                            variant={"outline-success"}
                            style={{fontWeight:'bold', borderRadius:37, width:'180px', height:'70px'}}
                            >
                            Отправить
                </Button></p>
        </Form>
        </Card>
        
        </Container>
    );
});

export default MainPage;