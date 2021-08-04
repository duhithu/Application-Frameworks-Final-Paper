import React,{Component} from "react";
import Select from 'react-select';
import axios from 'axios';

const initialState ={
    name: '',
    description: '',
    foods: [],
    options: [],
    selectedFoods:[]
}
class CreateCategory extends Component{
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onFoodSelect = this.onFoodSelect.bind(this);
        this.state = initialState;
    }

    componentDidMount(){
        axios.get('http://localhost:8084/food/')
            .then(response => {
                this.setState({foods: response.data.data}, () => {
                    let data = [];
                    this.state.foods.map((item, index) =>{
                        let food = {
                            value: item._id,
                            label:item.name
                        }
                        data.push(food)
                    })
                    this.setState({options: data});
                })
            })
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onFoodSelect(e) {
        this.setState({selectedFoods: e ? e.map(item => item.value) : []});
    }


    onSubmit(e){
        e.preventDefault();
        let category = {
            name: this.state.name,
            description: this.state.description,
            foods: this.state.selectedFoods //important

        }

        console.log('DATA TO SEND',category);
        axios.post('http://localhost:8084/category/create', category)
            .then(response => {
                alert('Data Successfully inserted')
            })
            .catch(error=>{
                console.log(error.message);
                alert(error.message)
            })

    }

    render() {
        return(
            <div className="container">
                <h1>Create Category</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text"
                               className="form-control"
                               id="name" name="name"
                               value={this.state.name}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                        <input type="text"
                               className="form-control"
                               id="description" name="description"
                               value={this.state.description}
                               onChange={this.onChange}
                        />
                    </div>
                    <Select
                        options = {this.state.options}
                        onChange ={this.onFoodSelect}
                        className="basic-multi-select"
                        isMulti
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }
}

export default CreateCategory;