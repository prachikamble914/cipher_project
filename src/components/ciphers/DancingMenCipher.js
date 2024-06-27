import React, { useState, useEffect } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

// Define the mapping between the alphabet and dancing men symbols
const dancingMenAlphabet = {
    'A': '🕺', 'B': '💃', 'C': '👯', 'D': '🕴️', 'E': '🧍', 'F': '🧎',
    'G': '🕺🏽', 'H': '💃🏽', 'I': '👯🏽', 'J': '🕴️🏽', 'K': '🧍🏽', 'L': '🧎🏽',
    'M': '🕺🏿', 'N': '💃🏿', 'O': '👯🏿', 'P': '🕴️🏿', 'Q': '🧍🏿', 'R': '🧎🏿',
    'S': '🕺🏻', 'T': '💃🏻', 'U': '👯🏻', 'V': '🕴️🏻', 'W': '🧍🏻', 'X': '🧎🏻',
    'Y': '🕺🏾', 'Z': '💃🏾'
};

const reverseDancingMenAlphabet = Object.keys(dancingMenAlphabet).reduce((obj, key) => {
    obj[dancingMenAlphabet[key]] = key;
    return obj;
}, {});

// Function to encrypt a message using the Dancing Men Cipher
function encryptDancingMen(message) {
    return message.toUpperCase().split('').map(char => 
        dancingMenAlphabet[char] || char
    ).join('');
}

// Function to decrypt a message using the Dancing Men Cipher
function decryptDancingMen(encryptedMessage) {
    return encryptedMessage.split('').map(symbol => 
        reverseDancingMenAlphabet[symbol] || symbol
    ).join('');
}

export default function DancingMenCipher({ ongetInfo }) {
    // Function to display information about the Dancing Men Cipher
    const showInformation = () => {
        const info = (
            <>
            <p>The Dancing Men Cipher is a simple substitution cipher used in Arthur Conan Doyle's Sherlock Holmes story "The Adventure of the Dancing Men."</p>
            <p>It consists of a series of stick figure drawings, each representing a letter in the English alphabet.</p>
            <p>In the story, the cipher is used by members of a secret society to communicate messages.</p>
            <p>The cipher works by substituting each letter of the plaintext with a corresponding dancing man figure.</p>
            <ul>
               
                <li>The Dancing Men Cipher uses a set of stick figure symbols to represent letters.</li>
                <li>To encrypt: Substitute each letter of the plaintext with its corresponding dancing man symbol.</li>
                <li>To decrypt: Identify each dancing man symbol and replace it with its corresponding letter to reveal the plaintext.</li>
               
            </ul>
                            </>
        );
        ongetInfo(info);
    };

    // Display information when the component mounts
    useEffect(() => {
        showInformation();
    }, []);

    return (
        <>
            <div>
               
                <CipherFactory encode={encryptDancingMen} decode={decryptDancingMen} />
            </div>
        </>
    );
}
