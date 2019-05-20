import React, { Component } from 'react';

class Home extends Component {
  state = {};

  componentDidMount() {
    fetch(
      'https://dictionary.yandex.net/dicservice.json/queryCorpus?ui=ru&srv=tr-text&sid=55a2c822.5cdfc675.80474c88&src=worm&dst=&lang=en-ru&flags=39&maxlen=200'
    )
      .then(res => res.json())
      .then(resp => {
        console.log(resp);
      });
  }

  render() {
    return <div>hello</div>;
  }
}

export default Home;
