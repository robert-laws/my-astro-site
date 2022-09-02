import { useState } from 'react';

export default function Showcase() {
  const [myName, setMyName] = useState('John Doe');

  return <div>Hello, {myName}</div>;
}
