import React from "react";
import {Card, Container} from 'react-bootstrap'
import {observer} from "mobx-react-lite";
import Markiza from "../Files/markiza.jpg"
import Markiza2 from "../Files/Markiza2.jpg"
import { FaUser, FaGraduationCap, FaTools, FaBriefcase, FaInfoCircle, FaPhone, FaEnvelope } from 'react-icons/fa';


const MainPage = observer(() => {
    document.body.style.backgroundColor="#fcfcee"
    const resumeData = {
        fullName: "Макеева Маркиза Владимировна",
        birthDate: "24.04.2024",
        education: "Бакалавр информационных технологий",
        skills: ["JavaScript", "React", "Node.js", "CSS", "HTML", "C++", "Git"],
        workExperience: "3 года опыта работы в разработке веб-приложений.",
        aboutMe: "Я увлечённый разработчик, стремящийся к постоянному обучению и самосовершенствованию.Также целеустремленный и мотивированный IT-специалист с большим богажём опыта в веб-разработке.Я также обладаю отличными коммуникативными навыками и способностью работать в условиях быстрого изменения приоритетов. Моя цель — применить свои знания и опыт для создания инновационных решений и повышения эффективности бизнес-процессов.",
        contacts: {
          phone: "+7 (977) 318-50-12",
          email: "markiza05@gmail.com"
        }
      };
    return (
        <Container
        style = {{backgroundColor:'#D0D0D0', justifyContent:'space-between', position:'relative', padding:'20px', borderRadius: '15px', width: '1240px', height: '950px', marginTop:'6px', fontFamily:"Play", paddingTop: '10px'}}>
        <Card style={{ marginLeft: '5px', marginRight: '5px', borderRadius: '7px', height: '30px', backgroundColor: '#42AAFF'}} fixed='top'></Card>
        <div style={{ flexGrow: 1, alingItems: 'center', fontWeight: 'bold', position:'relative'}}>

        <img src={Markiza2} style={{width: '140px', height:'250px', marginLeft: '35px', display: 'inline-block', marginRight:'30px'}}></img>  
        
        <p style={{width:'300px', fontSize:'35px', display: 'inline-block', alignContent: 'center'}}>{resumeData.fullName}</p>
        <p style={{width:'300px', fontSize:'28px', display: 'inline-block', alignContent: 'center'}}>Дата рождения: {resumeData.birthDate}</p>
        </div>
        
        <Container
        style = {{backgroundColor:'#D0D0D0', justifyContent:'space-between', display:'flex', borderRadius: '15px', marginTop:'6px', fontFamily:"Play", paddingTop: '10px'}}>
          
        <Card style={{width:'300px', marginTop: '20px', borderRadius: '35px', border:'5px solid #42AAFF', backgroundColor:'#D0D0D0', marginLeft: '20px'  }}>
          
          <p style={{ fontSize: '40px', alignItems: 'center', marginLeft: '20px' }}>
            
            <FaUser style={{ marginRight: '5px' }}/>
            Контакты
            </p>
          <div style={{ backgroundColor: 'black', height: '4px', position:'absolute', marginTop: '57px', width: '290px'}}>
          </div>
          <p style={{marginLeft: '20px', fontSize: '20px'}}><FaPhone /> {resumeData.contacts.phone}</p>
          <p style={{marginLeft: '20px', fontSize: '20px'}}s><FaEnvelope /> {resumeData.contacts.email}</p>
        </Card>

        <Card style={{width:'370px', marginTop: '20px', borderRadius: '35px', border:'5px solid #42AAFF', backgroundColor:'#D0D0D0', marginLeft: '20px' }}>
          <p style={{ fontSize: '40px', display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
            <FaGraduationCap style={{ marginRight: '5px'}} /> Образование
          </p>
          <div style={{ backgroundColor: 'black', height: '4px', position:'absolute', marginTop: '55px', width: '360px'}}>
          </div>
          <p style={{fontSize: '25px', marginLeft: '20px'}}>
          {resumeData.education}</p>
        </Card>

        <Card style={{width:'370px', marginTop: '20px', borderRadius: '35px', border:'5px solid #42AAFF', backgroundColor:'#D0D0D0', marginLeft: '20px' }}>
          <p style={{ fontSize: '40px', display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
            <FaBriefcase style={{ marginRight: '5px' }} /> Опыт работы
          </p>
          <div style={{ backgroundColor: 'black', height: '4px', position:'absolute', marginTop: '54px', width: '360px'}}>
          </div>
          <p style={{marginLeft: '20px', fontSize: '20px'}}>{resumeData.workExperience}</p>
        </Card>



        </Container>




        <Container style = {{backgroundColor:'#D0D0D0', justifyContent:'space-between', display:'flex', borderRadius: '15px', marginTop:'6px', fontFamily:"Play", paddingTop: '10px'}}>
        <Card style={{width:'800px', marginTop: '20px', borderRadius: '35px', border:'5px solid #42AAFF', backgroundColor:'#D0D0D0', marginLeft: '20px' }}>
          <p style={{ fontSize: '40px', display: 'flex', alignItems: 'center',  marginLeft: '20px' }}>
            <FaInfoCircle style={{ marginRight: '5px' }} /> О себе
          </p>
          <div style={{ backgroundColor: 'black', height: '4px', position:'absolute', marginTop: '55px', width: '790px'}}>
          </div>
          <p style={{marginLeft: '20px', fontSize: '20px'}}>{resumeData.aboutMe}</p>
        </Card>


        <Card style={{ width:'300px', marginTop: '20px', borderRadius: '35px', border:'5px solid #42AAFF', backgroundColor:'#D0D0D0', marginLeft: '20px' }}>
          <p style={{ fontSize: '40px', display: 'flex', alignItems: 'center',  marginLeft: '20px' }}>
            <FaTools style={{ marginRight: '5px' }} /> Навыки
              </p>
              <div style={{ backgroundColor: 'black', height: '4px', position:'absolute', marginTop: '54px', width: '290px'}}>
              </div>

          <ul style={{marginLeft: '10px', fontSize: '20px'}}>
            {resumeData.skills.map((skills) => (
              <li>{skills}</li>
            ))}
          </ul>
        </Card>

        </Container>
        <Card style={{ marginLeft: '5px', marginRight: '5px', borderRadius: '7px', height: '30px', backgroundColor: '#42AAFF', marginTop: '50px'}} fixed='top'></Card>      
        </Container>
    );
});

export default MainPage;