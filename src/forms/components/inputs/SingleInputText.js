import React from 'react';
import PropTypes from 'prop-types';

export class SingleInputText extends React.PureComponent {

  minuscula = (inputstring) => {
    let out = inputstring.toLowerCase();
    return out
  }

  render () {
    const {name, label, value, id, change, rows} = this.props;

    return (
      /* Inicio do campo */
      <React.Fragment>
        {label.length > 0 &&
          <label htmlFor={ name }>{ label }</label>
        }
        <textarea
        value={ value }
        data-id = { id }
        onChange={ change }
        name={ name }
        className="form-control"
        rows = { rows }
        />
      </React.Fragment>
      /* Fim do campo */
    )
  }
}

SingleInputText.defaultProps = {
  id: 0,
  rows: 4
};

SingleInputText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  rows: PropTypes.number,
  id: PropTypes.number,
};

export default SingleInputText