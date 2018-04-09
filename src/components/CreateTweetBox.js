import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewTweet } from '../actions/tweetActions';

class CreateTweetBox extends Component {
  constructor(props) {
    super(props);
    this.submitTweet = this.submitTweet.bind(this);
  }

  submitTweet(e) {
    e.preventDefault();
    let tweetContent = this.refs.newTweet.value;
      // TODO: include a call to create a new tweet
    console.log('tweetContent' + tweetContent);
    this.props.createNewTweet({content:tweetContent});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitTweet}>
          <div>
            <div className="form-group">
              <label>
                What's happening?
              </label>
              <textarea className="form-control" ref="newTweet"></textarea>
            </div>
            <input
              type="submit"
              className="btn btn-primary"
              value="submit"
            />
          </div>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  createNewTweet: (tweetContent) => dispatch(createNewTweet(tweetContent))
})


  // supply the component with a property 'createNewTweet' that will dispatch
  // the createNewTweet action  with the new tweet's content


export default connect(
  null,
  mapDispatchToProps
)(CreateTweetBox);
