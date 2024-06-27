import React, { useState } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

class HomophonicSubstitutionCipher {
    constructor(mapping) {
        this.mapping = mapping;
        this.reverseMapping = this.generateReverseMapping();
    }

    generateReverseMapping() {
        const reverseMapping = {};
        for (let char in this.mapping) {
            if (this.mapping.hasOwnProperty(char)) {
                const substitutes = this.mapping[char];
                for (let substitute of substitutes) {
                    if (!reverseMapping[substitute]) {
                        reverseMapping[substitute] = [];
                    }
                    reverseMapping[substitute].push(char);
                }
            }
        }
        return reverseMapping;
    }

    encrypt(plaintext) {
        let ciphertext = '';
        for (let char of plaintext.toUpperCase()) {
            if (char === ' ') {
                ciphertext += ' ';
            } else if (this.mapping[char]) {
                const substitutes = this.mapping[char];
                const randomIndex = Math.floor(Math.random() * substitutes.length);
                ciphertext += substitutes[randomIndex];
            }
        }
        return ciphertext;
    }

    decrypt(ciphertext) {
        let plaintext = '';
        for (let char of ciphertext.toUpperCase()) {
            if (char === ' ') {
                plaintext += ' ';
            } else if (this.reverseMapping[char]) {
                const possibleChars = this.reverseMapping[char];
                plaintext += possibleChars[Math.floor(Math.random() * possibleChars.length)];
            }
        }
        return plaintext;
    }
}

export default function HomophonicSubstitutionCipherComponent({ ongetInfo }) {
    const [keyword, setKeyword] = useState('');

    // Example mapping for the cipher
    const mapping = {
        // 'A': ['@', '4'],
        // 'B': ['8', '13'],
        // 'C': ['(', '{'],
        // Add more mappings as needed
        // 'A': ['@', '4', 'α', 'λ'],
        // 'B': ['8', '13', 'ß', 'Β'],
        // 'C': ['(', '{', '©', 'ς'],
        // 'D': ['|)', '[)', 'δ', 'Ð'],
        // 'E': ['3', '€', 'ε', 'ξ'],
        // 'F': ['|=', 'ph', 'Φ', 'Ψ'],
        // 'G': ['6', '&', 'Γ', 'ζ'],
        // 'H': ['#', '|-|', 'η', 'Η'],
        // 'I': ['1', '!', 'ι', 'Ι'],
        // 'J': ['|', '/', 'j', 'ψ'],
        // 'K': ['X', '|<', 'κ', 'Κ'],
        // 'L': ['|_', '£', 'λ', 'Λ'],
        // 'M': ['|v|', '/\\/\\', 'μ', 'Μ'],
        // 'N': ['|\\|', '/\\/', 'η', 'Ν'],
        // 'O': ['0', 'Θ', 'ο', 'Ο'],
        // 'P': ['|o', '|º', 'π', 'Π'],
        // 'Q': ['O_', '9', 'ϑ', 'Ω'],
        // 'R': ['|2', '®', 'ρ', 'Ρ'],
        // 'S': ['5', '$', 'ς', 'Σ'],
        // 'T': ['7', '+', 'τ', 'Τ'],
        // 'U': ['|_|', 'µ', 'υ', 'Υ'],
        // 'V': ['\\/', '√', 'ν', 'Λ'],
        // 'W': ['\\/\\/', 'ω', 'W', 'Ψ'],
        // 'X': ['><', '×', 'χ', 'Χ'],
        // 'Y': ['¥', '|`', 'γ', 'Υ'],
        // 'Z': ['2', '≥', 'ζ', 'Ζ']
'A' : ['@', '4'],
'B' : ['8', '13'],
'C' : ['(', '{'],
'D' : ['|)', '[)', 'δ'],
'E' : ['3', '€'],
'F' : ['|=', 'ph'],
'G' : ['6', '&'],
'H' : ['#', '|-|'],
'I' : ['1', '!'],
'J' : ['|', '/', 'j'],
'K' : ['X', '|<'],
'L' : ['|_', '£'],
'M' : ['|v|', '/\\/\\'],
'N' : ['|\\|', '/\\/'],
'O' : ['0', 'Θ'],
'P' : ['|o', '|º'],
'Q' : ['O_', '9'],
'R' : ['|2', '®'],
'S' : ['5', '$'],
'T' : ['7', '+'],
'U' : ['|_|', 'µ'],
'V' : ['\\/', '√'],
'W' : ['\\/\\/', 'ω'],
'X' : ['><', '×'],
'Y' : ['¥', '|`'],
'Z' : ['2', '≥']


        
    };

    const cipher = new HomophonicSubstitutionCipher(mapping);

    // Function to show information about the Homophonic Substitution Cipher
    const showInformation = () => {
        const info = (
            <>
                <p>The Homophonic Substitution Cipher is a method of encrypting messages by substituting each letter of the plaintext with one of several possible symbols or numbers, making frequency analysis more difficult.</p>
            <p>Developed to overcome the weaknesses of simple substitution ciphers, it provides multiple ciphertext symbols for each plaintext letter based on the letter's frequency in the language.</p>
            <p>This technique helps to mask the letter frequencies of the plaintext, adding a layer of complexity to the encryption process.</p>
            <p>Homophonic Substitution Ciphers were used historically for encrypting sensitive information, particularly before the advent of more advanced cryptographic methods.</p>
            <ul>
                               <li>Homophonic Substitution Ciphers use multiple symbols for frequently occurring letters to obscure patterns.</li>
                <li>To encrypt: Assign several possible symbols to each letter, then substitute each plaintext letter with one of its assigned symbols, chosen randomly or based on a key.</li>
                <li>To decrypt: Map each symbol back to its corresponding plaintext letter, using the key or symbol assignments to retrieve the original message.</li>
               
            </ul>
            </>
        );
        ongetInfo(info);
    };

    // Call the showInformation function when the component mounts
    React.useEffect(() => {
        showInformation();
    }, []);

    // Function to encrypt using the Homophonic Substitution Cipher
    function encrypt(message) {
        return cipher.encrypt(message);
    }

    // Function to decrypt using the Homophonic Substitution Cipher
    function decrypt(ciphertext) {
        return cipher.decrypt(ciphertext);
    }

    return (
        <>
            {/* <div>
                <label>
                    Keyword:
                    <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                </label>
            </div> */}
            <CipherFactory encode={encrypt} decode={decrypt} />
        </>
    );
}