import React, {useEffect,useState,useContext} from 'react';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography'
import { useForm } from "react-hook-form";
import {ListeCompanie} from '../service/service'
import Modal from 'react-bootstrap/Modal'

import {AppContext} from "../components/contextapi"

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

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);




function Campagnes() {
  const [open, setmode] = React.useState(false);
  const { handleSubmit, register, errors } = useForm({});

  const [message, setMessage] = React.useContext(AppContext);

  const handleClose = () => {
    setmode(false);
  };


  const [lgShow, setLgShow] = useState(false);


  const handleClickOpen = () => {

    setLgShow(true);


  };
  const [image ,SetImage] = React.useState({})
  const handelItemCurrency = (item) => {
      setLgShow(true);
      SetImage(item)
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
  return (
    <div className='Campagnes'>
      <h1 style={{ marginLeft: 50 }}>Liste des Compagnes</h1>
      {/* <Button variant="primary" style={{marginLeft:50}} onClick={handleClickOpen}>Add Compagnes</Button> */}

      <Row xs={1} md={3} className="g-3" style={{ marginTop: 60 }}>
        {companes.map((item, idx) => (
          
          <Col>
            <Card style={{position:'inherit'}}>
              
                  <Card.Img variant="top" style={{ cursor: 'pointer' }} src={item.image_compagne} onClick={() => handelItemCurrency(item, idx)} style={{height:200,width:400}}/>
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

                  <img src={image.image_produit}  style={{height:200,width:300}}/>

                </Col>
                <Col xs={6} md={4}>
                Dans quelle mesure penserz vouz etre en accord avec la philosophie de notre marqur

                </Col>
              </Row>


              <Row style={{ height: 257, width: 764 }}>
                <Col>

                  <h1  style={{ color: '#e31a7e' }}>
                  Bienvenue
                  </h1>
                </Col>
                <Col className='Ccol'>
                  Dans quelle mesure penserz vouz etre en accord avec la philosophie de notre marqur

                  <div className="Cform" >
                 
                    <input type="text" id="code_promo" name="code_promo" className="input" style={{ width: 300 }}></input>
                  </div>
                  Il est important de suivre tous les points du Brief
                  ok dacord en va le faire 
                  <div>
                  <Button variant="danger" className="BoutonPostuler">Envoyer Notification</Button> 

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

export default Campagnes;









































// <form onSubmit={handleSubmit(onSubmit)} className="dialog_w"  >

// <DialogContent dividers style={{marginLeft:'auto',marginRight:'auto',width:'fit-content'}}>
//   <div className="Cform" >
//     <label htmlFor="code_promo" style={{ display: 'block' }}>Code_promo</label>
//     <input type="text" id="code_promo" name="code_promo" className="input" style={{ width: 300 }}></input> 
//   </div>
//   <div className="Cform">
//     <label htmlFor="description" style={{ display: 'block' }}>Description</label>
//     <input type="text" id="description" name="description" className="input" style={{ width: 300 }}></input> 

//   </div>
//   <div className="Cform">
//     <label htmlFor="lien_produit" style={{ display: 'block' }}>Lien_produit</label>
//     <input type="text" id="lien_produit" name="lien_produit" className="input" style={{ width: 300 }}></input> 

//   </div>
//   <div className="Cform">
//     <label htmlFor="nom" style={{ display: 'block' }}>Nom</label>
//     <input type="text" id="nom" name="nom" className="input" style={{ width: 300 }}></input> 

//   </div>
//   <div className="Cform">
//     <label htmlFor="regle_pub" style={{ display: 'block' }}>Regle_pub</label>
//     <input type="text" id="regle_pub" name="regle_pub" className="input" style={{ width: 300 }}></input> 

//   </div>
//   <div className="Cform">
//     <label htmlFor="regle_story" style={{ display: 'block' }}>Regle_story</label>
//     <input type="text" id="regle_story" name="regle_story" className="input" style={{ width: 300 }}></input> 

//   </div>
//   <div className="Cform">
//     <label htmlFor="status" style={{ display: 'block' }}>Status</label>
//     <input type="text" id="status" name="status" className="input" style={{ width: 300 }}></input> 

//   </div>
//   <div className="Cform">
//     <label htmlFor="titre" style={{ display: 'block' }}>Titre</label>
//     <input type="text" id="titre" name="titre" className="input" style={{ width: 300 }}></input> 

//   </div>
//   <div className="Cform">
//     <label htmlFor="reseau_sociaux" style={{ display: 'block' }}>Reseau_sociaux</label>
//     <input type="text" id="reseau_sociaux" name="reseau_sociaux" className="input" style={{ width: 300 }} ></input> 

//   </div>

// </DialogContent>
// <DialogActions style={{background:'#dc3545'}}>
//   <Button variant="outlined" color="primary" onClick={handleClose} >
//     Cancel
// </Button>
//   <Button variant="contained" color="primary" type="submit" >
//     Done
// </Button>

// </DialogActions>
// </form>