import React, { useState, useEffect } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

const HillCipher = ({ ongetInfo }) => {
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    // Generate a random keyword when the component mounts
    generateRandomKeyword();
    showInformation();
  }, []);

  const generateRandomKeyword = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomKeyword = '';
    for (let i = 0; i < 9; i++) {
      randomKeyword += alphabet[Math.floor(Math.random() * 26)];
    }
    setKeyword(randomKeyword);
  };

  const getKeyMatrixFromKeyword = (keyword) => {
    let keyMatrix = [];
    for (let i = 0; i < 3; i++) {
      keyMatrix[i] = [];
      for (let j = 0; j < 3; j++) {
        keyMatrix[i][j] = keyword.charCodeAt(i * 3 + j) % 65;
      }
    }
    return keyMatrix;
  };

  const matrixMultiply = (matrix, vector) => {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
      result[i] = 0;
      for (let j = 0; j < vector.length; j++) {
        result[i] += matrix[i][j] * vector[j];
      }
      result[i] = result[i] % 26;
    }
    return result;
  };

  const encrypt = (message, keyword) => {
    let keyMatrix = getKeyMatrixFromKeyword(keyword);
    let messageVector = message.toUpperCase().split('').map(char => char.charCodeAt(0) % 65);
    while (messageVector.length % 3 !== 0) messageVector.push(23); // Padding with 'X' (23)
    let cipherText = '';
    for (let i = 0; i < messageVector.length; i += 3) {
      let cipherVector = matrixMultiply(keyMatrix, messageVector.slice(i, i + 3));
      cipherText += cipherVector.map(num => String.fromCharCode(num + 65)).join('');
    }
    return cipherText;
  };

  const decrypt = (cipher, keyword) => {
    let keyMatrix = getKeyMatrixFromKeyword(keyword);
    let cipherVector = cipher.toUpperCase().split('').map(char => char.charCodeAt(0) % 65);
    let inverseKeyMatrix = getInverseMatrix(keyMatrix);
    let decryptedText = '';
    for (let i = 0; i < cipherVector.length; i += 3) {
      let messageVector = matrixMultiply(inverseKeyMatrix, cipherVector.slice(i, i + 3));
      decryptedText += messageVector.map(num => String.fromCharCode(num + 65)).join('');
    }
    return decryptedText;
  };

  const getInverseMatrix = (matrix) => {
    // Compute the inverse of the matrix modulo 26
    let det = matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) -
              matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) +
              matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]);
    det = ((det % 26) + 26) % 26; // Ensure positive modulo 26
    let detInverse = -1;
    for (let i = 1; i < 26; i++) {
      if ((det * i) % 26 === 1) {
        detInverse = i;
        break;
      }
    }
    if (detInverse === -1) throw new Error("Matrix is not invertible");

    let adj = [
      [
        matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1],
        matrix[0][2] * matrix[2][1] - matrix[0][1] * matrix[2][2],
        matrix[0][1] * matrix[1][2] - matrix[0][2] * matrix[1][1]
      ],
      [
        matrix[1][2] * matrix[2][0] - matrix[1][0] * matrix[2][2],
        matrix[0][0] * matrix[2][2] - matrix[0][2] * matrix[2][0],
        matrix[0][2] * matrix[1][0] - matrix[0][0] * matrix[1][2]
      ],
      [
        matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0],
        matrix[0][1] * matrix[2][0] - matrix[0][0] * matrix[2][1],
        matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
      ]
    ];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        adj[i][j] = ((adj[i][j] * detInverse) % 26 + 26) % 26;
      }
    }

    return adj;
  };

  const showInformation = () => {
    const info = (
      <>
         <p>The Hill Cipher is a polygraphic substitution cipher that encrypts plaintext by multiplying it with a matrix.</p>
            <p>Developed by Lester S. Hill in 1929, it was one of the first known polygraphic ciphers that could operate on more than three symbols at once.</p>
            <p>It uses linear algebra and matrix mathematics to transform plaintext into ciphertext and vice versa.</p>
            <p>The security of the Hill Cipher relies on the size of the matrix used for encryption.</p>
            <ul>
               
                <li>The Hill Cipher encrypts plaintext using matrix multiplication.</li>
                <li>To encrypt: Break the plaintext into blocks of numbers corresponding to their position in the alphabet, then multiply the plaintext matrix by the key matrix.</li>
                <li>To decrypt: Multiply the ciphertext matrix by the inverse of the key matrix.</li>
               
            </ul>
      </>
    );
    ongetInfo(info);
  };

  return (
    <>
               <div>
            <label>
              
                 {/* <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} /> */}
            </label>
        </div>
     

    <CipherFactory encode={encrypt} decode={decrypt} keyComponentA={"STR"} />
    </>
  );
}

export default HillCipher;
