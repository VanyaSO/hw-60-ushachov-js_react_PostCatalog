import React from "react"
import PostCatalog from "./components /PostCatalog";

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    fetch = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        this.setState({posts: data});
    }

    componentDidMount(){
        this.fetch();
    }

    render() {
        return (
            <div className="App">
                <PostCatalog posts={this.state.posts}/>
            </div>
        );
    }


}

export default App;
