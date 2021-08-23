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
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import {ForgetPassword} from '../service/service'


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(4),
        },
    },
}));
export default function Password() {
    const { handleSubmit, register, errors } = useForm({});
    let history = useHistory();
    function onSubmit(data) {
        ForgetPassword(data).then((res) =>{
            if(res.status =200) {
                history.push("/")
    
            }else{

            }
        })
       

    }
    const classes = useStyles();


    return (


        <div className="container">
            <div>
                <img src="https://www.litmus.com/wp-content/uploads/2020/04/5-of-the-best-password-reset-emails.png" alt="login-icon" width="100px" style={{ marginTop: 30 }} />
            </div>
            <br></br>
            <Card className="card2" >

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.root} noValidate autoComplete="off">
                        <div className="Cform">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" className="input" style={{ width: 400 }}  {...register("email")}></input>

                        </div>
                        <div>
                        </div>
                    </div>
                    <div className={classes.root} noValidate autoComplete="off">
                        <div className="Cform">
                            <label htmlFor="password">Password</label>
                            <input type="text" id="password" name="password" className="input" style={{ width: 400 }}  {...register("password")}></input>

                        </div>
                        <div>
                        </div>
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