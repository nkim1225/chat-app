import React from 'react';

const TextField = props => {
  return (
    <div className="rows">
      <div className="small-10 columns">
        <input type="text" name="input" value={props.message} />
      </div>
      <div className="small-2 columns">
        <input className="button" type="submit" name="submit" value="submit" />
      </div>
    </div>
  );
};

export default TextField;
