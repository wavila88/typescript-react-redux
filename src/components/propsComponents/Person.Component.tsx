import React, { Component } from 'react';

type PersonProps = {
  name: {
    first: string;
    last: string;
  }
}

export const PersonComponent = (props: PersonProps) => {

    return (
      <div> {`${props.name.first} ${props.name.last}`}</div>
    );
  
};
