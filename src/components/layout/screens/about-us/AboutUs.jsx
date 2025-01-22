import React from 'react';
import {useEffect}  from "react";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRouteError } from "react-router-dom";
import { useRef } from 'react';
import Layout from '../../Layout';
import "./AboutUs.scss"
import MyElementRef from '../../../scroll_about_us/MyElementRef';
import { Link } from 'react-router-dom';

    



const AboutUs = () =>{
    return(
        <Layout>
            
            <MyElementRef/>
        </Layout>
    )
}

export default AboutUs