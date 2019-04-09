import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Textarea from '../../src/components/Textarea';

const defaultProps = {
  placeholder: 'Write your little description here…',
  name: 'textarea',
  rows: '4',
};

class TextareaStory extends React.Component {
  state = {
    value: {
      textarea: '',
    },
  };

  handleChange = ({ target }) => {
    this.setState(prevState => ({
      value: { ...prevState.value, [target.name]: target.value },
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <Textarea
        {...defaultProps}
        onChange={this.handleChange}
        value={value.textarea}
      />
    );
  }
}

storiesOf('Components|Textarea', module).add('MessageAsString', () => (
  <TextareaStory />
));
