import React, { useState, useEffect } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function KeywordCipher({ ongetInfo }) {
    const [keyword, setKeyword] = useState('');

    // Function to encode text using Keyword Cipher
    function encode(str) {
        return processText(str, keyword, false);
    }

    // Function to decode text using Keyword Cipher
    function decode(str) {
        return processText(str, keyword, true);
    }

    // Function to process text based on the Keyword Cipher logic
    function processText(text, keyword, isDecrypt) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const key = createKey(keyword, alphabet);
        const direction = isDecrypt ? -1 : 1;
        
        return text.split('').map((char, index) => {
            const charCode = char.toLowerCase().charCodeAt(0);
            if (/[a-zA-Z]/.test(char)) {
                const keyChar = key[index % key.length];
                const shift = alphabet.indexOf(keyChar) * direction;
                let shiftedCharCode = charCode + shift;
                if (shiftedCharCode > 122) {
                    shiftedCharCode -= 26;
                } else if (shiftedCharCode < 97) {
                    shiftedCharCode += 26;
                }
                return String.fromCharCode(shiftedCharCode);
            } else {
                return char;
            }
        }).join('');
    }

    // Function to create the key for the Keyword Cipher
    function createKey(keyword, alphabet) {
        const uniqueKeywordChars = Array.from(new Set(keyword.toLowerCase())).join('');
        const remainingAlphabet = alphabet.split('').filter(char => !uniqueKeywordChars.includes(char)).join('');
        return uniqueKeywordChars + remainingAlphabet;
    }

    // useEffect hook to provide information about the Keyword Cipher when the component mounts
    useEffect(() => {
        const info = (
            <>
               <p>The Keyword Cipher, also known as the Keyword Shift Cipher, is a monoalphabetic substitution cipher that uses a keyword to scramble the plaintext.</p>
            <p>It is a type of substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet based on the alphabetical position of the corresponding letter in the keyword.</p>
            <p>The Keyword Cipher is a simple and easy-to-implement cipher, often used for educational purposes or as a stepping stone to more complex ciphers.</p>
            <ul>
               
                <li>The Keyword Cipher encrypts plaintext by shifting each letter based on the alphabetical position of the keyword.</li>
                <li>To encrypt: Create a mixed alphabet based on the keyword, where the keyword determines the starting point of the alphabet.</li>
                <li>To decrypt: Reverse the encryption process by creating a mixed alphabet based on the keyword and shifting each letter of the ciphertext to find the original plaintext.</li>
               
            </ul>
            </>
        );
        ongetInfo(info);
    }, []);

    // JSX for input component to enter the keyword
    const keyComponent = (
        <div>
            <label>
                Keyword:
                <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            </label>
        </div>
    );

    return <CipherFactory encode={encode} decode={decode} keyComponentA={"STR"} />;
}



