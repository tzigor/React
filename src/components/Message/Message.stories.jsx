import React from 'react';

import { Message } from './Message';

export default {
  title: 'MyApp/Message',
  component: Message,
};

const Template = (args) => <Message {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  messageList: [{ id: 1, author: 'User', text: 'text To Be Send' }],
};

export const Secondary = Template.bind({});
Secondary.args = {
  messageList: [
    { id: 1, author: 'User', text: 'text To Be Send' },
    { id: 2, author: 'Robot', text: 'text To Be Send' },
  ],
};
