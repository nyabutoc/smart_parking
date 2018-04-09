import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';

class TweetList extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    // load the tweets and set up an interval
    // that loads the tweets again every 2500 ms
    // Think about how you'd be able to load tweets
    // without doing additional imports...
    //dispatch tweet actions
    this.props.loadTweets();
    this.interval = setInterval(() => {
      this.props.loadTweets()
    }, 2500);

  }

  componentWillUnmount() {
    // when the component is about to unmount
    // clear the interval (the one running every 2500 ms
    // ie stop  the refreshing)
     clearInterval(this.interval);
  }

  render() {
    
    // render out your  tweets (use the Tweet component with
    // appropriate arguments `id` to represent  the tweetId and
    // a key for react
    // ultimate html should look like
    // <div class="col-md-12">
    //  ...bunch o tweets
    // </div>
    return (
      <div className="col-md-12">
        {this.props.ids.map(
          (item, index) => (<Tweet key={index} tweetId={item}/>)
        )}
      </div>
      );
  }
}

const mapStateToProps = state => (state.tweetListReducer);


export default connect(
  mapStateToProps,
  null
)(TweetList);
