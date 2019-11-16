import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { compose } from 'redux';
// import ItemsList from './ItemsList.js'
import { firestoreConnect } from 'react-redux-firebase';
import DatePicker from 'react-materialize/lib/DatePicker';
import ItemCard from '../list_screen/ItemCard';
import { Link } from 'react-router-dom';

class ItemScreen extends Component {
    state = {
        description: '',
        assigned_to: '',
        due_date: '',
        completed: false,
    }

    render () {
        // const auth = this.props.auth;
        const item = this.props.item;
        const todoList = this.props.todoList;
        // if (!auth.uid) {
        //     return <Redirect to="/" />;
        // }

        return (
            <div className="container white row">
                <div className="grey-text text-darken-3 light-green lighten-2 center-align">
                    <h5>Edit Item</h5>
                    <div className = "right-align">
                    
                    </div>
                </div>
                <div class="row">
                    <div class="col s3 left-align grey lighten-2"><h5>Task</h5></div>
                    <div class="col s3 left-align grey lighten-2"><h5>Due Date</h5></div>
                    <div class="col s3 left-align grey lighten-2"><h5>Status</h5></div>
                    <div class="col s3 grey lighten-2"><h5>Action</h5></div>
                </div>
                <div className="input-field col s12">
                    <label>Task</label>
                    <input className="active" type="text" name="task" id="task"/>
                </div>
                <div className="input-field col s12">
                    <label>Assigned To</label>
                    <input className="active" type="text" name="assigned_to" id="assigned_to"/>
                </div>
                <div className="input-field col s12">
                    <label>Due Date</label>
                    <DatePicker></DatePicker>
                    {/* <input className="active" type="date" name="task" id="due_date"/> */}
                </div>
                <div className="input-field col s12">
                <p>
                    <label>
                        <input type="checkbox" />
                        <span>Completed</span>
                    </label>
                </p>
                </div>
                <div className="center-align col s12">
                
                    <p><a class="waves-effect waves-light btn light-green lighten-2">Submit</a>
                            &nbsp;&nbsp;&nbsp;
                            <Link to ={'/'}>
                            {/* <Link to={'/todoList/' + this.props.todoList.id} key={this.props.todoList.id}> */}
                                <a class="waves-effect waves-light btn light-green lighten-2">Cancel</a>
                            </Link>
                    </p>
                </div>
                
            </div>
        );
    }
}

export default ItemScreen;