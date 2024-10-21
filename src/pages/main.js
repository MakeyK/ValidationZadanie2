import React, { useState, useEffect } from "react";
import {Card, Container} from 'react-bootstrap'
import {observer} from "mobx-react-lite";

const MainPage = observer(() => {
    document.body.style.backgroundColor="#fcfcee"
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);
    const MyForm = () => {
      const [formData, setFormData] = useState({
        number1: '',
        number2: '',
        multiSelect: [],
        textField: '',
        timeField: '',
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'multiSelect') {
          const newSelection = formData.multiSelect.includes(value)
            ? formData.multiSelect.filter(item => item !== value)
            : [...formData.multiSelect, value];
          setFormData({ ...formData, multiSelect: newSelection });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
    
      const validateForm = () => {
        const newErrors = {};
        if (formData.number1.length < 5) newErrors.number1 = 'Первое число должно содержать не менее 5 цифр.';
        if (formData.number2.length > 8) newErrors.number2 = 'Второе число должно содержать не более 8 цифр.';
        if (!formData.textField) newErrors.textField = 'Это поле обязательно для заполнения.';
        if (!formData.timeField) newErrors.timeField = 'Выберите время.';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          setSubmittedData(formData);
        }
      };
    
      useEffect(() => {
        if (submittedData) {
          alert(JSON.stringify(submittedData, null, 2));
        }
      }, [submittedData]);
    

    return (
        <Container
        style = {{backgroundColor:'#D0D0D0', justifyContent:'space-between', position:'relative', padding:'20px', borderRadius: '15px', width: '1240px', height: '950px', marginTop:'6px', fontFamily:"Play", paddingTop: '10px'}}>

        </Container>
    );
};

export default MainPage;