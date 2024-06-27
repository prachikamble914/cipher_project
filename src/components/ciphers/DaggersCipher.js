import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function DaggersCipher({ ongetInfo }) {
    // Mapping of English letters to dagger symbols
    const daggerMap = {
        'A': '†',
        'B': '‡',
        'C': '†',
        'D': '‡',
        'E': '†',
        'F': '‡',
        'G': '†',
        'H': '‡',
        'I': '†',
        'J': '‡',
        'K': '†',
        'L': '‡',
        'M': '†',
        'N': '‡',
        'O': '†',
        'P': '‡',
        'Q': '†',
        'R': '‡',
        'S': '†',
        'T': '‡',
        'U': '†',
        'V': '‡',
        'W': '†',
        'X': '‡',
        'Y': '†',
        'Z': '‡',
        'a': '†',
        'b': '‡',
        'c': '†',
        'd': '‡',
        'e': '†',
        'f': '‡',
        'g': '†',
        'h': '‡',
        'i': '†',
        'j': '‡',
        'k': '†',
        'l': '‡',
        'm': '†',
        'n': '‡',
        'o': '†',
        'p': '‡',
        'q': '†',
        'r': '‡',
        's': '†',
        't': '‡',
        'u': '†',
        'v': '‡',
        'w': '†',
        'x': '‡',
        'y': '†',
        'z': '‡',
        ' ': ' ',
    };

    // Function to encrypt text using Daggers Cipher
    function encode(str) {
        let encodedChars = '';

        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            const daggerChar = daggerMap[char];
            encodedChars += daggerChar ? daggerChar : char;
        }

        return encodedChars;
    }

    // Function to decrypt text using Daggers Cipher
    function decode(str) {
        let decryptedText = '';

        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            const originalChar = Object.keys(daggerMap).find(key => daggerMap[key] === char);
            decryptedText += originalChar ? originalChar : char;
        }

        return decryptedText;
    }

    // Function to display information about the cipher
    const showInformation = () => {
        const info = (
            <>
                <p>The Daggers Cipher, also known as the Dagger Complex Cipher, is a cryptographic system used to encrypt and decrypt secret messages.</p>
            <p>It is named after the Dagger Complex, a military installation located near Darmstadt, Germany, which houses a United States intelligence facility.</p>
            <p>The cipher is used for secure communication and is designed to be resistant to cryptographic attacks.</p>
            <p>Details about the specifics of the Daggers Cipher are not publicly known, as it is used for classified purposes.</p>
            <ul>
               
                <li>The Daggers Cipher is used for secure military communications.</li>
                <li>To encrypt and decrypt: Specific details and algorithms of the Daggers Cipher are classified and not publicly available.</li>
               
            </ul>       
            </>
        );
        ongetInfo(info);
    };

    React.useEffect(() => {
        showInformation();
    }, []);

    return (
        <>
            <CipherFactory encode={encode} decode={decode} />
        </>
    );
};
