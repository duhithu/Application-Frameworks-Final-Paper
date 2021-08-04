import React, {Component} from 'react';

class navBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">AF Practice Final Paper</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Categories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/create-food">Create Foods</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/create-category">Create Category</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default navBar;