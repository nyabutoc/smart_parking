import React, { Component } from 'react';
import TweetList from './TweetList';
import ProfileBox from './ProfileBox';
import CreateTweetBox from './CreateTweetBox';
import { loadTweetsForProfile } from '../actions/tweetActions';
import { getUser, favUnfav } from '../actions/profileActions';
import { connect } from 'react-redux';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // the component should have  a ProfileBox  and TweetList component, if
    // an id is specified in the url (you can check this by looking at
    // this.props.match.params.id then render out a CreateTweetBox else dont
    // the ProfileBox should have the props `id` corresponding  to this.props.match.params.id
    // `user` corresponding to a  function that will dispatch the getUser async function with
    // appropriate arguments
    // `favUnfav` corresponding to a function that  will dispatch the favUnfav async function with
    // appropriate arguments
    // the TweetList should have a single property `loadTweets` equal  to a function that will
    // dispatch the loadTweets async function with appropriate arguments (in this case the
    // current user id which you can grab from this.props.match.params.id
    //
    // // html structure
    // <div class="container">
    //  <h2>Profile</h2>
    //  <div class="row">
    //    <div class="col-md-4">
    //      ... profile box
    //    </div>
    //    <div class="col-md-8">
    //      ... optionally a create tweet box
    //      ...  tweet list
    //    </div>
    //  </div>
    // </div>
     let id = this.props.match.params.id;
     let createTweetBox = id ? '': (<CreateTweetBox/>);
     return (
      <div className="container">
       <h2>Profile</h2>
       <div className="row">
         <div className="col-md-4">
           <ProfileBox id={id} user={this.props.getUser} favUnfav={this.props.favUnfav}/>
         </div>
         <div className="col-md-8">
          {createTweetBox}
          <TweetList loadTweets={this.props.loadTweets}/>
         </div>
       </div>
      </div>
    );

  }
}

const mapDispatchToProps = (dispatch,ownprops) => ({
  favUnfav : () => dispatch(favUnfav(ownprops.match.params.id)),
  getUser: () => dispatch(getUser(ownprops.match.params.id)),
  loadTweets: () => dispatch(loadTweetsForProfile(ownprops.match.params.id)),

})

  // optionally use this to handle assigning dispatch actions to props



export default connect(null, mapDispatchToProps)(Profile);
