import React from 'react';
import './row.css';
import PropTypes from 'prop-types';


const Row = ({left, right}) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {/* renderItem yazan hisse render funqsiya patterni adlanir, comp-in bir hissesini render edir 
                    jsx olaraq button da elave etmek olar meselcun asagidaki kimi
                    renderItem = {(item) => (<span>{item.name} <button>!</button></span>)} */}
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    )
}

// PropTypes haqqinda basqa numune, bu projeye aid deyil
// mes: prop-mus user object-i qebul etmelidi
// role hissesinde ya user ya da admin qebul ede bileceyini qeyd edirik
// MyComp.PropTypes = {
//     user: PropTypes.shape({
//         name: PropTypes.string,
//         role: PropTypes.oneOf(['user', 'admin'])
//     })
// }
// prop-types haqqinda daha etrafli asagidaki lindke ve ya reactin resmi doc.da
//https://github.com/airbnb/prop-types
Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
}

export default Row;