import React from 'react';
import PropTypes from 'prop-types';

export class SingleInputTyped extends React.PureComponent {

  minuscula = (inputstring) => {
    let out = inputstring.toLowerCase();
    return out
  }

  render () {
    const {name, label, value, id, change, type, placeholder} = this.props;

    return (
      /* Inicio do campo */
      <React.Fragment>
        {label.length > 0 &&
          <label htmlFor={ name }>{ label }</label>
        }
        <div className="input-group">
          <input
          value={ value }
          data-id = { id }
          onChange={ change }
          placeholder={ placeholder }
          name={ name }
          className="form-control"
          type = { type }
          />
        </div>
      </React.Fragment>
      /* Fim do campo */
    )
  }
}

SingleInputTyped.defaultProps = {
  type: 'text'
};

SingleInputTyped.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.number,
  placeholder: PropTypes.string,
  change: PropTypes.func.isRequired,
  type: PropTypes.string
};

export default SingleInputTyped