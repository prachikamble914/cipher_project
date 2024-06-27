import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function GiovanBattistaBellasoCipher({ ongetInfo }) {
    // Function to encrypt plaintext using the Giovan Battista Bellaso cipher
    function encode(plaintext, keyword) {
        let ciphertext = '';
        for (let i = 0; i < plaintext.length; i++) {
            let plainChar = plaintext.charAt(i).toUpperCase();
            let keyChar = keyword.charAt(i % keyword.length).toUpperCase();
            let shift = (keyChar.charCodeAt(0) - 65);
            let cipherChar = String.fromCharCode(((plainChar.charCodeAt(0) - 65 + shift) % 26) + 65);
            ciphertext += cipherChar;
        }
        return ciphertext;
    }

    // Function to decrypt the ciphertext using the Giovan Battista Bellaso cipher
    function decode(ciphertext, keyword) {
        let plaintext = '';
        for (let i = 0; i < ciphertext.length; i++) {
            let cipherChar = ciphertext.charAt(i).toUpperCase();
            let keyChar = keyword.charAt(i % keyword.length).toUpperCase();
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
                    The Giovan Battista Bellaso Cipher is a classical polyalphabetic substitution cipher, similar to the Vigenère cipher.
                </p>
                <p>
                    Keyed Vigenère Cipher: The Giovan Battista Bellaso Cipher, also known as the Vigenère variant, uses a keyword to encrypt plaintext.
                </p>
                <ul>
                    <li>Substitution Cipher: The Giovan Battista Bellaso Cipher substitutes each plaintext character with a character determined by the plaintext and the key.</li>
                    <li>Key Length: The key length in the Giovan Battista Bellaso Cipher matches the length of the plaintext.</li>
                    <li>Encryption: Each character in the plaintext is combined with a character from the key using a mathematical operation, typically modular addition.</li>
                    <li>Decryption: Decryption involves reversing the encryption process by subtracting the key character from the ciphertext character to retrieve the plaintext character.</li>
                    <li>Example: Using a key 'KEY', if 'H' in the plaintext is combined with 'K' from the key, the resulting ciphertext character might be 'T'.</li>
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
