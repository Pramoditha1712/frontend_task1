import React from 'react';
import './Cards.css';
import Add_Your_Listing from '../assets/Add_Your_listing1.png';
import { IoIosPeople } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCart } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

function Cards() {
  return (
    <div className="container cards-container">
      <div className="header d-flex align-items-center justify-content-center mb-4">
        <img src={Add_Your_Listing} className="plus-icon-size" alt="Add Your Listing" />
        <h3 className="ms-3">Add Your Listing</h3>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div className="card card-size card1">
            <div className="card-body">
              <h5 className="card-title"> <IoIosPeople size={37}/> People</h5>
              <p className="card-text">
                Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              <a href="#" className="btn btn1">Connect</a>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card card-size card2">
            <div className="card-body">
              <h5 className="card-title"><FaLocationDot size={37} />Place</h5>
              <p className="card-text">
                Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.
              </p>
              <a href="#" className="btn btn2">Meet Up</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div className="card card-size card3">
            <div className="card-body">
              <h5 className="card-title"><IoIosCart size={37}/> Product</h5>
              <p className="card-text">
                Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.
              </p>
              <a href="#" className="btn btn3">Get it</a>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card card-size card4">
            <div className="card-body">
              <h5 className="card-title"><SlCalender size={37}/> Program</h5>
              <p className="card-text">
                Find events, meetups and workshops related to your hobby. Register or buy tickets online.
              </p>
              <a href="#" className="btn btn4">Attend</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
