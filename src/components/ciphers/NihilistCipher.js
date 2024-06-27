import React, { useState } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function NihilistCipher({ ongetInfo }) {
    const [keyword, setKeyword] = useState('');

    // Function to generate the key square based on the keyword
    function generateKeySquare(keyword) {
        keyword = keyword.toUpperCase().replace(/J/g, "I");
        const uniqueChars = [];
        for (let char of keyword) {
            if (!uniqueChars.includes(char)) {
                uniqueChars.push(char);
            }
        }
        const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
        for (let char of alphabet) {
            if (!uniqueChars.includes(char)) {
                uniqueChars.push(char);
            }
        }
        return uniqueChars.join('');
    }

    // Nihilist Cipher encryption function
    function encryptNihilist(message, keyword) {
        const keySquare = generateKeySquare(keyword);
        let encryptedText = '';
        for (let char of message) {
            if (char === ' ') {
                encryptedText += ' ';
            } else {
                const index = keySquare.indexOf(char.toUpperCase());
                if (index !== -1) {
                    const row = Math.floor(index / 5) + 1;
                    const col = (index % 5) + 1;
                    encryptedText += `${row}${col} `;
                }
            }
        }
        return encryptedText.trim(); // Remove trailing space
    }

    // Nihilist Cipher decryption function
    function decryptNihilist(ciphertext, keyword) {
        const keySquare = generateKeySquare(keyword);
        let decryptedText = '';
        for (let i = 0; i < ciphertext.length; i += 3) {
            if (ciphertext[i] === ' ') {
                decryptedText += ' ';
                i--;
            } else {
                const row = parseInt(ciphertext[i]);
                const col = parseInt(ciphertext[i + 1]);
                const index = (row - 1) * 5 + (col - 1);
                decryptedText += keySquare[index];
            }
        }
        return decryptedText;
    }

    // Function to show information about the Nihilist Cipher
    const showInformation = () => {
        const info = (
            <>
              <p>The Nihilist Cipher is a polyalphabetic substitution cipher that combines elements of the Polybius square with a keyword to encrypt messages.</p>
            <p>Developed in the late 19th century by Russian nihilists, it was used to communicate secretly and securely during revolutionary activities.</p>
            <p>It involves converting plaintext into numbers using the Polybius square and then adding a numerical key to each number, resulting in a complex and secure ciphertext.</p>
            <p>The Nihilist Cipher is notable for its simplicity in concept yet effectiveness in obfuscating the plaintext through numerical transformation.</p>
            <ul>
               
                <li>The Nihilist Cipher uses a Polybius square and a numerical key to encrypt messages.</li>
                <li>To encrypt: Convert each letter of the plaintext into a pair of numbers using the Polybius square, then add the corresponding digit from the numerical key to each pair.</li>
                <li>To decrypt: Subtract the numerical key from each pair of numbers in the ciphertext, then use the Polybius square to convert the resulting numbers back into plaintext letters.</li>
               
            </ul>
            </>
        );
        ongetInfo(info);
    };

    // Call the showInformation function when the component mounts
    React.useEffect(() => {
        showInformation();
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

    return <CipherFactory encode={encryptNihilist} decode={decryptNihilist} keyComponentA={"STR"} />;
}
