import React from 'react'
import '../styles/statistics.css'
import icon1 from '../images/icon-brand-recognition.svg'
import icon2 from '../images/icon-detailed-records.svg'
import icon3 from '../images/icon-fully-customizable.svg'

export default function Statistics() {
    return (
        <section className='statistics-section'>
            <div className='statistics-container'>
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                <div className='cards-container'>
                    <div className='cards'>
                        <div className='icon'>
                            <img src={icon1} alt='statistic'></img>
                        </div>
                        <h3>Brand Recognition</h3>
                        <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
                    </div>
                    <div className='bar'></div>
                    <div className='cards'>
                        <div className='icon'>
                            <img src={icon2} alt='statistic'></img>
                        </div>
                        <h3>Detailed Records</h3>
                        <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
                    </div>
                    <div className='bar'></div>
                    <div className='cards'>
                        <div className='icon'>
                            <img src={icon3} alt='statistic'></img>
                        </div>
                        <h3>Fully Customizable</h3>
                        <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
