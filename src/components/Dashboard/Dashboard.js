import React, { Component } from "react";
import CreateComment from "../comments/CreateComment";
import "./Dashboard.css";
import { connect } from 'react-redux';
import CommentsList from '../comments/CommentsList';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    render() {
        
        const { comments } = this.props;
        
        return (
          <div className="dashboard-wrapper">
            <div className="dashboard container">
              <div className="row">
                <div className="col s12 m6">
                  <form>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Vivamus erat arcu, aliquet ac lobortis
                      sagittis, convallis a lectus. Duis vestibulum
                      tempus felis, non consectetur augue maximus
                      congue. Aenean viverra lacus ut interdum mattis.
                      Curabitur vitae augue dictum, ultricies mi
                      pellentesque, dignissim felis. Etiam sollicitudin
                      pharetra nibh in ultrices. Aenean convallis
                      aliquet mauris, hendrerit sodales quam bibendum
                      eget. Pellentesque aliquam aliquet est, in
                      ultrices purus congue posuere. Pellentesque
                      commodo scelerisque volutpat. Curabitur non
                      suscipit ante.
                    </p>
                  </form>
                </div>
                <div className="col s12 m6 offset">
                  <div>
                    <CreateComment />
                    <CommentsList comments={comments} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  
  
  return {
          comments: state.firestore.ordered.comments
      }
    
    
  }
    



export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'comments' }
  ])
)(Dashboard);