//require axios to be able to make server requests
var axios = require("axios");

//require react
var React = require("react");

//requiring helpers to be able to make ajax requests to our api
var helpers = require('./utils/helpers');

//setting up the main componnent
var Main = React.createClass({

  // setting up the set state
  getInitialState: function() {
    return {
      topic: "",
      startYear: "",
      endYear: "",
      results: [],
      savedArticles: []
    }

  },

  // need to set up some functions to allow children to update when user puts in search items

  // if the component updates we'll run this code
  componentDidUpdate: function(prevProps, prevState){

    if(prevState.topic != this.state.topic){
      console.log("UPDATED");


  componentDidMount: function(){
    axios.get('/api/saved')
      .then(function(response){
        this.setState({
          savedArticles: response.data
        });
      }.bind(this));
  },

  //render the function
  render: function(){
    return(
  }
});

module export default Main;
