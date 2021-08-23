import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
// import { LoginUser } from "./service/service"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Swal from 'sweetalert2'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
// import _ from "lodash/fp";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { Signup } from "../service/service";
// import { toast } from "react-toastify";

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

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(4),
        },
    },
}));
export const useStyles2 = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),

        width: theme.spacing(40),
        // height: theme.spacing(20),
    },
}));

export default function Register() {
    const classes1 = useStyles2();
    const [role, SetRole] = React.useState('ROLE_ADMIN')
    const [id, Setid] = React.useState({})
    const { handleSubmit, register, errors } = useForm({});
    let history = useHistory();
    function onSubmit(data) {
        console.log(role,'rolllllllllllllllllllllllllll')
        // var c = { 'roles': [{id:'',name:''}] }
        
        // c.roles.push(role)
        var obj3 = Object.assign({}, data, id);
        Signup(obj3).then((res) => {
            if (res.status = 200) {
                 history.push("/")

            }
            else {
            //     toast.error('❗ un error se produit', {
            //         position: "top-right",
            //         autoClose: 3000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: false,
            //         draggable: true,
                    
            //         });

             }



        })

    }
    const classes = useStyles();
    const SelectRole = (event) => {
        SetRole(event.target.value)
        if(event.target.value =='ROLE_ADMIN') {
            Setid({ 'role': [event.target.value] })
        } else if(event.target.value =='ROLE_VENDEUR') {
            Setid({ 'role': [event.target.value] })
        }else {
            Setid({ 'role': [event.target.value] })
        }
        
    }

    return (

        <div className="container">
            <div>
                <img src="https://image.flaticon.com/icons/png/512/295/295128.png" alt="login-icon" width="100px" />
            </div>
            <br></br>


            <Card className="card2" >

                <form onSubmit={handleSubmit(onSubmit)}>


                    <div className={classes.root} noValidate autoComplete="off">

                        <div className="Cform">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" className="input" style={{ width: 400 }}  {...register("email")}></input>

                        </div>

                        <div className="Cform">
                            <label htmlFor="nom">Nom</label>
                            <input type="nom" id="nom" name="nom" className="input" style={{ width: 400 }}  {...register("nom")}></input>
                        </div>
                        <div className="Cform">
                            <label htmlFor="username">Username</label>
                            <input type="username" id="username" name="username" className="input" style={{ width: 400 }}  {...register("username")}></input>
                        </div>
                        <div className="Cform">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" className="input" style={{ width: 400 }}  {...register("password")}></input>
                        </div>

                        <div className="Aform">
                            <div className="flex-column" >
                                Role
                                <Select className={classes1.margin}
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"

                                    htmlFor="role"
                                    onChange={SelectRole}
                                    input={<BootstrapInput />}
                                >
                                     <MenuItem value='ROLE_ADMIN' name="role">Admin</MenuItem>
                                    <MenuItem value='ROLE_VENDEUR' name="role">Vendeur</MenuItem>
                                    <MenuItem value='ROLE_INFLIENCEUR' name="role">Inflienceur</MenuItem>
                                </Select>
                            </div>
                        </div>


                        {role == 'ROLE_INFLIENCEUR' ?
                            <div>
                                <div className="Cform">
                                    <label htmlFor="adresse">Adresse</label>
                                    <input type="adresse" id="adresse" name="adresse" className="input" style={{ width: 400 }}  {...register("adresse")}></input>
                                </div>

                                <div className="Cform">
                                    <label htmlFor="age">Age</label>
                                    <input type="number" id="username" name="age" className="input" style={{ width: 400 }}  {...register("age")}></input>
                                </div>

                                <div className="Cform">
                                    <label htmlFor="marques_sponsors">Marques_sponsors</label>
                                    <input type="marques_sponsors" id="marques_sponsors" name="marques_sponsors" className="input" style={{ width: 400 }}  {...register("marques_sponsors")}></input>
                                </div>

                                <div className="Cform">
                                    <label htmlFor="motivation">Motivation</label>
                                    <input type="motivation" id="motivation" name="motivation" className="input" style={{ width: 400 }}  {...register("motivation")}></input>
                                </div>

                                <div className="Cform">
                                    <label htmlFor="nbre_abonnee">Nbre_abonnee</label>
                                    <input type="number" id="nbre_abonnee" name="nbre_abonnee" className="input" style={{ width: 400 }}  {...register("nbre_abonnee")}></input>
                                </div>
                                <div className="Cform">
                                    <label htmlFor="nbrevue_story">Nbrevue_story</label>
                                    <input type="number" id="nbrevue_story" name="nbrevue_story" className="input" style={{ width: 400 }}  {...register("nbrevue_story")}></input>
                                </div>
                                <div className="Cform">
                                    <label htmlFor="social_media">Social_media</label>
                                    <input type="social_media" id="social_media" name="social_media" className="input" style={{ width: 400 }}  {...register("social_media")}></input>
                                </div>
                                <div className="Cform">
                                    <label htmlFor="tel">Telephone</label>
                                    <input type="tel" id="tel" name="tel" className="input" style={{ width: 400 }}  {...register("tel")}></input>
                                </div>

                                <div className="Cform">
                                    <label htmlFor="temp_accorde">Temp_accorde</label>
                                    <input type="number" id="temp_accorde" name="temp_accorde" className="input" style={{ width: 400 }}  {...register("temp_accorde")}></input>
                                </div>
                                <div className="Cform">
                                    <label htmlFor="thematique">Thematique</label>
                                    <input type="thematique" id="thematique" name="thematique" className="input" style={{ width: 400 }}  {...register("thematique")}></input>
                                </div>
                                <div className="Cform">
                                    <label htmlFor="ville">Ville</label>
                                    <input type="ville" id="ville" name="ville" className="input" style={{ width: 400 }}  {...register("ville")}></input>
                                </div>
                            </div>
                            : <div></div>

                        }


                    </div>
                    <CardActions className="botton-action2" >
                        <Button variant="contained" color="primary" type="submit" style={{ bottom: 20 }}>
                            SingIn
                        </Button>
                    </CardActions>
                </form>
            </Card>


        </div>




    )

}