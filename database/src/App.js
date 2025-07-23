import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import {
    ScatterChart, Scatter, LabelList, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend
} from 'recharts';

const rawData = [
    {
        "key": "Grape",
        "key_fr": "Raisin",
        "Raw": 420,
        "Jar": 1200,
        "Keg": 1380,
        "raw_price": 80,
        "growth_time": 10,
        "image": "/images/grape.png",
        "type": "fruit"
    },
    {
        "key": "Melon",
        "key_fr": "Melon",
        "Raw": 340,
        "Jar": 1020,
        "Keg": 1420,
        "raw_price": 250,
        "growth_time": 12,
        "image": "/images/melon.png",
        "type": "fruit"
    },
    {
        "key": "Starfruit",
        "key_fr": "Fruit étoile",
        "Raw": 700,
        "Jar": 2700,
        "Keg": 4100,
        "raw_price": 750,
        "growth_time": 13,
        "image": "/images/starfruit.png",
        "type": "fruit"
    },
    {
        "key": "Amaranth",
        "key_fr": "Amarante",
        "Raw": 320,
        "Jar": 1330,
        "Keg": 1278,
        "raw_price": 150,
        "growth_time": 7,
        "image": "/images/amaranth.png",
        "type": "vegetable"
    },
    {
        "key": "Artichoke",
        "key_fr": "Artichaut",
        "Raw": 390,
        "Jar": 1080,
        "Keg": 1050,
        "raw_price": 160,
        "growth_time": 8,
        "image": "/images/artichoke.png",
        "type": "vegetable"
    },
    {
        "key": "Bok Choy",
        "key_fr": "Bok choy",
        "Raw": 180,
        "Jar": 1210,
        "Keg": 1030,
        "raw_price": 80,
        "growth_time": 4,
        "image": "/images/bok_choy.png",
        "type": "vegetable"
    },
    {
        "key": "Cauliflower",
        "key_fr": "Chou-fleur",
        "Raw": 190,
        "Jar": 720,
        "Keg": 706,
        "raw_price": 175,
        "growth_time": 12,
        "image": "/images/cauliflower.png",
        "type": "vegetable"
    },
    {
        "key": "Corn",
        "key_fr": "Maïs",
        "Raw": 50,
        "Jar": 450,
        "Keg": 298,
        "raw_price": 50,
        "growth_time": 14,
        "image": "/images/corn.png",
        "type": "vegetable"
    },
    {
        "key": "Eggplant",
        "key_fr": "Aubergine",
        "Raw": 280,
        "Jar": 830,
        "Keg": 655,
        "raw_price": 60,
        "growth_time": 5,
        "image": "/images/eggplant.png",
        "type": "vegetable"
    },
    {
        "key": "Garlic",
        "key_fr": "Ail",
        "Raw": 120,
        "Jar": 980,
        "Keg": 770,
        "raw_price": 60,
        "growth_time": 4,
        "image": "/images/garlic.png",
        "type": "vegetable"
    },
    {
        "key": "Green Bean",
        "key_fr": "Haricot vert",
        "Raw": 180,
        "Jar": 720,
        "Keg": 480,
        "raw_price": 40,
        "growth_time": 10,
        "image": "/images/green_bean.png",
        "type": "vegetable"
    },
    {
        "key": "Hops",
        "key_fr": "Houblon",
        "Raw": 365,
        "Jar": 1640,
        "Keg": 892,
        "raw_price": 25,
        "growth_time": 11,
        "image": "/images/hops.png",
        "type": "vegetable"
    },
    {
        "key": "Hot Pepper",
        "key_fr": "Piment",
        "Raw": 280,
        "Jar": 1000,
        "Keg": 680,
        "raw_price": 40,
        "growth_time": 5,
        "image": "/images/hot_pepper.png",
        "type": "vegetable"
    },
    {
        "key": "Kale",
        "key_fr": "Chou frisé",
        "Raw": 160,
        "Jar": 1010,
        "Keg": 918,
        "raw_price": 110,
        "growth_time": 6,
        "image": "/images/kale.png",
        "type": "vegetable"
    },
    {
        "key": "Parsnip",
        "key_fr": "Panais",
        "Raw": 90,
        "Jar": 700,
        "Keg": 448,
        "raw_price": 35,
        "growth_time": 4,
        "image": "/images/parsnip.png",
        "type": "vegetable"
    },
    {
        "key": "Potato",
        "key_fr": "Pomme de terre",
        "Raw": 184,
        "Jar": 958,
        "Keg": 814,
        "raw_price": 80,
        "growth_time": 6,
        "image": "/images/potato.png",
        "type": "vegetable"
    },
    {
        "key": "Pumpkin",
        "key_fr": "Citrouille",
        "Raw": 440,
        "Jar": 1280,
        "Keg": 1340,
        "raw_price": 320,
        "growth_time": 13,
        "image": "/images/pumpkin.png",
        "type": "vegetable"
    },
    {
        "key": "Tomato",
        "key_fr": "Tomate",
        "Raw": 250,
        "Jar": 800,
        "Keg": 625,
        "raw_price": 60,
        "growth_time": 11,
        "image": "/images/tomato.png",
        "type": "fruit"
    },
    {
        "key": "Yam",
        "key_fr": "Igname",
        "Raw": 200,
        "Jar": 680,
        "Keg": 660,
        "raw_price": 160,
        "growth_time": 10,
        "image": "/images/yam.png",
        "type": "vegetable"
    }
];


const en = {
    title: "Staredew Valley Crops Dashboard",
    moreInfo: "More Info",
    Close: "Close",
    Raw: "Raw: ",
    Jar: "Jar: ",
    Keg: "Keg: ",
    filter: "View crops of a specific type: ",
    fruit: "fruit: ",
    vegetable: "vegetable: ",
    barHeader: "Seasonal profit of crops per tile",
    scatterHeader: "Revenue from a single crop against its time to grow",
    value: "Crop Value: ",
    time: "Time to Grow: ",
    description: "Based on the farming simulator game Stardew Valley by Eric Barone. \nAll data from https://forums.stardewvalley.net/threads/complete-spreadsheet-of-crops-profit-including-jar-keg-and-cask-processing.298/ and arranged using generative AI"
}
const fr = {
    title: "Tableau de bord des cultures de Stardew Valley",
    moreInfo: "Plus d\u0027infos",
    Close: "Fermer",
    Raw: "Brut: ",
    Jar: "Conserve: ",
    Keg: "F\u00fbt: ",
    filter: "Afficher les cultures d\u2019un type sp\u00e9cifique : ",
    fruit: "fruit: ",
    vegetable: "l\u00e9gume: ",
    barHeader: "Profit saisonnier des cultures par case",
    scatterHeader: "Revenu d\u0027une culture unique selon son temps de croissance",
    value: "Valeur de la culture : ",
    time: "Temps de croissance : ",
    description: "Bas\u00e9 sur le jeu de simulation agricole Stardew Valley d\u2019Eric Barone. \nToutes les donn\u00e9es provenant de https://forums.stardewvalley.net/threads/complete-spreadsheet-of-crops-profit-including-jar-keg-and-cask-processing.298/ et organis\u00e9es \u00e0 l\u2019aide d\u2019une intelligence artificielle g\u00e9n\u00e9rative"
};


    




function App() {

    
    const[cropType, setCropType] = useState("vegetable")
    const [lang, setLang] = useState('en')

    const translatedData = rawData.map(item => ({

        name: item.key,
        name_fr: item.key_fr,
        Raw: item.Raw,
        Jar: item.Jar,
        Keg: item.Keg,
        value: item.raw_price,
        growth_time: item.growth_time,
        image: item.image,
        type: item.type
    })).filter(crop => crop.type.includes(cropType));

    const CustomTooltipScatter = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
                    <p>  <img
                        src={data.image}
                        alt={data.key}
                        style={{ width: '24px', height: '24px', marginRight: '4px' }}

                    /><strong>{lang === 'en' ? data.name : data.name_fr}</strong></p>
                    <p>{lang === 'en' ? en.value : fr.value}{data.value}</p>
                    <p>{lang === 'en' ? en.time : fr.time}{data.growth_time}</p>
                </div>
            );
        }

        return null;
    };

    const CustomTooltipBar = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
                    <p>  <img
                        src={data.image}
                        alt={data.key}
                        style={{ width: '24px', height: '24px', marginRight: '4px' }}

                    /><strong>{lang === 'en' ? data.name : data.name_fr}</strong></p>
                    <p>{lang === 'en' ? en.Raw : fr.Raw}{data.Raw}</p>
                    <p>{lang === 'en' ? en.Jar : fr.Jar}{data.Jar}</p>
                    <p>{lang === 'en' ? en.Keg : fr.Keg}{data.Keg}</p>
                </div>
            );
        }

        return null;
    };
    
    return (
        <Container className="App" style={{ backgroundImage: "url(/images/stardewBackground.jpg)" }}>
            <Router>
                <Navbar style={{ backgroundColor: 'rgba(104, 168, 233, 1)' }} expand="lg">
                    <Container>
                        <Navbar.Brand href="/">{lang=== 'en' ? en.title : fr.title}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                
                            </Nav>
                            <div className="d-flex align-items-center ms-auto">
                                <Button
                                    variant="outline-dark"
                                    onClick={() => setLang('en')}
                                >
                                    EN
                                </Button>
                                <Button
                                    variant="outline-dark"
                                    onClick={() => setLang('fr')}
                                >
                                    FR
                                </Button>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div className="my-4 text-center">
                    <p>{lang === 'en' ? en.description : fr.description}</p>
                </div>

                <div className="mb-4 text-center">
                    <label htmlFor="currency" className="mr-2 font-medium"> {lang === 'en' ? en.filter : fr.filter}</label> 
                    <select
                        id="currency"
                        value={cropType}
                        onChange={(e) => setCropType(e.target.value)}
                        className="p-2 border rounded"
                    >
                        {["fruit", "vegetable"].map((cur) => (
                            <option key={cur} value={cur}>{cur}</option>
                        ))}
                    </select>
                </div>

                <h2>{lang === 'en' ? en.barHeader : fr.barHeader}</h2>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={translatedData} margin={{ top: 10, right: 30, left: 0, bottom: 30 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" height={60} />
                        <YAxis />
                        <Tooltip content={<CustomTooltipBar/> } />
                        <Legend />
                        <Bar dataKey="Raw" fill="#77875E" />
                        <Bar dataKey="Jar" fill="#A34836" />
                        <Bar dataKey="Keg" fill="#D47726" />
                    </BarChart>
                </ResponsiveContainer>

                <h2>{lang === 'en' ? en.scatterHeader : fr.scatterHeader}</h2>

                <ResponsiveContainer width="100%" height={300}>
                    <ScatterChart
                        width={500}
                        height={300}
                        data={translatedData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" dataKey="growth_time" name="Time to Grow" />
                        <YAxis type="number" dataKey="value" name="Crop value" />
                        <Tooltip content={<CustomTooltipScatter />} />
                        <Scatter name="crops" data={translatedData} />
                        <LabelList dataKey="name" />
                    </ScatterChart>
                        </ResponsiveContainer>
                
            </Router>
            
        </Container>
    );
}

export default App;