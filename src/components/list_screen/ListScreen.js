import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { compose } from 'redux';
import ItemsList from './ItemsList.js'
import { firestoreConnect } from 'react-redux-firebase';
import {Modal, Button} from 'react-materialize';
import { getFirestore } from 'redux-firestore';

import { Link } from 'react-router-dom';

class ListScreen extends Component {
    state = {
        name: '',
        owner: '',
    }

    handleChange = (e) => {
        const { target } = e;

        this.setState(state => ({
            ...state,
            [target.id]: target.value,
        }));
    }

    updateName = (e) => {
        const { target } = e;
        const firestore = getFirestore();
        firestore.collection('todoLists').doc(this.props.todoList.id).update({
            name: target.value,
        });
    }

    updateOwner = (e) => {
        const { target } = e;
        const firestore = getFirestore();
        firestore.collection('todoLists').doc(this.props.todoList.id).update({
            owner: target.value,
        });
    }

    deleteList = () => {
        console.log("DELETE");
        const firestore = getFirestore();
        firestore.collection('todoLists').doc(this.props.todoList.id).delete();
    }

    printTrash = () => {
        console.log("TRASH")
    }

    render() {
        
        const auth = this.props.auth;
        const todoList = this.props.todoList;
        if (!auth.uid) {
            return <Redirect to="/" />;
        }


        const trashTrigger = 
        <Button className = "waves-effect waves-light btn-flat btn-floating btn-large center-align light-green lighten-3">
            <i class="material-icons">delete</i>
        </Button>   

        return (
            <div className="container white row">
                <div className="grey-text text-darken-3 light-green lighten-2 center-align">
                    <h5>Todo List</h5>
                    <div className = "right-align">
                        <Modal header="Delete List?" trigger={trashTrigger}>
                            <h5><strong>Are you sure you want to delete this list?</strong></h5>
                            <Link to="/">
                            <a onClick = {this.deleteList.bind(this)} class="waves-effect waves-light btn light-green lighten-2">Yes</a></Link>
                            &nbsp;&nbsp;&nbsp;
                            <a class="waves-effect waves-light btn light-green lighten-2 modal-close">No</a>
                            
                            <footer> <h6>Note: The list will not be retreivable.</h6></footer>
                        </Modal>
                    </div>
                </div>
                
                <div className="input-field col s6">
                    <label htmlFor="email">Name</label>
                    <input className="active" type="text" name="name" id="name" onChange={this.handleChange.bind(this)} onKeyUp = {this.updateName.bind(this)} defaultValue={todoList.name} />
                </div>
                <div className="input-field col s6">
                    <label htmlFor="password">Owner</label>
                    <input className="active" type="text" name="owner" id="owner" onChange={this.handleChange.bind(this)} onKeyUp = {this.updateOwner.bind(this)} defaultValue={todoList.owner} />
                </div>
                
                <ItemsList todoList={todoList} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { todoLists } = state.firestore.data;
  const todoList = todoLists ? todoLists[id] : null;
  todoList.id = id;

  return {
    todoList,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'todoLists' },
  ]),
)(ListScreen);