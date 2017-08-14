var request = window.superagent;
var store = Reflux.createStore({
  data: {people: []},

  init() {
    request("https://jsbin.com/dekafa.json", res => {
      this.data.people = JSON.parse(res.text);
      this.trigger(this.data);
    })
  },

  getInitialState() {
    return this.data;
  }
});

var App = React.createClass({

  mixins: [Reflux.connect(store)],

  render() {
    return (<div>
            {this.state.people.map(person => {
               return (<div key={person.id}>
                <h2>{person.name}</h2>
                <img src={person.avatar}/>
              </div>)
            })}
          </div>);
}
                            })

React.render(<App/>, document.getElementById('example'));