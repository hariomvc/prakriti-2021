import React, { Component } from "react";
import Navbar from "../Navbar/Navbar2";
import Jayeeta from "../public_html/img/Jayeeta Ma'am.png";
import Machavaram from "../public_html/img/Rajendra Machavaram sir.jpg";
import Hod from "../public_html/img/hod.jpg";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import tbg from "../public_html/img/tbg.jpeg";
import tbg1 from "../public_html/img/tbg1.jpg";

export default class Team extends Component {
  render() {
    return (
      <div style={{paddingTop: "15vh",
        background: `url('${tbg1}') repeat center center`,
        
      }}>
                 <marquee
   style={{
    zIndex: "10",
    position: "absolute",
    left: "5px",
    top: "80px",
    fontFamily: "sans-serif",
    backgroundColor: "#F0720D",
    marginRight: "20px",
    fontSize: "12pt",
    fontWeight: "bold",
    color: "#267355",
    height: "34px",
    width: "99vw",
    border: "black 3px SOLID",
    scrollamount: "9",
        }}
      >
        {" "}
        <strong></strong>&nbsp;&nbsp;&nbsp; The events are conducted in Online
        mode due to outbreak of the pandemic caused by (COVID-19) !!
        &nbsp;&nbsp;&nbsp; For any query, you can contact us on our
        contact@prkrt.co.in or Facebook page!
      </marquee>  
        <div class="section-headline services-head text-center">
          <h2>Professors</h2>
        </div>
        <br />
        <br />
        <br />
        <div
          style={{ width: "100vw", display: "flex", justifyContent: "center" }}
        >
          <div >
            <Card style={{ width: '23em' }}>
              <Card.Img variant="top" src={Hod} />
              <Card.Body style={{ textAlign: "center" }}>
              <Card.Title style={{ fontSize:'1.1em' }}>Nirupama Mallick</Card.Title>
              <Card.Text style={{ fontSize:'1em' }}>Head of Department</Card.Text>
              </Card.Body>
            </Card>
          </div>{" "}
        </div>

        <br />
        
        <div
          style={{ width: "100vw", display: "flex", justifyContent: "center" }}
        >
        <div >
          <CardDeck >
          <Card style={{ width: '20em' }}>
            <Card.Img variant="top" src={Jayeeta} style={{ height:'24em' }} />
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title style={{ fontSize:'1.1em' }}>Nirupama Mallick</Card.Title>
              <Card.Text style={{ fontSize:'1em' }}>Head of Department</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Machavaram} style={{ height:'24em' }}/>
            <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ fontSize:'1.1em' }}>Nirupama Mallick</Card.Title>
              <Card.Text style={{ fontSize:'1em' }}>Head of Department</Card.Text>
            </Card.Body>
          </Card></CardDeck>
        </div></div> <br />
        <div
          style={{ width: "100vw", display: "flex", justifyContent: "center" }}
        >
        <div >
          <CardDeck >
          <Card style={{ width: '38rem' }}>
            <Card.Img variant="top" src={Hod} style={{ height:'34rem' }}/>
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title style={{ fontSize:'1.1em' }}>Nirupama Mallick</Card.Title>
              <Card.Text style={{ fontSize:'1em' }}>Head of Department</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Hod} style={{ height:'34rem' }}/>
            <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ fontSize:'1.1em' }}>Nirupama Mallick</Card.Title>
              <Card.Text style={{ fontSize:'1em' }}>Head of Department</Card.Text>
            </Card.Body>
          </Card> <Card>
            <Card.Img variant="top" src={Hod} style={{ height:'34rem' }}/>
            <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ fontSize:'1.1em' }}>Nirupama Mallick</Card.Title>
              <Card.Text style={{ fontSize:'1em' }}>Head of Department</Card.Text>
            </Card.Body>
          </Card></CardDeck>
        </div></div>
        <br />
        <br />
      </div>
    );
  }
}
