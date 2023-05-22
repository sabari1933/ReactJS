import React from "react";
import sad from './sad.png';
import none from './none.webp';
import happy from './happy.png';
import './feedback.css';
import {Link} from 'react-router-dom'
function Feedback() {
    return (
        <>
            <div className="container-fluid back pt-5">
                <div className="bg-light container back2 p-5">
                    <h3 className="text-center">How Statisfied Are You With Our Customer Support Performance ?</h3>
                    <div className="col-lg-12 d-flex row text-center p-5">
                        <div className="col-lg-3 text-center ml-5">
                            <Link to="/heart">
                                <img src={sad} height={150} alt="" />
                            </Link>
                            <p>Sad</p>
                        </div>
                        <div className="col-lg-3 text-center pt-2 ml-5">
                            <Link to="/heart">
                                <img src={none} height={130} alt="" />
                            </Link>
                            <p className="pt-2 mt-2">None</p>
                        </div>
                        <div className="col-lg-3 text-center ml-5">
                            <Link to="/heart">
                                <img src={happy} height={150} alt="" />
                            </Link>
                            <p>Happy</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}
export default Feedback;