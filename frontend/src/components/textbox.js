import React, {Component} from 'react'

class NameForm extends Component {
  state = {
    value: "",
    char: 0,
    words: 0,
    avgwrdleng: 0,
    mostComW: "",
  };

  setStateValue = (text) =>{
    return new Promise((resolve, reject) => {
      resolve(this.setState({ value: text }))
    })
  }

  setAnalysedText = (body) => {
     
    (this.setState({ 
      char: body.char,
      words: body.wordCount,
      avgwrdLeng: body.avgWordL,
      mostComW: body.mostComW
     }))
}

  sendText = () => {
    let text = JSON.stringify(this.state.value)
    const requestOptions = {
      method: "POST",
      body: text,
      headers: {"Content-Type": "application/json"}
    };
    fetch("/analysis", requestOptions)
    .then((response) => {
      return response.json()
    }).then((body)=> {
      this.setAnalysedText(body)
    });;
    
  };

  handleChange=(event)=> {
    console.log(this.state.value);
    this.setStateValue(event.target.value).then(this.sendText);
  };

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={(event) => this.handleChange(event)} placeholder="hello" />
      </div>
    );
  }
}

export default NameForm;