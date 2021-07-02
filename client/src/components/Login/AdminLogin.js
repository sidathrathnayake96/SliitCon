/* eslint-disable no-unused-vars */
import React,{Component,useState, useEffect} from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import '../../css/styles.css';
import '../../css/form.css';
import logo from '../../img/login.png'
import HeaderNormal from '../Header/HeaderNormal';
import Footer from '../Footer/Footer';

export default class AdminLogin extends Component {
constructor (props){
    super(props);

    this.state = {
        adminEmail:"",
        adminPassword:"",
    }
}

handleInputChange = (e) => {
    const {name, value} = e.target;

    this.setState({
        ...this.state,
        [name]: value
    })
    
}


// useEffect(() => {
//     if(localStorage.getItem("adminToken")){
//         history.push("/");
//     }
// }, [history]);

adminLoginHandler = (e) => {
    e.preventDefault();
    const { adminEmail, adminPassword } = this.state;
    const data = {
        adminEmail: adminEmail,
        adminPassword: adminPassword
    }
        axios.post("http://localhost:5000/admin/adminlogin",data).then((res) =>{
            if(res.data.success){
                localStorage.setItem("adminToken", res.data.token);
                localStorage.setItem("adminEmail", data.adminEmail);
                this.props.history.push('/adminhome');
            }
<<<<<<< HEAD
=======
            else{
                alert('Email or password Incorrect.')
            }
>>>>>>> 4ce0d41... Final AF Commit
        })
        

        
}

render (){
    return (
        <div>
            <HeaderNormal/>
            <main id="register">
            <div className="login-container" style={{ marginTop:'2%'}}>
            <h1 htmlFor="role" className="text-dark" style={{textAlign:"center", fontWeight:"bolder", fontFamily:'fantasy'}}>LOGIN</h1><br/>
                <div class="row-login">
                        <div class="column-login" style={{background: '#fff', borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px'}}>
                        <img className="form-img" src={logo} alt="Logo" />
                        </div>
                        <div class="column-login" style={{background:'#fff'}}>
                        <br/>
                        <br/>
                        <br/>
                        <div className="form-group">
                                
                                <input 
                                    type="text" 
                                    id="adminEmail" 
                                    value={this.state.adminEmail} 
                                    onChange={this.handleInputChange}
                                    name="adminEmail" 
                                    placeholder="Enter email your registered with"
                                    tabIndex={1}
                                    required/>
                            </div>
                                       
                            <div className="form-group">
                                
                                
                                <input 
                                    type="password" 
                                    id="adminPassword" 
                                    value={this.state.adminPassword} 
                                    onChange={this.handleInputChange}
                                    name="adminPassword" 
                                    placeholder="Enter Password"
                                    tabIndex={2}
                                    required/>
                            </div>
                            <Link to="/adminforgotpassword" tabIndex={4} style={{float:'right',marginRight:'20px',fontSize:'14px', fontWeight:"bolder", fontFamily:'cursive'}}>Forgot password?</Link>
                            <br/>
                            <hr/>
        
                            <div className="form-group" style={{marginLeft:'30%'}}>
                                <button type="submit" onClick={this.adminLoginHandler} className="form-btn-login" tabIndex={3}>Login</button>
                                
                            </div>   
               
                
                        </div>
                    </div>

            </div>
            </main>
            
            <Footer/>
        </div> 
       
       );
}

}
