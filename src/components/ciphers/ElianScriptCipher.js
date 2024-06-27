import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function ElianEncoder({ ongetInfo }) {

    const elianCipherMap = {
        'A': "ﬧ", 'B': "コ", 'C': "┘", 'D': "п", 'E': "ߛ", 'F': "ப",
        'G': "厂", 'H': "ⵎ", 'I': "ட", 'J': "ᒣ", 'K': "ᓗ", 'L': "ᒧ",
        'M': "ᒉ", 'N': "ᑭ", 'O': "ᘂ", 'P': "ᒥ", 'Q': "ᓕ", 'R': "ᒪ",
        'S': "ᒭ", 'T': "ᓘ", 'U': "ᒨ", 'V': "ᒕ", 'W': "ᑮ", 'X': "ᒎ",
        'Y': "ᓟ", 'Z': "ᓛ"
    };

    const reverseElianCipherMap = Object.fromEntries(
        Object.entries(elianCipherMap).map(([key, value]) => [value, key])
    );

    const encode = (text) => {
        let encoded = '';
        text = text.toUpperCase();

        for (let char of text) {
            if (elianCipherMap[char]) {
                encoded += elianCipherMap[char];
            } else {
                encoded += char; // Keep unknown characters as they are
            }
        }

        return encoded;
    };

    const decode = (text) => {
        let decoded = '';

        for (let char of text) {
            if (reverseElianCipherMap[char]) {
                decoded += reverseElianCipherMap[char];
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
                    The Elian Cipher is a simple substitution cipher where each letter of the alphabet is substituted by a unique symbol.
                </p>
                <p>To encrypt using the Elian Cipher, simply enter your text.</p>
                <ul>
                    <li>Substitution Cipher: Each letter in the plaintext is replaced by its corresponding unique symbol.</li>
                    <li>Encryption: To encrypt, replace each letter in the plaintext with its corresponding unique symbol.</li>
                    <li>Decryption: To decrypt, convert each symbol back to its corresponding letter.</li>
                    <li>Example: 'A' becomes 'ﬧ', 'B' becomes 'コ', 'C' becomes '┘', and so forth.</li>
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
