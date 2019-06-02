import React from 'react';

const Message = props => {
  return (
    <div className="message">
      <dd>
      <dl>User: User</dl>
      <dl>Date: Date</dl>
      <dl>Message: {props.message}</dl>
    </dd>
    </div>
  );
};

export default Message;
