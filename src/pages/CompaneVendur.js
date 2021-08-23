import React, { useState, useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useForm } from "react-hook-form";
import { ListeCompanie, AddCompanier } from '../service/service'
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { AppContext } from "../components/contextapi"
import Container from 'react-bootstrap/Container'

import Modal from 'react-bootstrap/Modal'
export const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    marginLeft: 20
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

export const useStyles2 = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),

    width: theme.spacing(40),
    // height: theme.spacing(20),
  },
}));
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),

  },

  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[300],
  },
});




function CampagnesVendeur() {
  const { handleSubmit, register } = useForm({});
  const [message, setMessage] = React.useContext(AppContext);

  const [lgShow, setLgShow] = useState(false);

  const handleClickOpen = () => {

    setLgShow(true);

  };
  const [roel, SetRole] = React.useState()
  const SelectRole = (event) => {
    SetRole(event.target.value)
  }

  const handleClose = () => setLgShow(false);
  function onSubmit(data, e) {
    var id = 5
    var c = { 'status': roel }
    var obj3 = Object.assign({}, data, c);
    AddCompanier(data, id).then((res) => {
      liste()
      setLgShow(false)
      e.target.reset()

    })
  }
  const [companes, SetCompane] = React.useState([])
  useEffect(() => {
    liste();
    setMessage(true)
  }, [])
  const liste = () => {
    ListeCompanie().then((res) => {
      SetCompane(res.data)
    }).catch(e => {
    });
  }

  const classes1 = useStyles2();

  return (
    <div className='Campagnes'>
      <h1 style={{ marginLeft: 50 }}>Liste des Compagnes</h1>
      <Button variant="primary" style={{ marginLeft: 50 }} onClick={handleClickOpen}>Add Compagnes</Button>

      <Row xs={1} md={3} className="g-3" style={{ marginTop: 60 }}>
        {companes.map((item, idx) => (

          <Col>
            <Card style={{ position: 'inherit' }}>

              <Card.Img variant="top" src={item.image_compagne} style={{ height: 200, width: 400 }} />
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
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <form onSubmit={handleSubmit(onSubmit)}   >

          {/* <Modal.Header closeButton>
            <Modal.Title >
              Add Companer
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >

            <div className="Cform" >
              <label htmlFor="code_promo" style={{ display: 'block' }}>Code_promo</label>
              <input type="text" id="code_promo" name="code_promo" className="input" style={{ width: 300 }} {...register("code_promo")}></input>
            </div>
            <div className="Cform">
              <label htmlFor="description" style={{ display: 'block' }}>Description</label>
              <input type="text" id="description" name="description" className="input" style={{ width: 300 }} {...register("description")}></input>

            </div>
            <div className="Cform">
              <label htmlFor="lien_produit" style={{ display: 'block' }}>Lien_produit</label>
              <input type="text" id="lien_produit" name="lien_produit" className="input" style={{ width: 300 }} {...register("lien_produit")}></input>

            </div>
            <div className="Cform">
              <label htmlFor="nom" style={{ display: 'block' }}>Nom</label>
              <input type="text" id="nom" name="nom" className="input" style={{ width: 300 }} {...register("nom")}></input>

            </div>
            <div className="Cform">
              <label htmlFor="image_compagne" style={{ display: 'block' }}>Image_compagne</label>
              <input type="text" id="image_compagne" name="image_compagne" className="input" style={{ width: 300 }} {...register("image_compagne")}></input>

            </div>
            <div className="Cform">
              <label htmlFor="regle_pub" style={{ display: 'block' }}>Regle_pub</label>
              <input type="text" id="regle_pub" name="regle_pub" className="input" style={{ width: 300 }} {...register("regle_pub")}></input>
            </div>
            <div className="Cform">
              <label htmlFor="image_produit" style={{ display: 'block' }}>Image_produit</label>
              <input type="text" id="image_produit" name="image_produit" className="input" style={{ width: 300 }} {...register("image_produit")}></input>
            </div>
            <div className="Cform">
              <label htmlFor="regle_story" style={{ display: 'block' }}>Regle_story</label>
              <input type="text" id="regle_story" name="regle_story" className="input" style={{ width: 300 }} {...register("regle_story")}></input>

            </div>
            <div className="Cform">
                  <label htmlFor="status" style={{ display: 'block' }}>Status</label>
                  <input type="text" id="status" name="status" className="input" style={{ width: 300 }} {...register("status")}></input>

                </div>
         
            <div className="Cform">
              <label htmlFor="titre" style={{ display: 'block' }}>Titre</label>
              <input type="text" id="titre" name="titre" className="input" style={{ width: 300 }} {...register("titre")}></input>

            </div>
            <div className="Cform">
              <label htmlFor="reseau_sociaux" style={{ display: 'block' }}>Reseau_sociaux</label>
              <input type="text" id="reseau_sociaux" name="reseau_sociaux" className="input" style={{ width: 300 }} {...register("reseau_sociaux")}></input>
            </div>
          </Modal.Body> */}
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
             Add Companer
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <Card >
              <div className="Cform">
                <input type="text" id="image_compagne" name="image_compagne" className="input" style={{ width: 770, height: 300 }} {...register("image_compagne")}></input>
              </div>
              <Container>
                <Row style={{marginRight:100}}>
                  <Col xs={9} md={6}>
                    <h3 style={{ color: '#e31a7e' }}>Description</h3>
                    <div className="Cform">
                    <input type="text" id="description" name="description" className="input" style={{ width: 300 }} {...register("description")}></input>
                    </div>
                  </Col>
                  <Col xs={9} md={6}>
                    <h3 style={{ color: '#e31a7e' }}>Nom</h3>
                    <div className="Cform">
                    <input type="text" id="nom" name="nom" className="input" style={{ width: 300 }} {...register("nom")}></input>
                    </div>                 
                   </Col>
                </Row>
                <Row style={{ height: 100, width: 764 }}>
                  <Col xs={12} md={8}>
                    <h4 style={{ color: '#e31a7e' }}>Lien_produit</h4>
                    <div className="Cform">
                    <input type="text" id="lien_produit" name="lien_produit" className="input" style={{ width: 300 }} {...register("lien_produit")}></input>
                  </div>
                  </Col>
                  <Col xs={6} md={4}>
                  </Col>
                </Row>
                <Row style={{ marginRight:100 }}>
                  <Col xs={9} md={6}>
                  <h4 style={{ color: '#e31a7e' }}>
                  Image_produit
                  </h4>
                  <div className="Cform">
                  <input type="text" id="image_produit" name="image_produit" className="input" style={{ height: 200, width: 300 }} {...register("image_produit")}></input>
                  </div>
                  </Col>
                  <Col xs={9} md={6}>
                  <h4 style={{ color: '#e31a7e' }}>
                  Regle_story
                  </h4>
                  <div className="Cform">
                  <input type="text" id="regle_story" name="regle_story" className="input" style={{  width: 300 }} {...register("regle_story")}></input>
                  </div>
                  </Col>
                </Row>
                <Row style={{ height: 257, width: 764 }}>
                  <Col>
                    <h4 style={{ color: '#e31a7e' }}>
                      Title
                    </h4>
                    <div className="Cform">
                    <input type="text" id="titre" name="titre" className="input" style={{ width: 300 }} {...register("titre")}></input>
                    </div>
                  </Col>
                  <Col >
                  <h4 style={{ color: '#e31a7e' }}>
                  Reseau_sociaux
                    </h4>
                    <div className="Cform">
                    <input type="text" id="reseau_sociaux" name="reseau_sociaux" className="input" style={{ width: 300 }} {...register("reseau_sociaux")}></input>
                    </div>

                  </Col>
                </Row>

              </Container>

            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" type="submit" >Save changes</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default CampagnesVendeur;



