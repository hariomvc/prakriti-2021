import React, { Component } from "react";
import Eventcard from "./Eventcard";
import Guestcard from "./GuestCard";
import Testcard from "./testcard";
import "./Eventcard.css";

export default class Eventslist extends Component {
  render() {
    return (
      <div >
        <img src="https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{position:"fixed",height:'100vh',weight:"100vw",zIndex:"-1"}}/>
        <br />
        <br />
        <br />
        <br />
      
        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
        <div class="row" style={{width:"100vw"}}>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="section-headline text-center">
                <h2 style={{ color: "#11785D",textAlign:"center", }}>Events</h2>
              </div>
            </div>
          </div>
          <div >
            <Eventcard
              cname="blog-card-e"
              sponsor="https://raw.githubusercontent.com/tarun-tej-t/prakriti-2021/master/src/Components/Events_new/eggozlogo.png"
              poster="https://github.com/mridulaburagohain/wendev/blob/main/Crack-The-Egg-Challenge-Poster.png?raw=True"
              name="Crack The Egg Challenge"
              tagline="Think out of the box and design an innovative food product"
              prizemoney="90,000"
              description="PRAKRITI-2022 brings to you Crack The Egg Challenge, one of the biggest food-product development events of the year in collaboration with AFST Haldia Chapter. In this event, Eggoz Nutrition shares the major challenges and constraints of the Indian egg industry. Participants are required to address them and come up with an innovative, end-to-end egg-based product that meets the specifications mentioned in the problem statement.
"
              deadline="15th July 2022"
              ps="https://www.prkrt.co.in/crack-the-egg-ps"
              submit="https://bit.ly/CracktheeggSubmission"
            />{" "}
                {/* <Eventcard
              cname="blog-card-e alt"
              sponsor="https://raw.githubusercontent.com/tarun-tej-t/prakriti-2021/master/src/Components/Sponsors/altair.png"
              name="MACHINE FREAKS"
              prizemoney="25,000"
            poster="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/ma.png"
              tagline="Analyse the past and predict the future"
              description="In this competition, you would be challenged to use Discrete Element Modelling (DEM) to effectively simulate the soil-tool interaction for tillage applications in ALTAIR EDEM with an appropriate physics model and study the drat forces with respect to tillage speed while taking soil cohesion and adhesion into account."
             ps="https://www.prkrt.co.in/Machine-Freaks-PS"
             deadline="31st March, 2022"
            submit="https://forms.gle/QkXj9wtHndHH89c37"
            /> */}
            <Eventcard
              cname="blog-card-e "
              sponsor="http://www.abiciitkgp.com/homeImage/ABIC-%20LOGO.png"
              name="Agrivation"
              poster="https://static.meraevents.com/content/gallery/248437/AGRIVATION1-EXTENDED1648300459.png"
              tagline="Come up with Viable Startup Ideas"
              prizemoney="20,000"
              description="Agrivation is an Agri-Innovation competition that
            encourages business minded people to build
            viable food and agriculture-based enterprises
            which may have the potential to upgrade the
            existing agriculture scenarios, create employment
            and improve the incomes of people engaged
            directly and indirectly in agro-based activities.
            Agrivation lets participants enter in the shoes of
            the customer and think of products, services and
            ideas that can build new enterprises or develop
            existing enterprises in a unique way."
            deadline="31st March 2022"
            ps="https://www.prkrt.co.in/agrivation-ps"
              submit="https://bit.ly/Agrivation-Submissions"
            />
                <Eventcard
              cname="blog-card-e alt"
              name="Krishi Manthan"
              poster="https://static.meraevents.com/content/gallery/248437/k-m-p1647573341.jpg"
              tagline="A Case study competition"
              prizemoney="20,000"
              description="Manthan is a case study competition aimed to
              challenge the strategic and analytical thinking skills
              of participants. The participants are presented with
              a specific problem in the agricultural or food sector
              along with some specific resource constraints.
              They are required to come up with the most
              feasible solution to the problem considering the
              constraints provided by us."
              deadline="30th March 2022"
            ps="https://www.prkrt.co.in/krishi-manthan-ps"
            submit="https://forms.gle/sq1HTiZsPCie1VoRA"
            />
            <Eventcard
            cname="blog-card-e "
            name="POSTER PRESENTATION "
            poster="https://static.meraevents.com/content/gallery/248437/p-p-p1647616384.jpg"
            tagline="Communicate your research and understanding"
            prizemoney="5000"
            description="A picture is worth a thousand words, but a well
            designed poster is worth a million. Posters are an
            expression of thoughts and technical expertise. In
            this event, participants are challenged to pictorially
            portray a trending topic in modern agriculture. The
            poster must be visually pleasing and should clearly
            explain the significance of the given topic."
            deadline="31st March 2022"
                   ps="https://www.prkrt.co.in/Poster-Presentation-PS"
                   submit="https://docs.google.com/forms/d/e/1FAIpQLSeTKvQ5lZdBBJh58P8BDbVYF4ISUZHEcR-0cjDpf-IZmGcJcg/viewform"
                  />
            <Eventcard
              cname="blog-card-e alt"
              name="SELFIE WITH NATURE"
              poster="https://static.meraevents.com/content/gallery/248437/swn1646826096.jpg"
              tagline="A photography contest"
              prizemoney="5000"
              description="There are no such special moments where selfies
              aren’t clicked. “Selfie with Nature” - another fun
              event of Prakriti lets participants showcase such
              moments through their selfie with nature where
              they become one with nature ."
              rules="https://drive.google.com/file/d/1rQZG_VJ-ioCdrmTfYdKLimFUqDoHgd_J/view?usp=sharing"
              submit="https://bit.ly/Selfie-With-Nature"
            />
               
          
          
           
                  <Eventcard
            cname="blog-card-e"
            sponsor="https://i.pinimg.com/736x/39/f2/bf/39f2bf80479a0846fd7aaf1a8c0522ea.jpg"
            poster="https://raw.githubusercontent.com/hariomvc/prakriti-images/main/Posters/Quizella-Agro-Quiz.jpeg"
            name="QUIZELLA: Agro Quiz"
            tagline="Let's play a mind sport"
            description="It is said “Knowledge is Power” which proves itself
            time and again. To test the knowledge of the
            students in general awareness of the world around
            us and technical questions from the field of
            agriculture, we bring to you the Agro-Tech quiz
            named, named “Quizella”. It would provide a
            platform to the best minds of India in the field of
            Agricultural and Food Engineering to test their
            excellence amongst others and find out their
            stand. Having a vast range of questions from direct
            ones to video, this event will surely keep all your
            participants in full charge of your senses."
          prizemoney="5,000"
          joinlink1="https://www.agrivision4u.com/register/624739bb27f98409b96f9e02"
          joinlink2="https://www.agrivision4u.com/quiz/624739bb27f98409b96f9e02"
                  />
                  
                <Eventcard
            cname="blog-card-e alt"
            poster="https://raw.githubusercontent.com/hariomvc/prakriti-images/main/Posters/Treasure-Hunt.png"
            name="TREASURE HUNT"
            tagline="Be the first in finding something"
            description="The “New-Normal” has made us prone to
            frustration and boredom. Being locked in a room in
            front of computers for several hours squeezes the
            life out of most of us. To remove the boredom and
            provide some fun, PRAKRITI-2022 is coming up
            with an online-treasure hunt event. In this event,
            participants are taken through a digital
            treasure-hunt journey through lush-green forests
            with a lot of hidden dangers. The individuals who
            gather the highest amount of treasure at the end of
            an hour becomes the winner."
          prizemoney="5000"
          joinlink2="https://forms.gle/GvMKLhzJUrahvec79"
                  />

<div class="row" style={{width:"100vw"}}>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="section-headline text-center">
                <h2 style={{ color: "#11785D",textAlign:"center", }}>Guest Lectures</h2>
              </div>
            </div>
          </div>


          <Guestcard
              cname="blog-card-e"
              name="GUEST LECTURES"
            poster="https://github.com/mridulaburagohain/wendev/blob/main/guestLecture.jpeg?raw=true"
              tagline="Interaction session"
              description="We are glad to announce Dr. Abhilash Kumar Chandel as a guest speaker for the webinar to be held on 1st April 2022, 8PM onwards.

              Dr. Chandel is an Assistant Professor and Extension Specialist of Precision Agriculture Technologies and Data Management with the department of Biological Systems Engineering at Virginia Tech, US. He is also an affiliate faculty of Center for Advanced Innovation in Agriculture at Virginia Tech. His primary research is development and deployment of high throughput and cutting-edge technologies for agricultural production management against the challenges of rising population, climate change crisis, crop infestation, and demand for chemical free food.

              In this interactive webinar, Mr. Abhilash would explain the existing challenges in crop production due to climate change and also describe the various climate-smart tools being developed to tackle the losses incurred due to climate change."
            time="8:00pm onwards, 1st April 2022"
              joinlink="https://bit.ly/Building-Climat-Smart-Tools-For-Agriculture"
            />

                  <Guestcard
              cname="blog-card-e alt"
              name="GUEST LECTURES"
            poster="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/g1.jpeg"
              tagline="Interaction session with industry experts"
              description="We are glad to announce Mr. Uttam kumar and Mr. Aditya singh, fonder & co-founder of Eggoz Nutrition as our guests for the upcoming panel discussion on 2nd April, 7 pm onwards.

              They founded eggoz in 2017 with a vision to help farmers of rural India and improve their income. Eggoz is a brand of packaged eggs with a promise of freshness and quality. They are on a mission to revolutionize India’s protein consumption by bringing UV sanitized eggs fresh from the farm to plates of millions of consumers.
              Their eggs are free from any chemicals, steroids, and hormones and reach consumers within 36 hours of laying. This ensures that their eggs are healthier for consumption and have a high bio-availability of protein.
              
             
              In this panel discussion, they will be sharing their experience and learnings from their wonderful entrepreneurial journey."
            time="7:00-8:00pm, 2nd April 2022"
              joinlink="https://bit.ly/How-To-Start-An-Eggcellent-Startup"
            />
            
            <Guestcard
              cname="blog-card-e"
              name="GUEST LECTURES"
            poster="https://github.com/mridulaburagohain/wendev/blob/main/3rd%20ap%20panel.jpeg?raw=true"
              tagline="Panel Discussion"
              description="
              
              We are glad to announce 
              
               Mr. Umesh Kumar (Senior Vice President, Crofarm), Mr. Kishore Indukuri (CEO, Sids Farm Pvt Ltd), Mr. Sachin Shende (CEO, FarmSetu) and Mr. Amith Agarwal( Co-founder and CEO, Agribazaar) 
              as panelists for the panel discussion to be held on 3rd April 2022, from 12PM onwards. In this interactive panel discussion, panelists would discuss :
              Challenges in existing supply chains for edibles, Efforts are being made to reduce the wastage in new supply chain models, Landscape of technological advancements in modern supply chains, Opportunities lying for Indian entrepreneurs, and much more"
            time="12:00-1:00pm, 3rd April 2022"
              joinlink="https://bit.ly/Exploring-the-Depths-of-the-Food-Supply-Chain"
            />
            <Guestcard
              cname="blog-card-e alt"
              name="GUEST LECTURES"
            poster="https://github.com/mridulaburagohain/wendev/blob/main/2%3B30%20panel.jpeg?raw=true"
              tagline="Panel Discussion"
              description="We are glad to announce Mr. Ananda Verma (CEO at Fasal), Mr. Venky Ramachandran (Writer, researcher, and consultant at agribusiness matters),
             Mr. Nikhil Tripathi (Co-Foundern at Bijak) and Mr. Mayank Gupta (Co-Founder, LandCraft Agro) as our guests for the upcoming panel discussion on 3rd April, 2:30  pm onwards.
             Fasal is one of the best precision agriculture companies in the country, which helps farmers to make farming predictable, profitable, and sustainable for a better future.
             Agribusiness Matters is a weekly newsletter covering Agriculture and Agribusiness in the nick of transformation. Bijak aims to bridge the information asymmetry and lack of accountability in agricultural commodities trading. LandCraft Agro is revolutionizing the future of farming with its hi-tech farming methods which grow high-quality organic produce in an extremely resource-efficient manner.
             In this panel discussion, they will be sharing their experience and overviews of how they managed to solve the Complex problems of Food Security.
             "
            time="2:30-3:30 pm, 3rd April 2022"
              joinlink="https://bit.ly/solving-complex-problems-of-food-security"
            />
{/* <Testcard
            cname="blog-card-e"
            sponsor="https://i.pinimg.com/736x/39/f2/bf/39f2bf80479a0846fd7aaf1a8c0522ea.jpg"
            poster="https://static.meraevents.com/content/gallery/248437/quizella1648300681.jpeg"
            name="QUIZELLA"
            tagline="Let's play a mind sport"
            description="It is said “Knowledge is Power” which proves itself
            time and again. To test the knowledge of the
            students in general awareness of the world around
            us and technical questions from the field of
            agriculture, we bring to you the Agro-Tech quiz
            named, named “Quizella”. It would provide a
            platform to the best minds of India in the field of
            Agricultural and Food Engineering to test their
            excellence amongst others and find out their
            stand. Having a vast range of questions from direct
            ones to video, this event will surely keep all your
            participants in full charge of your senses."
          prizemoney="10,000"
                  />
              */}
          </div>
        </div>
      </div>
    );
  }
}
