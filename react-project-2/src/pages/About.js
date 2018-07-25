import React, { Component } from "react";

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      followers: []
    };
    this.getFollowers = this.getFollowers.bind(this);
  }
  getFollowers() {
    fetch("https://api.github.com/users/rahmanfadhil/followers")
      .then(data => data.json())
      .then(data => {
        this.setState({
          followers: data
        });
        console.log(data);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <button onClick={this.getFollowers}>Get Followers</button>
        <ul>
          {this.state.followers.map((item, i) => (
            <li key={i} style={{ marginBottom: 20 }}>
              <img src={item.avatar_url} alt="" width="100" />
              <br />
              <a href={item.html_url}>{item.login}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
