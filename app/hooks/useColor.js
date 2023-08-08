import { useState } from "react";
export default function getColorByNumber({age}) {
    const [colorState, setColor] = useState('FFC400');
    const [textState, setText] = useState('۱۲+');
  
    switch (age) {
      case 15:
        setColor('F08453');
        setText('۱۵+');
        break;
      case 18:
        setColor('D95C5C');
        setText('۱۸+');
        break;
      default:
        setColor('FFC400');
        setText('۱۲+');
        break;
    }}