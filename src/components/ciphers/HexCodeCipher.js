import React, { useState } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

// Function to encrypt a message using the Hex Code Cipher
function encryptHexCode(message) {
    if (typeof message !== 'string') {
        throw new TypeError('Message must be a string');
    }

    return message.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join(' ');
}

// Function to decrypt a message using the Hex Code Cipher
function decryptHexCode(encryptedMessage) {
    if (typeof encryptedMessage !== 'string') {
        throw new TypeError('Encrypted message must be a string');
    }

    return encryptedMessage.split(' ').map(hex => String.fromCharCode(parseInt(hex, 16))).join('');
}

export default function HexCodeCipher({ ongetInfo }) {
    // Function to display information about the Hex Code Cipher
    const showInformation = () => {
        const info = (
            <>
                <p>Hexadecimal (Hex) Code is a base-16 numeral system widely used in computing and digital electronics, consisting of sixteen symbols: 0-9 and A-F.</p>
            <p>It is a compact and human-friendly representation of binary-coded values, often used to simplify reading and interpreting large binary numbers.</p>
            <p>Each hex digit represents four binary digits (bits), making it a convenient way to express binary data in a more readable format.</p>
            <p>Hex Code can be utilized for encoding information, creating checksums, or as a simple substitution cipher for encrypting data.</p>
            <ul>
               
                <li>Hex Code is often used in programming, color codes in web design, and digital systems.</li>
                <li>To encrypt: Convert the plaintext into its ASCII or Unicode values, then encode these values in hexadecimal format.</li>
                <li>To decrypt: Convert the hexadecimal values back to their original ASCII or Unicode values to retrieve the plaintext.</li>
               
            </ul>
            </>
        );
        ongetInfo(info);
    };

    // Display information when the component mounts
    React.useEffect(() => {
        showInformation();
    }, []);

    // Render the CipherFactory component with encode and decode functions
    return (
        <CipherFactory encode={encryptHexCode} decode={decryptHexCode} />
    );
}
