import React, { useState, useEffect } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

const DoubleTranspositionCipher = ({ ongetInfo }) => {
    const [key1, setKey1] = useState('');
    const [key2, setKey2] = useState('');

    // Function to encode a string using the Double Transposition Cipher
    const encode = (message, keyword1, keyword2) => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        message = message.replace(/[^a-zA-Z]/g, "").toUpperCase();
        
        const keyLength1 = keyword1.length;
        const numRows1 = Math.ceil(message.length / keyLength1);
        let rectangle = Array.from({ length: numRows1 }, () => []);

        let index = 0;
        for (let col = 0; col < keyLength1; col++) {
            const keywordIndex = alphabet.indexOf(keyword1[col].toUpperCase()) + 1;
            for (let row = 0; row < numRows1; row++) {
                rectangle[row][keywordIndex - 1] = message[index] || "X";
                index++;
            }
        }

        let encodedMessage = "";
        for (let col = 1; col <= keyLength1; col++) {
            const keywordIndex = alphabet.indexOf(keyword1[col - 1].toUpperCase()) + 1;
            for (let row = 0; row < numRows1; row++) {
                encodedMessage += rectangle[row][keywordIndex - 1];
            }
        }

        if (keyword2) {
            const keyLength2 = keyword2.length;
            const numRows2 = Math.ceil(encodedMessage.length / keyLength2);
            rectangle = Array.from({ length: numRows2 }, () => []);

            index = 0;
            for (let col = 0; col < keyLength2; col++) {
                const keywordIndex = alphabet.indexOf(keyword2[col].toUpperCase()) + 1;
                for (let row = 0; row < numRows2; row++) {
                    rectangle[row][keywordIndex - 1] = encodedMessage[index] || "X";
                    index++;
                }
            }

            encodedMessage = "";
            for (let col = 1; col <= keyLength2; col++) {
                const keywordIndex = alphabet.indexOf(keyword2[col - 1].toUpperCase()) + 1;
                for (let row = 0; row < numRows2; row++) {
                    encodedMessage += rectangle[row][keywordIndex - 1];
                }
            }
        }

        return encodedMessage;
    }

    // Function to decode a string using the Double Transposition Cipher
    const decode = (encodedMessage, keyword1, keyword2) => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if (keyword2) {
            const keyLength2 = keyword2.length;
            const numRows2 = Math.ceil(encodedMessage.length / keyLength2);
            let rectangle = Array.from({ length: numRows2 }, () => []);

            let index = 0;
            for (let col = 0; col < keyLength2; col++) {
                const keywordIndex = alphabet.indexOf(keyword2[col].toUpperCase()) + 1;
                for (let row = 0; row < numRows2; row++) {
                    rectangle[row][keywordIndex - 1] = encodedMessage[index] || "X";
                    index++;
                }
            }

            let decodedMessage = "";
            for (let col = 0; col < keyLength2; col++) {
                const keywordIndex = alphabet.indexOf(keyword2[col].toUpperCase()) + 1;
                for (let row = 0; row < numRows2; row++) {
                    decodedMessage += rectangle[row][keywordIndex - 1];
                }
            }

            encodedMessage = decodedMessage;
        }

        const keyLength1 = keyword1.length;
        const numRows1 = Math.ceil(encodedMessage.length / keyLength1);
        let rectangle = Array.from({ length: numRows1 }, () => []);

        let index = 0;
        for (let col = 0; col < keyLength1; col++) {
            const keywordIndex = alphabet.indexOf(keyword1[col].toUpperCase()) + 1;
            for (let row = 0; row < numRows1; row++) {
                rectangle[row][col] = encodedMessage[index] || "X";
                index++;
            }
        }

        let decodedMessage = "";
        for (let col = 0; col < keyLength1; col++) {
            const keywordIndex = alphabet.indexOf(keyword1[col].toUpperCase()) + 1;
            for (let row = 0; row < numRows1; row++) {
                decodedMessage += rectangle[row][keywordIndex - 1];
            }
        }

        return decodedMessage;
    }

    useEffect(() => {
        const info = (
            <>
                 <p>The Double Transposition Cipher is a method of encryption that involves performing two separate transpositions (rearrangements) on the plaintext.</p>
            <p>It is a type of columnar transposition cipher where the columns are rearranged twice according to a defined key.</p>
            <p>This cipher adds an extra layer of security by making it more difficult for unauthorized parties to decipher the encrypted message without the key.</p>
            <p>The Double Transposition Cipher was used historically for secure communication, particularly during World War I and World War II.</p>
            <ul>
               
                <li>The Double Transposition Cipher involves two stages of transposition based on a keyword or key phrase.</li>
                <li>To encrypt: Rearrange the plaintext into a grid based on the key, then rearrange the rows and columns of the grid according to the key again.</li>
                <li>To decrypt: Reverse the transpositions by rearranging the rows and columns of the ciphertext grid based on the key, then read the plaintext from the grid.</li>
               
            </ul>
            </>
        );
        ongetInfo(info);
    }, []);

    const KeyInput = ({ value, onChange }) => (
        <input 
            type="text" 
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
        />
    );

    return (
        <>
            {/* <CipherFactory encode={encode} decode={decode}  
            
                keyComponentA={<KeyInput value={key1} onChange={setKey1} />}
                keyComponentB={<KeyInput value={key2} onChange={setKey2} />}
            /> */}
                        <CipherFactory encode={encode} decode={decode} keyComponentA="STR" keyComponentB="STR" />

        </>
    );
}

export default DoubleTranspositionCipher;
