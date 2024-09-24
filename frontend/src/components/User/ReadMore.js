// import React from 'react';
// import '../CSS/ReadMore.css';

// const ReadMore = () => {
//   return (
//     <div className="features-container">
//       <div className="row">
//         <div className="col-md-3 text-center feature-title">
//           <h2>Features</h2>
//           <div className="vertical-line"></div>
//         </div>
//         <div className="col-md-9">
//           <ul className="features-list">
//             <li>
//               <i className="fas fa-lock"></i>
//               Secured by 256-bit encryption
//             </li>
//             <li>
//               <i className="fab fa-ethereum"></i>
//               Backed by Ethereum-based technology
//             </li>
//             <li>
//               <i className="fas fa-laptop"></i>
//               Verifiable transactions
//             </li>
//             <li>
//               <i className="fas fa-hand-pointer"></i>
//               Easy to use
//             </li>
//             <li>
//               <i className="fas fa-dollar-sign"></i>
//               Cheaper than ballot voting system
//             </li>
//             <li>
//               <i className="fas fa-clock"></i>
//               Faster voting process
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReadMore;
import React from 'react';
import '../CSS/ReadMore.css';

const Features = () => {
  return (
    <div className="features-container">
      <div className="row">
        <div className="col-md-3 text-center feature-title">
          <h2>Features</h2>
          <div className="vertical-line"></div>
        </div>
        <div className="col-md-9">
          <ul className="features-list">
            <li>
              <i className="fas fa-lock"></i>
              Secured by 256-bit encryption
            </li>
            <li>
              <i className="fab fa-ethereum"></i>
              Backed by Ethereum-based technology
            </li>
            <li>
              <i className="fas fa-laptop"></i>
              Verifiable transactions
            </li>
            <li>
              <i className="fas fa-hand-pointer"></i>
              Easy to use
            </li>
            <li>
              <i className="fas fa-dollar-sign"></i>
              Cheaper than ballot voting system
            </li>
            <li>
              <i className="fas fa-clock"></i>
              Faster voting process
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
