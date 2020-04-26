import React, { Component } from 'react';
import './item-details.css';
import ApiService from '../../services/api-service';
import ErrorButton from '../error-button';

// hoc
const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{ item[field] }</span>
    </li>
  );
};

// bir faylda yalniz bir export default ola biler, ona gore asagidaki kimi edirik
export {
  Record
};


export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null
  }

  swapiServive = new ApiService();

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    //console.log(`didUpdate-den ${this.props.personId} ve ${prevProps.personId}`);

    if (this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
     //console.log(`updatePakemondan ${pakemonId}`);

    if (!itemId) {
      return;
    }
    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item)
        })
      })
  }

  render() {

    const { item, image } = this.state

    if (!item) {
      return <span className='select-msg'>Select any item!</span>;
    }

    const { name } = item;

    return (

      <div className="item-details card">
        <img className="item-image"
          src={image}
          alt="item"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {/* react.children ile melumatlari rahat cekirik
            app.js de bir nece children element veririk, burda iterasiya edir icinde
            asagida cloneElementin icindeki item, melumatlari serverden cekir */}
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}