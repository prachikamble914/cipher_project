import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function NicodemusCipher({ ongetInfo }) {

    // Function to encrypt plaintext using the Nicodemus cipher
    function encode(plaintext, key) {
        if (typeof key !== 'string') {
            throw new Error('Key must be a string');
        }
        let ciphertext = '';
        for (let i = 0; i < plaintext.length; i++) {
            let plainChar = plaintext.charAt(i).toUpperCase();
            let keyChar = key.charAt(i % key.length).toUpperCase();
            let shift = (keyChar.charCodeAt(0) - 65);
            let cipherChar = String.fromCharCode(((plainChar.charCodeAt(0) - 65 + shift) % 26) + 65);
            ciphertext += cipherChar;
        }
        return ciphertext;
    }

    // Function to decrypt the ciphertext using the Nicodemus Cipher
    function decode(ciphertext, key) {
        if (typeof key !== 'string') {
            throw new Error('Key must be a string');
        }
        let plaintext = '';
        for (let i = 0; i < ciphertext.length; i++) {
            let cipherChar = ciphertext.charAt(i).toUpperCase();
            let keyChar = key.charAt(i % key.length).toUpperCase();
            let shift = (keyChar.charCodeAt(0) - 65);
            let plainChar = String.fromCharCode(((cipherChar.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
            plaintext += plainChar;
        }
        return plaintext;
    }

    const showInformation = () => {
        const info = (
            <>
                <p>
                    The Nicodemus Cipher is a simple substitution cipher where each letter in the plaintext is shifted by a fixed number of positions down the alphabet, determined by a keyword.
                </p>
                <p>
                    To encrypt using the Nicodemus Cipher, each character of the plaintext is shifted by a value corresponding to the position of the character in the keyword.
                </p>
                <ul>
                    <li>Substitution Cipher: The Nicodemus Cipher substitutes each plaintext character with a character determined by shifting it by the value of the corresponding character in the keyword.</li>
                    <li>Key Length: The key in the Nicodemus Cipher is typically a word or phrase, and its length is not necessarily the same as the plaintext.</li>
                    <li>Encryption: To encrypt, each character in the plaintext is shifted by a value corresponding to the position of the character in the keyword.</li>
                    <li>Decryption: Decryption involves reversing the encryption process by shifting each character in the ciphertext backward by the value corresponding to the position of the character in the keyword.</li>
                </ul>
            </>
        );
        ongetInfo(info);
    };

    React.useEffect(() => {
        showInformation();
    }, []);

    return <CipherFactory encode={encode} decode={decode} keyComponentA={'STR'} />
};


