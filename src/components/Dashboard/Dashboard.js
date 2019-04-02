import React, { Component } from "react";

class Dashboard extends Component {
    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat arcu, aliquet ac lobortis sagittis, convallis a lectus. Duis vestibulum tempus felis, non consectetur augue maximus congue. Aenean viverra lacus ut interdum mattis. Curabitur vitae augue dictum, ultricies mi pellentesque, dignissim felis. Etiam sollicitudin pharetra nibh in ultrices. Aenean convallis aliquet mauris, hendrerit sodales quam bibendum eget. Pellentesque aliquam aliquet est, in ultrices purus congue posuere. Pellentesque commodo scelerisque volutpat. Curabitur non suscipit ante.
                        </p>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <p>
                        Cras suscipit, nisi vitae dignissim feugiat, massa metus blandit nunc, ut fermentum odio eros quis dui. Vivamus enim nibh, blandit in condimentum sed, convallis dignissim elit. Curabitur rhoncus, ex non ornare bibendum, ligula dolor malesuada sapien, ut faucibus eros nunc viverra augue. Maecenas viverra mauris non nisl ultrices aliquet. Sed pretium nisi a lacus hendrerit, ac posuere neque porta. Aenean in sollicitudin eros, vitae mattis augue. Vivamus pretium purus erat, tristique eleifend nulla vehicula sit amet. Aenean nec ligula dui.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;