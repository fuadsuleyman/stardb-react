import React from 'react';
import './item-list.css';
import PropTypes from 'prop-types';

const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabel } = props;

    const items = data.map((item) => {
        const { id } = item;
        const label = renderLabel(item);

        return (
            <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        );
    });

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
};

// onItemSelected peoplepage-de istifade olunur
// bu olmasa onItemSelected-e deyer vermesekde error cixmayacaq
// yoxlamaq ucun peoplepage-de sil personList in qarshisindakini, error olmayacaq
ItemList.defaultProps = {
    onItemSelected: () => {}
}

// prop-larin tiplerini yoxlamaq ucun
ItemList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onItemSelected: PropTypes.func,
    children: PropTypes.func.isRequired
}

// const { getAllPeople } = new ApiService();
// export default withData(ItemList, getAllPeople);

// yuxaridaki iki setr qalanda itemlist comp ancaq people qaytarir

export default ItemList; 