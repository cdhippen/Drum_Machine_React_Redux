import React from "react";
import { connect } from "react-redux";

import { drumHit } from "./actions";

const drumObj = [
  {
    keyCode: 113,
    trigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 119,
    trigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 101,
    trigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 97,
    trigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 115,
    trigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 100,
    trigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 122,
    trigger: "Z",
    id: "Kick-n-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 120,
    trigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 99,
    trigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

class DrumMachine extends React.Component {
  handleKeyPress = event => {
    const drumKey = drumObj.find(obj => obj.keyCode === event.keyCode);

    if (drumKey) {
      this.refs["drumButton" + drumKey.trigger].click();
      this.refs["drumButton" + drumKey.trigger].focus();
      this.refs["drumButton" + drumKey.trigger].blur();
    }
  };

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress);
  }

  render() {
    const { drumHit, display } = this.props;
    return (
      <div id="container">
        <h1>Drum Machine</h1>
        {drumObj.map(x => (
          <button
            className="drum-pad"
            ref={"drumButton" + x.trigger}
            key={x.id}
            id={x.id}
            onClick={() => drumHit(x.url, x.id)}
          >
            <audio className="clip" id={x.trigger} src={x.url} />
            {x.trigger}
          </button>
        ))}
        <div id="display">{display}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  url: state.url,
  display: state.display
});

const mapDispatchToProps = dispatch => ({
  drumHit: (url, id) => dispatch(drumHit(url, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DrumMachine);
