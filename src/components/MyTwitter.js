import React, {Component} from 'react';
import { Timeline } from 'react-twitter-widgets'

class MyTwitter extends Component {
  render() {
    return(
      <div className="my-twitter container">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'waltraudkunz'
          }}
          options={{
            username: 'waltraudkunz',
            height: 633
          }} />
      </div>
    );
  }
}

export default MyTwitter;
