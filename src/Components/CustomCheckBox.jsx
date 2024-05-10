// import React from "react";
// import "../Styles/Components/CustomCheckBox.scss";
// const CustomCheckBox = () => {
//   const [checked, setChecked] = useState(false);

//   const handleChange = () => {
//     setChecked(!checked);
//   };

//   return (
//     <label className="custom-checkbox">
//       <input type="checkbox" checked={checked} onChange={handleChange} />
//       <span className="checkmark"></span>
//     </label>
//   );
// };

// export { CustomCheckBox };
import React, { useState } from 'react';
import '../Styles/Components/CustomCheckBox.scss';

function CustomCheckBox(props) {
  const { checked, onChange } = props;
  // const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    // setIsChecked(!isChecked);
    console.log('you bro');
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <label htmlFor="" className="custom-checkbox">
      <input
        name=""
        type="checkbox"
        checked={checked}
        // onClick={handleChange}
        onChange={handleChange}
      />
      <span className="checkmark" />
    </label>
  );
}

export { CustomCheckBox };
