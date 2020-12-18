import React from 'react';
import { Link } from 'react-router-dom';

function About(){
  return (
    <div>
      About
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default About;


// export default () => {
//   return (
//     <div>
//       Im some other page!
//       <Link to="/">Go back home</Link>
//     </div>
//   );
// };