import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function Masonic({ongetInfo}) {

    const pigpenCipher = {
        'A': '᚜', 'B': '᚛', 'C': 'ᚠ', 'D': 'ᛏ', 'E': 'ᛒ', 'F': 'ᛖ', 'G': 'ᛗ', 'H': 'ᛝ', 'I': 'ᛟ',
        'J': 'ᛠ', 'K': 'ᛡ', 'L': 'ᛢ', 'M': 'ᛣ', 'N': 'ᛤ', 'O': 'ᛥ', 'P': 'ᛦ', 'Q': 'ᛧ', 'R': 'ᛨ',
        'S': 'ᛩ', 'T': 'ᛪ', 'U': '᛫', 'V': '᛬', 'W': '᛭', 'X': 'ᛮ', 'Y': 'ᛯ', 'Z': 'ᛰ'
    };
    
    const reversePigpenCipher = Object.fromEntries(
        Object.entries(pigpenCipher).map(([letter, symbol]) => [symbol, letter])
    );
      
    function encode(plaintext) {
        return plaintext.toUpperCase().replace(/[^A-Z]/g, '').split('').map(char => pigpenCipher[char] || char).join('');
    }

    function decode(ciphertext) {
        return ciphertext.split('').map(symbol => reversePigpenCipher[symbol] || symbol).join('');
    }
     

  const showInformation = () => {
    const info = (
        <>
         <p>The Masonic Cipher, also known as the Freemasons Cipher or Pigpen Cipher, is a substitution cipher used by the Freemasons for encrypting texts.</p>
            <p>It replaces each letter of the plaintext with a symbol based on a grid. The grid consists of various geometric shapes, such as squares and triangles, often arranged in a grid of nine cells.</p>
            <p>The Masonic Cipher is primarily used for encoding messages and is not considered particularly secure by modern cryptographic standards.</p>
            <p>It is primarily used as a historical curiosity or for decorative purposes.</p>
            <ul>
               
                <li>The Masonic Cipher replaces each letter of the plaintext with a symbol based on a grid of geometric shapes.</li>
                <li>To encrypt: Replace each letter of the plaintext with the corresponding symbol from the Masonic grid.</li>
                <li>To decrypt: Replace each symbol from the Masonic grid with the corresponding letter of the plaintext.</li>
               
            </ul>
        </>
    );
    ongetInfo(info);
};

React.useEffect(() => {
    showInformation();
}, []);

      return <CipherFactory encode={encode} decode={decode} />
};



