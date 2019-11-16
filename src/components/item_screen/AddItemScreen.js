import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { compose } from 'redux';
// import ItemsList from './ItemsList.js'
import { firestoreConnect } from 'react-redux-firebase';
import DatePicker from 'react-materialize/lib/DatePicker';
import { Link } from 'react-router-dom';
import { getFirestore } from 'redux-firestore';
import Checkbox from 'react-materialize/lib/Checkbox';

class AddItemScreen extends Component {
    state = {
        new_description: '',
        new_assigned_to: '',
        new_due_date: '',
        new_completed: false,
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onChangeDate = (date) => {
        var day = date.getDate(); // Day value (DD)
        var year = date.getFullYear(); // Year value (YYYY)
        var month = date.getMonth() + 1; // Month value (MM)

        var new_date = year + '-' + month + '-' + day;
        this.setState({new_due_date: new_date})
    }

    onChangeCompleted = () => {
        this.setState({new_completed: !this.state.new_completed})
    }

    addItem = () => {
        const newItem = {
            description: this.state.new_description,
            assigned_to: this.state.new_assigned_to,
            due_date: this.state.new_due_date,
            completed: this.state.new_completed
        }

        // const firestore = getFirestore();
        // firestore.collection('todoLists').doc(this.props.todoList.id).items.push(newItem);
        console.log(this.state.new_description)
        console.log(this.state.new_assigned_to)
        console.log(this.state.new_due_date)
        console.log(this.state.new_completed)
    }

    render () {
        // const auth = this.props.auth;
        // const item = this.props.item;
        // if (!auth.uid) {
        //     return <Redirect to="/" />;
        // }

        // return (
            
            
        //     <div className = "container white row">
        //         <div className="grey-text text-darken-3 light-green lighten-2 center-align"></div>
        //             <h5>Item Screen</h5>
        //             <input type = "text">Description</input>
        //             <input type = "text">Assigned To</input>
        //             <input type = "date">Due Date</input>
        //             <input type = "Checkbox"></input>
        //             <div class="row">
        //             <div class="col s3 left-align grey lighten-2"><h5>Task</h5></div>
        //             <div class="col s3 left-align grey lighten-2"><h5>Due Date</h5></div>
        //             <div class="col s3 left-align grey lighten-2"><h5>Status</h5></div>
        //             <div class="col s3 grey lighten-2"><h5>Action</h5></div>
        //         </div>    
        //     </div>
        // );

        return (
            <div className="container white row">
                <div className="grey-text text-darken-3 light-green lighten-2 center-align">
                    <h5>Add New Item</h5>
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
                    <input className="active" type="text" name="new_description" id="task" onChange = {this.onChange}/>
                </div>
                <div className="input-field col s12">
                    <label>Assigned To</label>
                    <input className="active" type="text" name="new_assigned_to" id="assigned_to" onChange = {this.onChange}/>
                </div>
                <div className="input-field col s12">
                    <label>Due Date</label>
                    <DatePicker name = "new_due_date" onChange = {this.onChangeDate}></DatePicker>
                </div>
                <div className="input-field col s12">
                <p>
                    <label>
                        <input type="checkbox" name = "new_completed" onChange = {this.onChangeCompleted}/>
                        <span>Completed</span>
                    </label>
                </p>
                </div>
                <div className="center-align col s12">
                
                    <p><a class="waves-effect waves-light btn light-green lighten-2" onClick = {this.addItem}>Add</a>
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

export default AddItemScreen;