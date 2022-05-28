// import React from 'react';
// import { PorpTypes } from "prop-types"

// const backgroundColor={
//     primary: "#61DBFD",
//     secondary: "#ffffff",
//     black: "#000000",
// }
// const textColor={
//     primary: "#000000",
//     secondary: "#171717",
//     black: "#ffffff",
// }
// const Button=({children, variant, onClick, className, ...props})=>{
//     const styles={
//         backgroundColor:backgroundColor[variant]||backgroundColor.primary,
//         color:textColor[variant]||textColor.primary,
//     };
//     return(
//         <button style={styles}{...props} onClick={onClick}>
//             {children}
//         </button>
//     )
// }
// Button.propTypes = {
//     variant: PropTypes.oneOf([
//       "primary",
//       "secondary",
//       "black"
//     ]),
//     onClick: PropTypes.func,
//   }
  
//   Button.defaultProps = {
//     variant: "primary",
//     onClick: () => {},
//   }
  
// export default Button;
  