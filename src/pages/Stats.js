import React, { useState,useContext,useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {AppContext} from "../components/contextapi"


export const useStyles6 = makeStyles({
    root: {
        // width: '100%',
        overflow: 'hidden',
    },
    container: {
        maxHeight: 440,
    },
});
function Stats() {
    const [message, setMessage] = React.useContext(AppContext);
    useEffect(() => { 
        setMessage(true)
      }, [])
    const classes = useStyles6();


    return (
        <div className='Stats' className='tabBar'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row >
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item >
                                <Nav.Link eventKey="first">Mon Compte</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link eventKey="third">Mes identifiants</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link eventKey="second">Mes réseaux sociaux</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="third">

                                <Paper className={classes.root}>
                                    <div className="enregistrement-form">
                                        <h4 className="form-section-title text-center">Mes identifiants</h4>
                                        <div className="row" style={{ marginTop: 30,marginLeft:10 }}>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="email" class="control-label ef-label">Nouvelle adresse Email</label>
                                                    <input class="form-control ef-input" name="email" type="text" id="email" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <label >Adresse Email actuelle</label>
                                                <div class="text-primary">oumaimaabidi521@gmail.com</div>
                                            </div>
                                        </div>


                                        <div class="row" style={{ marginTop: 50,marginLeft:10 }}>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="password" class="control-label ef-label">Nouveau Mot de passe</label>
                                                    <input class="form-control ef-input password-with-help" name="password" type="password" value="" id="password" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="password_confirmation" class="control-label ef-label">Confirmer le mot de passe</label>
                                                    <input class="form-control ef-input" name="password_confirmation" type="password" value="" id="password_confirmation" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row" style={{ marginTop: 80,marginLeft:10 }}>
                                            <div class="col-12 password-messages mb-3"></div>
                                        </div>
                                        <Button variant="danger" className="validation" style={{ display: 'block',marginLeft:'auto',marginRight:'auto',marginBottom:20}}>VALIDER</Button>
                                    </div>
                                </Paper>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Alert variant='info'>
                                    <p>
                                        <i ><img src="https://img.icons8.com/office/30/000000/youtube-play.png" /></i> Youtube
                                        <a href="https://www.wamia.tn/" target="https://www.wamia.tn/" class="btn btn-primary float-right" style={{ marginLeft: 600 }}>Connecter mon Youtube</a>
                                    </p>
                                </Alert>
                                <Alert variant='info'>
                                    <p>
                                        <i ><img src="https://img.icons8.com/color/48/000000/facebook.png" /></i> Facebook
                                        <a href="https://www.facebook.com/Wamia.tn" target="https://www.facebook.com/Wamia.tn" class="btn btn-primary float-right" style={{ marginLeft: 600 }}>Connecter mon Facebook</a>
                                    </p>
                                </Alert>

                                <Alert variant='info'>
                                    <p>
                                        <i><img src="https://img.icons8.com/fluency/48/000000/twitter.png" /></i> Twitter
                                        <a  class="btn btn-primary float-right" style={{ marginLeft: 600 }}>Connecter mon Twitter</a>
                                    </p>
                                </Alert>

                                <Alert variant='info'>
                                    <p>
                                        <i><img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" /> </i> Instagram
                                        <a href="https://www.instagram.com/wamia.tn/" target="https://www.instagram.com/wamia.tn/" class="btn btn-primary float-right" style={{ marginLeft: 600 }}>Connecter mon Instagram</a>
                                    </p>
                                </Alert>

                                <Alert variant='info'>
                                    <p>
                                        <i><img src="https://img.icons8.com/fluency/48/000000/snapchat.png" /></i> Snapchat
                                        <a  class="btn btn-primary float-right" style={{ marginLeft: 600 }}>Connecter mon Snapchat</a>
                                    </p>
                                </Alert>

                                <Alert variant='info'>
                                    <p>
                                        <i><img src="https://img.icons8.com/ios-filled/50/000000/tiktok--v1.png" /></i><span class="sr-only">Musically</span>
                                        TikTok
                                        <a  class="btn btn-primary float-right" style={{ marginLeft: 600 }}>Connecter mon TikTok</a>
                                    </p>
                                </Alert>



                            </Tab.Pane>
                            <Tab.Pane eventKey="first">
                                <div class="enregistrement-form">
                                    <h4 class="form-section-title text-center">Mon compte</h4>


                                    <h6 class="text-center mb-4">Facture à envoyer</h6>
                                    <div class="list-flex-box mb-3" style={{ display: 'flex' }}>
                                        <div class="flex-box-item">
                                            <h5 class="m-0">1.00</h5>
                                            <small>Total des gains</small>
                                        </div>
                                        <div class="flex-box-item separator">-</div>
                                        <div class="flex-box-item" style={{marginLeft:100}}>
                                            <h5 class="m-0">0.00</h5>
                                            <a href="#" data-toggle="modal" data-target="#modalInvoices">
                                                <small>Déjà facturé</small>
                                            </a>
                                        </div>
                                        <div class="flex-box-item separator">-</div>

                                        <div class="flex-box-item" style={{marginLeft:150}}>
                                            <h5 class="m-0">1.00</h5>
                                            <small>En cours de validation*</small>
                                        </div>
                                        <div class="flex-box-item separator">=</div>
                                        <div class="flex-box-item" style={{marginLeft:200}}>
                                            <h5 class="m-0">0.00</h5>
                                            <small>A facturer</small>
                                        </div>
                                    </div>

                                    <div class="text-right">
                                        <small>* Les gains en cours d'acquisition  sont validés le 10/07</small>
                                    </div>

                                    <p><small>Il faut un minimum de plus de 30 € pour déposer votre facture.</small></p>

                                    <p class="mt-3">
                                    </p>

                                    <div id="modalInvoices" class="modal fade" tabindex="-1" role="dialog">
                                        <div class="modal-dialog" role="document" style={{ width: 900, maxWidth: 100 }}>
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Factures envoyées</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-hover" style={{ fontSize: 14 }}>
                                                            <thead>
                                                                <tr>
                                                                    <th>Date réception facture</th>
                                                                    <th class="text-right">Montant HT</th>
                                                                    <th class="text-right">Total TTC</th>
                                                                    <th class="text-right">Réglement TTC</th>
                                                                    <th class="text-right">Date de réglement</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr class="table-active">
                                                                    <td><b>TOTAL</b></td>
                                                                    <td class="text-right">0,00 €</td>
                                                                    <td class="text-right">0,00 €</td>
                                                                    <td class="text-right">0,00 €</td>
                                                                    <td></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <h6 class="text-center mb-4">Récapitulatif</h6>

                                    <table class="table table-hover stacktable stacktable small-only"><tbody><tr class="  "><th class="st-head-row st-head-row-main" colspan="2">Campagne</th></tr><tr class=""><th class="st-head-row" colspan="2">
                                        <b>Influence4You</b>






                                        <a onclick="i4b.campaign.display(544);return false;" href="#" class="font14"><i class="fas fa-chevron-right" aria-hidden="true"></i> Welcome Bonus</a>
                                    </th></tr><tr class=""><td class="st-key">Nb Clics</td><td class="st-val text-right align-middle">
                                        &nbsp;
                                    </td></tr><tr class=""><td class="st-key">Nb Leads</td><td class="st-val text-right align-middle">
                                        &nbsp;
                                    </td></tr><tr class=""><td class="st-key">Total des ventes</td><td class="st-val text-right align-middle">
                                        &nbsp;
                                    </td></tr><tr class=""><td class="st-key">Vos revenus</td><td class="st-val text-right align-middle">
                                        1,00 €
                                    </td></tr><tr class="table-active"><th class="st-head-row" colspan="2">TOTAL 2021-03</th></tr><tr class="table-active"><td class="st-key">Nb Clics</td><td class="st-val text-right">0</td></tr><tr class="table-active"><td class="st-key">Nb Leads</td><td class="st-val text-right">0</td></tr><tr class="table-active"><td class="st-key">Total des ventes</td><td class="st-val text-right">0,00 €</td></tr><tr class="table-active"><td class="st-key">Vos revenus</td><td class="st-val text-right">1,00 €</td></tr></tbody></table><table class="table table-hover stacktable large-only">
                                        <thead>
                                            <tr>
                                                <th scope="col">Campagne</th>
                                                <th scope="col" class="text-right">Nb Clics</th>
                                                <th scope="col" class="text-right">Nb Leads</th>
                                                <th scope="col" class="text-right">Total des ventes</th>
                                                <th scope="col" class="text-right">Vos revenus</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <b>Influence4You</b>

                                                    <a onclick="i4b.campaign.display(544);return false;" href="#" class="font14"><i class="fas fa-chevron-right" aria-hidden="true"></i> Welcome Bonus</a>
                                                </td>
                                                <td class="text-right align-middle">
                                                    &nbsp;
                                                </td>
                                                <td class="text-right align-middle">
                                                    &nbsp;
                                                </td>
                                                <td class="text-right align-middle">
                                                    &nbsp;
                                                </td>
                                                <td class="text-right align-middle">
                                                    1,00 €
                                                </td>
                                            </tr>
                                            <tr class="table-active">
                                                <th class="text-center">TOTAL 2021-03</th>
                                                <td class="text-right">0</td>
                                                <td class="text-right">0</td>
                                                <td class="text-right">0,00 €</td>
                                                <td class="text-right">1,00 €</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Tab.Pane>

                        </Tab.Content>

                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default Stats;