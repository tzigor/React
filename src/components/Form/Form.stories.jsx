import React from 'react';

import { Form } from './Form';

export default {
  title: 'MyApp/Form',
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  message: [{ id: 1, author: 'User', text: 'text To Be Send' }],
};

export const Secondary = Template.bind({});
Secondary.args = {
  message: [
    { id: 1, author: 'User', text: 'text To Be Send' },
    { id: 2, author: 'Petr', text: 'text To Be Send' },
  ],
};
