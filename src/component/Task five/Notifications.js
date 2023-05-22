import React from 'react';
import './Notifications.css';

import { CheckCircleRounded,ErrorOutline,NotificationsNone} from '@mui/icons-material';


function Notifications(){
    return (
        <div className="notifications">
            <h1 className='noti_heading'>Notifications</h1>
            
            <div className="alert text-light bg-primary d-flex align-items-center" role="alert">
                <CheckCircleRounded /> <span></span>
                <div>
                    <h5>Infromations Message</h5>
                </div>
            </div>
            <div className="alert text-light bg-success d-flex align-items-center" role="alert">
                <CheckCircleRounded /> <span></span>
                <div>
                    <h5>Success Message</h5>
                </div>
            </div>
            <div className="alert text-light bg-warning d-flex align-items-center" role="alert">
                <NotificationsNone /> <span></span>
                <div>
                    <h5>Warning Message</h5>
                </div>
            </div>
            <div className="alert text-light bg-danger d-flex align-items-center" role="alert">
                <ErrorOutline /> <span></span>
                <div>
                    <h5>Error Message</h5>
                </div>
            </div>
           
        </div>
    )
}
export default Notifications;