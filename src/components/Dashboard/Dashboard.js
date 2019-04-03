import React, { Component } from "react";
import CreateComment from "../comments/CreateComment";
import "./Dashboard.css";
class Dashboard extends Component {
    render(){
        return(
            <div className="dashboard-wrapper">
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat arcu, aliquet ac lobortis sagittis, convallis a lectus. Duis vestibulum tempus felis, non consectetur augue maximus congue. Aenean viverra lacus ut interdum mattis. Curabitur vitae augue dictum, ultricies mi pellentesque, dignissim felis. Etiam sollicitudin pharetra nibh in ultrices. Aenean convallis aliquet mauris, hendrerit sodales quam bibendum eget. Pellentesque aliquam aliquet est, in ultrices purus congue posuere. Pellentesque commodo scelerisque volutpat. Curabitur non suscipit ante.
                        </p>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        
                    <div>
                        <CreateComment />

                    </div>
                    </div>
                </div>
            </div>

            </div>
        )
    }
}

export default Dashboard;