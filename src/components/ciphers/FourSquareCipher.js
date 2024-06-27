// import React, { useState, useEffect } from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';

// const generateKeySquare = (key) => {
//     const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ"; // J is usually omitted
//     let keySquare = key.toUpperCase().replace(/J/g, 'I').split('');
//     keySquare = [...new Set(keySquare)]; // Remove duplicates
//     for (let char of alphabet) {
//         if (!keySquare.includes(char)) {
//             keySquare.push(char);
//         }
//     }
//     return keySquare;
// };

// const findPosition = (char, square) => {
//     const index = square.indexOf(char);
//     const row = Math.floor(index / 5);
//     const col = index % 5;
//     return { row, col };
// };

// const fourSquareEncrypt = (message, key1, key2) => {
//     const square1 = generateKeySquare(key1);
//     const square2 = generateKeySquare(key2);
//     const plainSquare = generateKeySquare('');

//     message = message.toUpperCase().replace(/J/g, 'I').replace(/ /g, '');
//     if (message.length % 2 !== 0) {
//         message += 'X'; // Padding
//     }

//     let cipherText = '';

//     for (let i = 0; i < message.length; i += 2) {
//         const char1 = message[i];
//         const char2 = message[i + 1];

//         const { row: row1, col: col1 } = findPosition(char1, plainSquare);
//         const { row: row2, col: col2 } = findPosition(char2, plainSquare);

//         cipherText += square1[row1 * 5 + col2];
//         cipherText += square2[row2 * 5 + col1];
//     }

//     return cipherText;
// };

// const fourSquareDecrypt = (cipherText, key1, key2) => {
//     const square1 = generateKeySquare(key1);
//     const square2 = generateKeySquare(key2);
//     const plainSquare = generateKeySquare('');

//     let message = '';

//     for (let i = 0; i < cipherText.length; i += 2) {
//         const char1 = cipherText[i];
//         const char2 = cipherText[i + 1];

//         const { row: row1, col: col1 } = findPosition(char1, square1);
//         const { row: row2, col: col2 } = findPosition(char2, square2);

//         message += plainSquare[row1 * 5 + col2];
//         message += plainSquare[row2 * 5 + col1];
//     }

//     return message;
// };

// const FourSquareCipher = ({ ongetInfo }) => {
//     const [key1, setKey1] = useState('');
//     const [key2, setKey2] = useState('');

//     useEffect(() => {
//         showInformation();
//     }, []);

//     const showInformation = () => {
//         const info = (
//             <>
//                 <p>
//                     The Four-Square Cipher is a polygraphic substitution cipher. It uses four 5x5 matrices to encrypt pairs of letters.
//                 </p>
//                 <p>To use the Four-Square Cipher, specify two keyword keys and enter your text.</p>
//                 <ul>
//                     <li>Each key creates a 5x5 key square with letters of the alphabet (I and J are considered the same).</li>
//                     <li>Encryption: Pairs of letters are encrypted by locating them in the key squares and swapping their positions.</li>
//                     <li>Decryption: The process is reversed to retrieve the original message.</li>
//                 </ul>
//             </>
//         );
//         ongetInfo(info);
//     };

//     return (
//         <>
//             <div>
//                 <label>
//                     Cipher Key A:
//                     <input
//                         type="text"
//                         value={key1}
//                         onChange={(e) => setKey1(e.target.value)}
//                     />
//                 </label>
//             </div>
//             <div>
//                 <label>
//                     Cipher Key B:
//                     <input
//                         type="text"
//                         value={key2}
//                         onChange={(e) => setKey2(e.target.value)}
//                     />
//                 </label>
//             </div>
//             <CipherFactory encode={(message) => fourSquareEncrypt(message, key1, key2)} decode={(ciphertext) => fourSquareDecrypt(ciphertext, key1, key2)} />
//         </>
//     );
// };

// export default FourSquareCipher;
// Helper function to create a key square from a given keyword
// Helper function to create a key square from a given keyword
function createKeySquare(keyword) {
    const alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ'; // Excluding 'J'
    let keySquare = '';
    keyword = keyword.toUpperCase().replace(/J/g, 'I');
  
    // Append unique characters from the keyword
    for (let char of keyword) {
      if (!keySquare.includes(char) && alphabet.includes(char)) {
        keySquare += char;
      }
    }
  
    // Append remaining characters from the alphabet
    for (let char of alphabet) {
      if (!keySquare.includes(char)) {
        keySquare += char;
      }
    }
  
    // Convert to 5x5 matrix
    const keySquareMatrix = [];
    for (let i = 0; i < 25; i += 5) {
      keySquareMatrix.push(keySquare.slice(i, i + 5).split(''));
    }
  
    return keySquareMatrix;
  }
  
  // Helper function to find coordinates of a character in a key square
  function findCoordinates(char, square) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (square[i][j] === char) {
          return [i, j];
        }
      }
    }
    return null;
  }
  
  // Encrypt a message using the Four-Square Cipher
  function fourSquareEncrypt(message, key1, key2) {
    const plainSquare = createKeySquare('');
    const keySquare1 = createKeySquare(key1);
    const keySquare2 = createKeySquare(key2);
  
    message = message.toUpperCase().replace(/J/g, 'I').replace(/ /g, '');
    if (message.length % 2 !== 0) {
      message += 'X'; // Padding
    }
  
    let encryptedMessage = '';
    for (let i = 0; i < message.length; i += 2) {
      const char1 = message[i];
      const char2 = message[i + 1];
      const [row1, col1] = findCoordinates(char1, plainSquare);
      const [row2, col2] = findCoordinates(char2, plainSquare);
      encryptedMessage += keySquare1[row1][col2] + keySquare2[row2][col1];
    }
  
    return encryptedMessage;
  }
  
  // Decrypt a message using the Four-Square Cipher
  function fourSquareDecrypt(cipherText, key1, key2) {
    const plainSquare = createKeySquare('');
    const keySquare1 = createKeySquare(key1);
    const keySquare2 = createKeySquare(key2);
  
    cipherText = cipherText.toUpperCase().replace(/J/g, 'I').replace(/ /g, '');
  
    let decryptedMessage = '';
    for (let i = 0; i < cipherText.length; i += 2) {
      const char1 = cipherText[i];
      const char2 = cipherText[i + 1];
      const [row1, col1] = findCoordinates(char1, keySquare1);
      const [row2, col2] = findCoordinates(char2, keySquare2);
      decryptedMessage += plainSquare[row1][col2] + plainSquare[row2][col1];
    }
  
    return decryptedMessage;
  }
  
  // Example usage
  const key1 = 'EXAMPLE';
  const key2 = 'KEYWORD';
  const message = 'HELLO';
  const encrypted = fourSquareEncrypt(message, key1, key2);
  const decrypted = fourSquareDecrypt(encrypted, key1, key2);
  
  console.log('Original Message:', message); // Output: Original Message: HELLO
  console.log('Encrypted Message:', encrypted); // Output: Encrypted Message: (Encrypted text)
  console.log('Decrypted Message:', decrypted); // Output: Decrypted Message: HELLOX
  
  