import React, {Component} from 'react';
import axios from 'axios';

class Foods extends Component {
    constructor(props) {
        super(props);
        this.state ={
            foods: []
        }
    }

    componentDidMount(){
        //get react browser params
        axios.get(`http://localhost:8084/category/${this.props.match.params.id}`)
            .then(response => {
                this.setState({foods: response.data.foods})
                console.log('Data',response.data.foods);
            })
            .catch(error => {
                alert(error.message)
            })

        axios.get(`http://localhost:8084/category/amount/${this.props.match.params.id}`)
            .then(response =>{
                this.setState({totalAmount: response.data.totalAmount})

            })
            .catch(error => {
                alert(error.message)
            })

    }
    render(){
        return (
            <div>
                <h1>Foods</h1>
                <h3>totalAmount: {this.state.totalAmount}</h3>
                {this.state.foods.length > 0 && this.state.foods.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                            <h4>Code : {item.code}</h4>
                            <h4>Name : {item.name}</h4>
                            <h4>Amount : {item.amount}</h4>
                            <h4>Size : {item.size}</h4>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Foods;