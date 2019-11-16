import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ItemCard from './ItemCard';
import { firestoreConnect } from 'react-redux-firebase';
import { Button, Icon } from 'react-materialize'; 

import { Link } from 'react-router-dom';
import ItemScreen from '../item_screen/ItemScreen';
import { strict } from 'assert';

class ItemsList extends React.Component {
    state = {
        currentItemSortCriteriaDescription: null,
        currentItemSortCriteriaDueDate: null,
        currentItemSortCriteriaStatus: null,
    }

    render() {
        const todoList = this.props.todoList;
        const items = todoList.items;
        console.log("ItemsList: todoList.id " + todoList.id);
        
        return (
            <div className="todo-lists section">
                <div class="row">
                    <div class="col s3 left-align grey lighten-2" onClick = {this.sortByDescription}><h5>Task</h5></div>
                    <div class="col s3 left-align grey lighten-2" onClick = {this.sortByDueDate}><h5>Due Date</h5></div>
                    <div class="col s3 left-align grey lighten-2" onClick = {this.sortByStatus}><h5>Status</h5></div>
                    <div class="col s3 grey lighten-2"><h5>Action</h5></div>
                </div>
                {items && items.map(function(item) {
                    item.id = item.key;
                    return (
                        <div className = "row">
                            <div className = "col s12">
                            <Link to={'/item/' + item.id} key={item.id}>
                                
                                <ItemCard todoList={todoList} item={item} />
                                
                            </Link>
                            </div>
                            {/* <div className = "col s3 center-align"> */}
                                {/* <Button floating icon={<i class="material-icons">arrow_upward</i>} 
                                        className="light-green lighten-3 hoverable" medium
                                        onClick = {this.moveItemUp}
                                        /> &nbsp;
                                <Button floating icon={<i class="material-icons">arrow_downward</i>} 
                                        className="light-green lighten-3 hoverable" medium
                                        /> &nbsp;
                                <Button floating icon={<i class="material-icons">clear</i>} 
                                        className="light-green lighten-3 hoverable" medium
                                        /> */}

                            {/* <Button floating fab={{direction: 'left', position: 'relative'}} className="red fab hoverable" large>
                                    <Button floating icon={<i class="material-icons">arrow_upward</i>} className="light-green lighten-3 hoverable" medium/>
                                    <Button floating icon={<i class="material-icons">arrow_downward</i>} className="light-green lighten-3 hoverable" medium/>
                                    <Button floating icon={<i class="material-icons">clear</i>} className="light-green lighten-3 hoverable" medium/>
                                </Button> */}
                            {/* </div> */}
                        </div>
                    );})   
                }
                
                <div className = "center-align">
                    <Link to={'/item/add'} className="brand-logo">
                        <a className="btn-floating btn-large waves-effect waves-light center-align light-green lighten-3 hoverable">
                            <i className="material-icons">add</i>
                        </a>
                    </Link>
                </div>
            </div>
        );
    }

    // moveItemUp = () => {
    //     console.log("MOVE UP");
    // }

    // Sort Methods

    sortByDescription = () => {
        console.log("Sorting by description");
        console.log(this.state.currentItemSortCriteriaDescription)
    
        if (this.state.currentItemSortCriteriaDescription === ItemSortCriteria.SORT_BY_TASK_INCREASING) {
            this.setState({currentItemSortCriteriaDescription: ItemSortCriteria.SORT_BY_TASK_DECREASING})
            this.props.todoList.items.sort(function (itemA, itemB) {
                var item1 = itemA.description.toUpperCase();
                var item2 = itemB.description.toUpperCase();
                if (item1 < item2) {return -1;}
                if (item1 > item2) {return 1;}
                return 0;
            });
        }
    
        else {
            this.setState({currentItemSortCriteriaDescription: ItemSortCriteria.SORT_BY_TASK_INCREASING})
            this.props.todoList.items.sort(function (itemA, itemB) {
                    var item1 = itemA.description.toUpperCase();
                    var item2 = itemB.description.toUpperCase();
                    if (item1 < item2) {return 1;}
                    if (item1 > item2) {return -1;}
                    return 0;
            });
        }    
    }

    sortByDueDate = () => {
        console.log("Sorting by due date");
        console.log(this.state.currentItemSortCriteriaDueDate)
    
        if (this.state.currentItemSortCriteriaDueDate === ItemSortCriteria.SORT_BY_DUE_DATE_INCREASING) {
            this.setState({currentItemSortCriteriaDueDate: ItemSortCriteria.SORT_BY_DUE_DATE_DECREASING})
            this.props.todoList.items.sort(function (itemA, itemB) {
                var item1 = itemA.due_date.toUpperCase();
                var item2 = itemB.due_date.toUpperCase();
                if (item1 < item2) {return -1;}
                if (item1 > item2) {return 1;}
                return 0;
            });
        }
    
        else {
            this.setState({currentItemSortCriteriaDueDate: ItemSortCriteria.SORT_BY_DUE_DATE_INCREASING})
            this.props.todoList.items.sort(function (itemA, itemB) {
                    var item1 = itemA.due_date.toUpperCase();
                    var item2 = itemB.due_date.toUpperCase();
                    if (item1 < item2) {return 1;}
                    if (item1 > item2) {return -1;}
                    return 0;
            });
        }    
    }

    sortByStatus = () => {
        console.log("Sorting by status");
        console.log(this.state.currentItemSortCriteriaStatus)
    
        if (this.state.currentItemSortCriteriaStatus === ItemSortCriteria.SORT_BY_STATUS_INCREASING) {
            this.setState({currentItemSortCriteriaStatus: ItemSortCriteria.SORT_BY_STATUS_DECREASING})
            this.props.todoList.items.sort(function (itemA, itemB) {
                if (itemA.completed < itemB.completed) {return -1;}
                if (itemA.completed > itemB.completed) {return 1;}
                return 0;
            });
        }
    
        else {
            this.setState({currentItemSortCriteriaStatus: ItemSortCriteria.SORT_BY_STATUS_INCREASING})
            this.props.todoList.items.sort(function (itemA, itemB) {
                    if (itemA.completed < itemB.completed) {return 1;}
                    if (itemA.completed > itemB.completed) {return -1;}
                    return 0;
            });
        }    
    }

}

const ItemSortCriteria = {
    SORT_BY_TASK_INCREASING: "sort_by_task_increasing",
    SORT_BY_TASK_DECREASING: "sort_by_task_decreasing",
    SORT_BY_DUE_DATE_INCREASING: "sort_by_due_date_increasing",
    SORT_BY_DUE_DATE_DECREASING: "sort_by_due_date_decreasing",
    SORT_BY_STATUS_INCREASING: "sort_by_status_increasing",
    SORT_BY_STATUS_DECREASING: "sort_by_status_decreasing"
};

const mapStateToProps = (state, ownProps) => {
    const todoList = ownProps.todoList;
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
)(ItemsList);