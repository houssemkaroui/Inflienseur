import React, { useState, useEffect, useContext } from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import { ListeCompanie } from '../service/service'
import { AppContext } from "../components/contextapi"

function CompanneInflienseur() {
    const [message, setMessage] = React.useContext(AppContext);


    const [key, setKey] = useState('CompaneAccepter');
    const [lgShow, setLgShow] = useState(false);


    const handleClickOpen = (item) => {
        setLgShow(true);
    };
    const [image, SetImage] = React.useState({})
    const handelItemCurrency = (item) => {
        setLgShow(true);
        SetImage(item)
    }


    const [accepte, Setaccepte] = React.useState([])
    const [attendre, SetAttendre] = React.useState([])
    const [companes, SetCompane] = React.useState([])
    useEffect(() => {
        liste();
        setMessage(true)
    }, [])
    const liste = () => {
        ListeCompanie().then((res) => {
            SetCompane(res.data)
            Setaccepte(res.data.filter(element => element.status == "accepter"))
            SetAttendre(res.data.filter(element => element.status == "attente"))
        }).catch(e => {
        });
    }
    const navigation = () =>{
        console.log('ddddddddddddddd')
        window.open('https://www.instagram.com/wamia.tn/', '_blank');

    }
    const navigation2 = () =>{
        console.log('ddddddddddddddd')
        window.open('https://www.facebook.com/Wamia.tn', '_blank');

    }
    return (

        <div className='ConfirmationCampagnes' style={{ marginTop: 50 }}>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'grid' }}>
                    <img src="https://img.freepik.com/photos-gratuite/jeune-belle-femme-pull-chaud-rose-aspect-naturel-souriant-portrait-isole-cheveux-longs_285396-896.jpg?size=626&ext=jpg" style={{ height: 200, width: 200 }} />
                    <h6 style={{ color: 'blue' }}> oumaimaabidi521@gmail.com</h6>
                </div>
                <div style={{ marginLeft: 800, height: 150 }} className='cardSolde2' >

                    <h2>20000</h2><img src="https://img.icons8.com/office/80/000000/money--v1.png" />


                </div>

            </div>





            <div>
                <div>
                    <a> 
                         <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"  onClick={navigation}/> 
                        </a>
                    <i ><img src="https://img.icons8.com/color/48/000000/facebook.png" className="btn btn" onClick={navigation2}/></i>
                </div>
            </div>
            <div style={{ marginLeft: 200 }} className='imageProduit'>
                <Tabs style={{ marginTop: 'inherit' }}
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="CompaneAccepter" title="CompaneAccepter">

                        <Row xs={1} md={3} className="g-3" style={{ marginTop: 60 }}>
                            {accepte.map((item, idx) => (

                                <Col>
                                    <Card style={{ position: 'inherit' }}>

                                        <Card.Img variant="top" style={{ cursor: 'pointer' }} src={item.image_compagne} onClick={() => handelItemCurrency(item, idx)} style={{ height: 200, width: 400 }} />
                                        <Card.Body>

                                            <Card.Title>{item.titre}</Card.Title>
                                            <Card.Text>
                                                {item.description}
                                            </Card.Text>
                                        </Card.Body>


                                    </Card>
                                </Col>
                            ))}
                        </Row>

                    </Tab>
                    <Tab eventKey="CompaneAttendre" title="CompaneAttendre">

                        <Row xs={1} md={3} className="g-3" style={{ marginTop: 60 }}>
                            {attendre.map((item, idx) => (

                                <Col>
                                    <Card style={{ position: 'inherit' }}>
                                        <div>
                                            <i> <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"  className="btn btn" onClick={navigation}/> </i>
                                            <i ><img src="https://img.icons8.com/color/48/000000/facebook.png"  className="btn btn" onClick={navigation2}/></i>
                                        </div>

                                        <Card.Img variant="top" style={{ cursor: 'pointer' }} src={item.image_compagne} onClick={() => handelItemCurrency(item, idx)} style={{ height: 200, width: 400 }} />
                                        <Card.Body>

                                            <Card.Title>{item.titre}</Card.Title>
                                            <Card.Text>
                                                {item.description}
                                            </Card.Text>
                                        </Card.Body>


                                    </Card>
                                </Col>
                            ))}
                        </Row>

                    </Tab>

                </Tabs>
            </div>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Companer
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Card >
                        <Card.Img variant="top" src={image.image_compagne} style={{ height: 300 }} />
                        <Container>
                            <Row>
                                <Col xs={12} md={8}>
                                    <h3 style={{ color: '#e31a7e' }}>Description</h3>
                                    {image.description}
                                </Col>
                                <Col xs={6} md={4}>
                                    <h3 style={{ color: '#e31a7e' }}>Brief a respecter</h3>
                                    Dans quelle mesure penserz vouz etre en accord avec la philosophie de notre marqur
                                </Col>
                            </Row>
                            <Row style={{ height: 100, width: 764 }}>
                                <Col xs={12} md={8}>
                                    <h4 style={{ color: '#e31a7e' }}>Plus d'information sur le lein</h4>
                                    {image.lien_produit}
                                </Col>
                                <Col xs={6} md={4}>
                                </Col>
                            </Row>
                            <Row style={{ height: 257, width: 764 }}>
                                <Col xs={12} md={8}>
                                    <img src={image.image_produit} style={{ height: 200, width: 300 }} />
                                </Col>
                                <Col xs={6} md={4}>
                                    Dans quelle mesure penserz vouz etre en accord avec la philosophie de notre marqur
                                </Col>
                            </Row>
                            <Row style={{ height: 257, width: 764 }}>
                                <Col>
                                    <h1 style={{ color: '#e31a7e' }}>
                                        Bienvenue
                                    </h1>
                                </Col>
                                <Col className='Ccol'>
                                    Dans quelle mesure penserz vouz etre en accord avec la philosophie de notre marqur
                                    <div className="Cform" style={{ marginTop: 50, marginBottom: 20 }}>

                                        <Button variant="danger" className="BoutonPostuler">Envoyer un Demande</Button>
                                    </div>


                                </Col>
                            </Row>

                        </Container>

                    </Card>
                </Modal.Body>
            </Modal>
        </div>

    );
}

export default CompanneInflienseur;
