import React from 'react';

const withClass2 = (WrappedComponent, classNm) => {
  return (props) => {
    return (
      <div className={classNm}>
        <WrappedComponent {...props}/>
      </div>
    );
  }
};

export default withClass2;
