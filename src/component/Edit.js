import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: '',
      description: '',
      author: ''
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          title: board.title,
          description: board.description,
          author: board.author
        });
      } else {
        console.log("No such document!");
      }
    });
      }
      else{
        this.props.history.push('/')
      }
    });

    
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author } = this.state;

    const updateRef = firebase.firestore().collection('boards').doc(this.state.key);
    updateRef.set({
      title,
      description,
      author
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        description: '',
        author: ''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div class="panel-heading">
            <h3 className="panel-title mt-5">
              EDIT BOARD
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/show/${this.state.key}`} 
            className="btn btn-primary my-3">Board List</Link></h4>
            <form onSubmit={this.onSubmit}>

              <div className="form-group">
                <label for="title">Title:</label>
                <input type="text" 
                class="form-control" 
                name="title" 
                value={this.state.title} 
                onChange={this.onChange} 
                placeholder="Title" />
              </div>

              <div className="form-group">
                <label for="description">Description:</label>
                <input type="text" 
                class="form-control" 
                name="description" 
                value={this.state.description} 
                onChange={this.onChange} 
                placeholder="Description" />
              </div>

              <div className="form-group">
                <label for="author">Author:</label>
                <input type="text" 
                className="form-control" 
                name="author" 
                value={this.state.author} 
                onChange={this.onChange} 
                placeholder="Author" />
              </div>

              <button 
              type="submit" 
              className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;