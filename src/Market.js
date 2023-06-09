import React from 'react';
import './Market.css';
import questionMark from './Asset/icon_question.png'
import info from './Asset/icon_info.png'

function Market() {
    return (
        <div className="Market">
            <div className="Market-Container">
                <div className="Market-Notification">
                    <div className='Notification-Image'>
                        <img src={info} className='Market-Notification-Logo' />
                    </div>
                    <div className='Notification-Text'>
                        <p className='Text-Description'>Market to close on</p>
                        <p className='Text-DDT'>Mon, 17 October 2022, 10:00 PM</p>
                    </div>
                </div>
                <div className="Operating-Hours">
                    <div>
                        <p className='Operating-Hours-Text'>1d:4h:35m:3s</p>
                    </div>
                    <div>
                        <img src={questionMark} className='Operating-Hours-Logo' />
                    </div>
                </div>
                <div className='Market-Operating-Section'>
                    <p className="Operating-Hour-Title">Market Operating Hours</p>
                    <div className="Trading">
                        <div className="Section-Title">
                            <p>TRADING</p>
                        </div>

                        <div className='Trading-Hours-Section'>
                            <div className='Description-And-Hours'>
                                <p>Wednesday</p>
                                <p>10:00 AM - 10:00 PM </p>
                            </div>
                            <div className='Description-And-Hours'>
                                <p>Thursday</p>
                                <p>10:00 AM - 10:00 PM </p>
                            </div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div className='Order-Book'>
                        <div className='Section-Title'>
                            <p>ORDER BOOK</p>
                        </div>
                        <div className='Ordering-Hours-Section'>
                            <div className='Description-And-Hours'><p>Monday</p>
                                <p>10:00 AM Onwards</p></div>
                            <div className='Description-And-Hours'><p>Tuesday</p>
                                <p>All Day</p></div>
                            <div className='Description-And-Hours'><p>Wednesday</p>
                                <p>All Day</p></div>
                            <div className='Description-And-Hours'><p>Thursday</p>
                                <p>All Day</p></div>
                            <div className='Description-And-Hours'><p>Friday</p>
                                <p>Until 10:00 AM</p></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Market;
