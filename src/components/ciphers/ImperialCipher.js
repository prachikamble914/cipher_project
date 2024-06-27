
import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function ImperialEncoder({ ongetInfo }) {

    const imperialCipherMap = {
        'A': 'Z', 'B': 'Y', 'C': 'X', 'D': 'W', 'E': 'V', 'F': 'U',
        'G': 'T', 'H': 'S', 'I': 'R', 'J': 'Q', 'K': 'P', 'L': 'O',
        'M': 'N', 'N': 'M', 'O': 'L', 'P': 'K', 'Q': 'J', 'R': 'I',
        'S': 'H', 'T': 'G', 'U': 'F', 'V': 'E', 'W': 'D', 'X': 'C',
        'Y': 'B', 'Z': 'A'
    };

    const reverseImperialCipherMap = Object.fromEntries(
        Object.entries(imperialCipherMap).map(([key, value]) => [value, key])
    );

    const encode = (text) => {
        let encoded = '';
        text = text.toUpperCase();

        for (let char of text) {
            if (imperialCipherMap[char]) {
                encoded += imperialCipherMap[char];
            } else {
                encoded += char; // Keep unknown characters as they are
            }
        }

        return encoded;
    };

    const decode = (text) => {
        let decoded = '';
        text = text.toUpperCase();

        for (let char of text) {
            if (reverseImperialCipherMap[char]) {
                decoded += reverseImperialCipherMap[char];
            } else {
                decoded += char; // Keep unknown characters as they are
            }
        }

        return decoded;
    };

    const showInformation = () => {
        const info = (
            <>
                <p>
                    The Imperial Cipher is a simple substitution cipher where each letter of the alphabet is substituted by another unique letter.
                </p>
                <p>To encrypt using the Imperial Cipher, simply enter your text.</p>
                <ul>
                    <li>Substitution Cipher: Each letter in the plaintext is replaced by another unique letter according to the predefined mapping.</li>
                    <li>Encryption: To encrypt, replace each letter in the plaintext with its corresponding mapped letter.</li>
                    <li>Decryption: To decrypt, replace each letter in the ciphertext with its original letter using the reverse mapping.</li>
                    <li>Example: 'A' becomes 'Z', 'B' becomes 'Y', 'C' becomes 'X', and so forth.</li>
                </ul>
            </>
        );
        ongetInfo(info);
    };

    React.useEffect(() => {
        showInformation();
    }, []);

    return (
        <CipherFactory encode={encode} decode={decode} />
    );
}
