import React from 'react'
import Form from '../components/Form'

export default class FormContainer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form />
    );
  }
}
