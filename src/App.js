import React from "react";
import ListItem from "./ListItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleAddItem = this.handleAddItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(key) {
    const filterdItems = this.state.items.filter((item) => item.key !== key);
    this.setState({ items: filterdItems });
  }

  handleAddItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleAddItem}>
          <input
            type="text"
            placeholder="enter event..."
            value={this.state.currentItem.text}
            onChange={(e) =>
              this.setState({
                currentItem: { text: e.target.value, key: Date.now() },
              })
            }
          />
          <button>Add</button>
        </form>
        <ListItem items={this.state.items} deleteItem={this.deleteItem} />
      </>
    );
  }
}

export default App;
