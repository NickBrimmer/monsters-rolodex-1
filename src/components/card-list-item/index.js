import { Component } from 'react';
import './card-list-item.css';

class CardListItem extends Component {
  render() {
    const { id, name, email } = this.props.monster;

    return (
      <div>
        <div key={id} className="card-container">
          <img alt={`monster ${name} `} src={`https://robohash.org/${id}?set1&size=180x180`} />
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default CardListItem;
