import React from 'react';
import PropTypes from 'prop-types';

export class SingleInputArray extends React.Component {

  render () {
    const {name, label, array, change, clickAddRmv, type, pattern, placeholder} = this.props;

    return (
      /* Inicio do campo */
      <React.Fragment>
        {/* explorar a array de inputs */}
        {array.map((el, id) => {return(
          <React.Fragment key = { id }>
            {id === 0 &&
              <label htmlFor = { name }>{ label }</label>
            }
            <div className="input-group" key = { id }>
              <input
              type = { type }
              className = "form-control"
              value = { el.value }
              onChange = { change }
              placeholder = { placeholder }
              name = { name }
              pattern = { pattern }
              data-id = { id } />
              
              {array.length > 1 &&
              <div className="input-group-append">
                <button className="btn btn-outline-secondary"
                data-action='rmv'
                name={ name }
                onClick={ clickAddRmv }
                data-id={ id }
                type="button">
                  Remover
                </button>
              </div>
              }
              <div className="input-group-append">
              <button className="btn btn-outline-secondary"
              data-action='add'
              name={ name }
              onClick={ clickAddRmv }
              data-id={ id }
              type="button">
                Criar novo
              </button>
              </div>
            </div>          
            </React.Fragment>

          )})}
      </React.Fragment>
      /* Fim do campo */
    )
  }
}

SingleInputArray.defaultProps = {
  type: 'text',
};

SingleInputArray.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  array: PropTypes.array.isRequired,
  change: PropTypes.func.isRequired,
  clickAddRmv: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SingleInputArray