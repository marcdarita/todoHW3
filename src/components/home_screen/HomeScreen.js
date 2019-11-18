import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import TodoListLinks from './TodoListLinks'
import { getFirestore } from 'redux-firestore';
// import {Link, RichText, Date} from 'prismic-reactjs';

class HomeScreen extends Component {

    render() {
        if (!this.props.auth.uid) {
            return <Redirect to="/login" />;
        }

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m4">
                        <TodoListLinks />
                    </div>

                    <div className="col s8">
                        <div className="banner">
                            @todo<br />
                            List Maker
                        </div>
                        
                        <div className="home_new_list_container">
                                <button className="home_new_list_button" onClick={this.handleNewList}>
                                    Create a New To Do List
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleNewList = () => {
        const fireStore = getFirestore();

        console.log("Creating new list")
        fireStore.collection('todoLists').add({
            name: "N/A",
            owner: "N/A",
            items:[],
            timestamp: Date.now()
        })
        
        // .then(docRef => {
        //     window.location.href = "/todoList/" + docRef.id;
        // }).catch(error => {
        //     console.log(error);
        // })
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        todoLists: state.firestore.ordered.todoLists,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
    //   { collection: 'todoLists'},
      { collection: 'todoLists', orderBy: ['timestamp', 'desc']},
    ]),
)(HomeScreen);