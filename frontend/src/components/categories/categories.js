import React, {Component} from 'react';
import axios from 'axios';

class Categories extends Component{
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    //display
    //componentDidMount() = in build function.
    componentDidMount(){
        axios.get('http://localhost:8084/category/')
            .then(response => {
                this.setState({categories: response.data.data});
            })
    }

    navigateFoodPage(e, categoryId){
        window.location = `/${categoryId}`
    }
    render() {
        return (
            <div className="container">
                <h1>Categories</h1>

                {this.state.categories.length > 0  && this.state.categories.map((item, index) =>(
                    <div key ={index} className="card mb-3">
                        <div className="p-3" onClick={e => this.navigateFoodPage(e, item._id)}>

                            <h5>Category name: {item.name}</h5>
                            <h5>Category Description: {item.description}</h5>
                             
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Categories;