import React from 'react'
import { ContactUs } from '../Mail'
import './style.scss'


const Contact = () => {
    return (
        <div>
            <ul>
                <li>
                    <a href="https://tr.linkedin.com/in/erol-emre-gulec?challengeId=AQFHIMoect6XnAAAAX29QiAYrLRRuqhHPRk82ox5cr2Af2koevXoJuxUSxiNxFKWBvS3CIUhKJFR4M8TgZYMM6qh1AkP-MvBNw&submissionId=28ed632f-1ae1-c016-a2b3-7965e1b81260" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i> </a>
                </li>
                <li>
                    <a href="https://github.com/erolemre1" target="_blank" rel="noreferrer"> <i class="fab fa-github"></i></a>
                </li>
            </ul>
            <ContactUs />
        </div>
    )
}

export default Contact
