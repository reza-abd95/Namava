import React, { useState } from "react";

export default function getColorByNumber( age ) {
  const [colorState, setColorState] = useState('');
  const [textState, setText] = useState('');

  if (age === 18) {
    setColorState('#F08453');
    setText('۱۸+');
  } else if (age === 15) {
    setColorState('#D95C5C');
    setText('۱۵+');
  } else if (age === 12) {
    setColorState('#FCC200');
    setText('۱۲+');
  }

  return (
    <div
    age={age}
      style={{ backgroundColor: colorState }}
      className="px-2 rounded-[4px] py-[3px] flex items-center text-center ml:px-3 des:px-[14px] des:py-[6px] ml:py-[5px]"
    >
      <p className="text-[15px] text-center des:text-[14px] large:text-[17px]">
        {textState}
      </p>
    </div>
  );
}