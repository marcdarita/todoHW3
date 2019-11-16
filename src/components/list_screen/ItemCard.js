import React from 'react';
import { Button, Icon } from 'react-materialize'; 
import { Link } from 'react-router-dom';
import ItemScreen from '../item_screen/ItemScreen';

class ItemCard extends React.Component {
    render() {
        const { item } = this.props;  
        return (
           
            <div className="card z-depth-0 todo-list-link pink-lighten-3">
                <div className="card-content grey-text text-darken-3 row hoverable">
                    
                    <div className = "col s3 left-align">
                    <span className="card-title">{item.description}</span>
                    <p className = ""><b>{item.assigned_to}</b></p>
                    </div>
                    <p className = "col s3">{item.due_date}</p>
                    <p className = "col s3">{this.isCompleted(item.completed)}</p>
                    <div className = "col s3">
                        <Button floating icon={<i class="material-icons">arrow_upward</i>} 
                            className="light-green lighten-3 hoverable" medium
                            onClick = {this.itemMoveUp.bind(this)}
                            /> &nbsp;
                        <Button floating icon={<i class="material-icons">arrow_downward</i>} 
                            className="light-green lighten-3 hoverable" medium
                            /> &nbsp;
                        <Button floating icon={<i class="material-icons">clear</i>} 
                            className="light-green lighten-3 hoverable" medium
                            />
                    </div>

                    {/* <div className = "col s3 right-align">
                        <Button floating icon={<i class="material-icons">arrow_upward</i>} className="light-green lighten-3" medium/> &nbsp;
                        <Button floating icon={<i class="material-icons">arrow_downward</i>} className="light-green lighten-3" medium/> &nbsp;
                        <Button floating icon={<i class="material-icons">clear</i>} className="light-green lighten-3" medium/>
                    </div> */}
            </div>
            </div>
            // btn-floating div fixed-action-btn horizontal
        );
    }

    isCompleted = (value) => {
        if (value){
            return (<p className = "green-text">Completed </p>)
        }
        else {
            return (<p className = "red-text">Pending </p>)
        }
    }

    itemMoveUp = (e) => {
        e.stopPropagation();
        console.log("MOVING ITEM UP");
    }

    itemMoveDown = (e) => {
        e.stopPropagation();
        console.log("MOVING ITEM DOWN");
    }

    itemDelete = (e) => {
        e.stopPropagation();
        console.log("DELETING ITEM");
    }
}
export default ItemCard;