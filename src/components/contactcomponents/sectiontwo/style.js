import React from 'react'
export default () => (
    <style js="true">
        {`
        html {
            scroll-behavior: smooth;
          }
        input:focus{
            outline:none;
        }
        button:focus{
            outline:none;
        }
       .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col{
            border: 2px solid #bf8f00;
            border-top: none;
            padding-bottom: 10px;
            text-align:center;
       }
       .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contact-heading{
            padding: 25px 0px;
            font-size: 35px;
       }
       .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contact-text .txtone{
           display:flex;
           justify-content: center;
           align-items: flex-end;
       }
    //    .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contact-text .txttwo{
    //         margin-top: 30px;
    //         width: 14%;
    //         left: 44%;
    //         position: absolute;
    //     }
        // .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contact-text .txtthree{
        //     position: absolute;
        //     left: 67%;
        //     width: 15%;
        //     margin-top: 30px;
        // }
        .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contact-texttwo{
            padding-bottom: 50px;
            margin-bottom:50px;
        }
        .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contact-texttwo .txtfour{
           display:flex;justify-content:flex-end;
        }
        // .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contact-texttwo .txtfive{
        //     position: absolute;
        //     left: 53%;
        //     width: 23%;
        // }
        .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .time-line-image{
            width:94%;
        }
        .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contactsecttwo-col-inner {
            margin-left: 30%;
            margin-top: 5%;
        }
        .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contactsecttwo-col-inner .contact-form{
            text-align: start;
            width: 100%;
        }
        .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contactsecttwo-col-inner .contact-form span{
            color: red;
        }
       .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contactsecttwo-col-inner .contact-form label{
            color: #bf8f00;
            font-size: 25px;
       }
       .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contactsecttwo-col-inner .contact-form input{
            padding: 5px 0px 5px 0px;
            width: 60%;
            margin-bottom: 2%;
        }
        .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contactsecttwo-col-inner .contact-form .radiobutton{
            width: 57%;
            padding-bottom: 15px;
        }
        .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contactsecttwo-col-inner .contact-form .radiobutton .radiolabel{
            font-size: 17px;
        }
        .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contactsecttwo-col-inner .contact-form .radiobutton input{
            width: 20px;
            margin-left: 5px;
            margin-top: 4px;
            position: absolute;
            height: 20px;
            outline: none;
            -webkit-appearance: none;
            border: 2px solid #bf8f00;
            border-radius: 50%;
        } 
        .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contactsecttwo-col-inner .contact-form .radiobutton input:before{
            content: '';
            display: block;
            width: 11px;
            height: 11px;
            border-radius: 100%;
            margin: -2px 0px 0px 3px;
        }
        .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contactsecttwo-col-inner .contact-form .radiobutton input:checked:before{
            background: #bf8f00;
        }
        .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contactsecttwo-col-inner .contact-form button{
            padding: 5px 40px 5px 40px;
            background: #bf8f00;
            border: 2px solid #bf8f00;
            border-radius: 6%;
            color: white;
        }
        .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col hr{
            margin-top:5%;
            width:95%;
        }
        .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contact-footer{
            align-items: center;
        }
        .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contact-footer img{
            width: 10%;
        }
        .contactsecttwo-container .contactsecttwo-subcontainer .contactsecttwo-col .contact-footer p{
            display: inline;
            margin-left: 15px;

        }
        .for-mobile{
            display:none;
        }
        .flex-1{
            flex:1;
        }
        .width-50{
            width:55%;
        }
        .text-align-center{
            text-align: -webkit-center;
        }
        .text-align-right{
            text-align: right;
        }
        `}
    </style>
)