// import { Row, InputNumber, Input } from 'antd';
// import React, { useState } from 'react';
// import SmoothTextInput from './SmoothText';

// /**
//  * 
//  * @param {Function} encode 
//  * @param {Function} decode 
//  * @param {number/string} keyComponentA
//  * @param {number/string} keyComponentB
//  * @returns 
//  */
// export default function CipherFactory({ encode, decode, keyComponentA, keyComponentB }) {
//     const [leftText, setLeftText] = useState('');
//     const [rightText, setRightText] = useState('');
//     const [shift1, setShift1] = useState(keyComponentA==="STR" ? '' : 0);
//     const [shift2, setShift2] = useState(keyComponentB==="STR" ? "" : 0);
//      // For Interactive pages which automatically changes when keys are changed
//      const setKey1 = (userKeyInput) => {
//         let text = keyComponentA === 'STR' ? userKeyInput.target.value : userKeyInput;
//         setShift1(text);
//         setRightText(encode(leftText, text, shift2));
//     };
    
//     const setKey2 = (userKeyInput) => {
//         let text = keyComponentB === 'STR' ? userKeyInput.target.value : Number(userKeyInput);
//         setShift2(text);
//         setRightText(encode(leftText, shift1, text));
//     };
    

//     const handleLeftTextChange = (event) => {
//         let text = event.target.value
//         setLeftText(text);
//         setRightText(encode(text, shift1, shift2));
//     };

//     const handleRightTextChange = (event) => {
//         let text = event.target.value
//         setRightText(text);
//         setLeftText(decode(text, shift1, shift2));
//     };

//     return (
//         <>
            
//             {keyComponentA &&
//                 <Row style={{ display: 'flex', padding: '10px 10px 10px 0px' }}>
//                     {
//                         (keyComponentA === "STR") ? <Input style={{ flex: 0.5 }} addonBefore="Cipher Key A" placeholder='SecretKey' value={shift1} size='large' onChange={setKey1} />
//                             : <InputNumber style={{ flex: 0.4 }} addonBefore="Cipher Key A:" placeholder="Shift value" value={shift1} size='large' onChange={setKey1} />
//                     }
//                 </Row>
//             }
//             {keyComponentB &&
//                 <Row style={{ display: 'flex', padding: '10px 10px 10px 0px' }}>
//                     {
//                         (keyComponentB === "STR") ? <Input style={{ flex: 0.5 }} addonBefore="Cipher Key B" placeholder='SecretKey' value={shift2} size='large' onChange={setKey2} />
//                             : <InputNumber style={{ flex: 0.4 }} addonBefore="Cipher Key B:" placeholder="Shift value" value={shift2} size='large' onChange={setKey2} />
//                     }
//                 </Row>
//             }

//             <Row style={{ display: 'flex' }}>
//                 <SmoothTextInput
//                     value={leftText}
//                     isLeft={true}
//                     onChange={handleLeftTextChange}
//                     placeholder="Enter text to Encrypt"
//                 />
//                 <SmoothTextInput
//                     value={rightText}
//                     isLeft={false}
//                     onChange={handleRightTextChange}
//                     placeholder="Enter text to Decrypt"
//                 />
//             </Row>

//         </>

//     );
// };
import { Row, InputNumber, Input } from 'antd';
import React, { useState } from 'react';
import SmoothTextInput from './SmoothText';

/**
 * 
 * @param {Function} encode 
 * @param {Function} decode 
 * @param {string} keyComponentA
 * @param {string} keyComponentB
 * @param {string} keyComponentC
 * @param {string} keyComponentD
 * @returns 
 */
export default function CipherFactory({ encode, decode, keyComponentA, keyComponentB, keyComponentC, keyComponentD }) {
    const [leftText, setLeftText] = useState('');
    const [rightText, setRightText] = useState('');
    const [shift1, setShift1] = useState(keyComponentA === "STR" ? '' : 0);
    const [shift2, setShift2] = useState(keyComponentB === "STR" ? "" : 0);
    const [shift3, setShift3] = useState(keyComponentC === "STR" ? "" : 0);
    const [shift4, setShift4] = useState(keyComponentD === "STR" ? "" : 0);

    const setKey1 = (userKeyInput) => {
        let text = keyComponentA === 'STR' ? userKeyInput.target.value : userKeyInput;
        setShift1(text);
        setRightText(encode(leftText, text, shift2, shift3, shift4));
    };

    const setKey2 = (userKeyInput) => {
        let text = keyComponentB === 'STR' ? userKeyInput.target.value : Number(userKeyInput);
        setShift2(text);
        setRightText(encode(leftText, shift1, text, shift3, shift4));
    };

    const setKey3 = (userKeyInput) => {
        let text = keyComponentC === 'STR' ? userKeyInput.target.value : Number(userKeyInput);
        setShift3(text);
        setRightText(encode(leftText, shift1, shift2, text, shift4));
    };

    const setKey4 = (userKeyInput) => {
        let text = keyComponentD === 'STR' ? userKeyInput.target.value : Number(userKeyInput);
        setShift4(text);
        setRightText(encode(leftText, shift1, shift2, shift3, text));
    };

    const handleLeftTextChange = (event) => {
        let text = event.target.value;
        setLeftText(text);
        setRightText(encode(text, shift1, shift2, shift3, shift4));
    };

    const handleRightTextChange = (event) => {
        let text = event.target.value;
        setRightText(text);
        setLeftText(decode(text, shift1, shift2, shift3, shift4));
    };

    return (
        <>
            {keyComponentA &&
                <Row style={{ display: 'flex', padding: '10px 10px 10px 0px' }}>
                    {
                        (keyComponentA === "STR") ? <Input style={{ flex: 0.5 }} addonBefore="Cipher Key A" placeholder='SecretKey' value={shift1} size='large' onChange={setKey1} />
                            : <InputNumber style={{ flex: 0.4 }} addonBefore="Cipher Key A:" placeholder="Shift value" value={shift1} size='large' onChange={setKey1} />
                    }
                </Row>
            }
            {keyComponentB &&
                <Row style={{ display: 'flex', padding: '10px 10px 10px 0px' }}>
                    {
                        (keyComponentB === "STR") ? <Input style={{ flex: 0.5 }} addonBefore="Cipher Key B" placeholder='SecretKey' value={shift2} size='large' onChange={setKey2} />
                            : <InputNumber style={{ flex: 0.4 }} addonBefore="Cipher Key B:" placeholder="Shift value" value={shift2} size='large' onChange={setKey2} />
                    }
                </Row>
            }
            {keyComponentC &&
                <Row style={{ display: 'flex', padding: '10px 10px 10px 0px' }}>
                    {
                        (keyComponentC === "STR") ? <Input style={{ flex: 0.5 }} addonBefore="Cipher Key C" placeholder='SecretKey' value={shift3} size='large' onChange={setKey3} />
                            : <InputNumber style={{ flex: 0.4 }} addonBefore="Cipher Key C:" placeholder="Shift value" value={shift3} size='large' onChange={setKey3} />
                    }
                </Row>
            }
            {keyComponentD &&
                <Row style={{ display: 'flex', padding: '10px 10px 10px 0px' }}>
                    {
                        (keyComponentD === "STR") ? <Input style={{ flex: 0.5 }} addonBefore="Cipher Key D" placeholder='SecretKey' value={shift4} size='large' onChange={setKey4} />
                            : <InputNumber style={{ flex: 0.4 }} addonBefore="Cipher Key D:" placeholder="Shift value" value={shift4} size='large' onChange={setKey4} />
                    }
                </Row>
            }

            <Row style={{ display: 'flex' }}>
                <SmoothTextInput
                    value={leftText}
                    isLeft={true}
                    onChange={handleLeftTextChange}
                    placeholder="Enter text to Encrypt"
                />
                <SmoothTextInput
                    value={rightText}
                    isLeft={false}
                    onChange={handleRightTextChange}
                    placeholder="Enter text to Decrypt"
                />
            </Row>
        </>
    );
}