import React from 'react';

class ItemCard extends React.Component {
    render() {
        const { item } = this.props;  
        console.log(item.completed)
        return (
            <div className="card z-depth-0 todo-list-link pink-lighten-3">
                <div className="card-content grey-text text-darken-3 row">
                    
                    <div className = "col s4 left-align">
                    <span className="card-title">{item.description}</span>
                    <p className = ""><b>{item.assigned_to}</b></p>
                    </div>
                    <p className = "col s4">{item.due_date}</p>
                    <p className = "col s4">{this.isCompleted(item.completed)}</p>
            </div>
            </div>
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
}
export default ItemCard;