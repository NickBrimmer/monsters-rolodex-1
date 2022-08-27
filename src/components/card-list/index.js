import { Component } from 'react';
import CardListItem from '../card-list-item';
import './card-list.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div key="card-list" className="card-list">
        {monsters.map(monster => {
          return <CardListItem monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
