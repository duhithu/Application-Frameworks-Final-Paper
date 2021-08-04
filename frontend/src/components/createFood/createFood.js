import React, {Component} from 'react';
import axios from 'axios';

const initialState = {
    code: '',
    name: '',
    amount: 0,
    size: '',
}
class createFood extends Component{
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }
    //save the value of input field in the state
    onChange(e){
        this.setState({[e.target.name] : e.target.value})
        //call the onChange function
    }

    //submit data
    onSubmit(e){
        e.preventDefault();
        let food = {
            code: this.state.code,
            name: this.state.name,
            amount: this.state.amount,
            size: this.state.size
        }
        console.log('data to send',  food);
        axios.post('http://localhost:8084/food/create', food)
            .then(response => {
                alert('Data successfully inserted')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render() {
        return(
            <div className="container">
                <h1>Create Food</h1>

                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Food Code</label>
                        <input type="text"
                               className="form-control"
                               id="code" name="code"
                               value={this.state.code}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Food Name</label>
                        <textarea className="form-control"
                                  id="name" rows="3"
                                  name="name"
                                  value={this.state.name}
                                  onChange={this.onChange}>

                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Amount</label>
                        <input type="number"
                               className="form-control"
                               id="amount" name="amount"
                               value={this.state.amount}
                               onChange={this.onChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Size</label>
                        <input type="number"
                               className="form-control"
                               id="size" name="size"
                               value={this.state.charge}
                               onChange={this.onChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }
}

export default createFood;