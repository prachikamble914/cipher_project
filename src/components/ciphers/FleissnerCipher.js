import React, { useState } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

// Function to generate a grille based on a given pattern and size
const generateGrille = (pattern, size) => {
    const grille = Array.from({ length: size }, () => Array(size).fill(false));
    for (let [row, col] of pattern) {
        grille[row][col] = true;
    }
    return grille;
}

// Function to rotate the grille 90 degrees clockwise
const rotateGrille = (grille) => {
    const size = grille.length;
    const newGrille = Array.from({ length: size }, () => Array(size).fill(false));
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            newGrille[col][size - row - 1] = grille[row][col];
        }
    }
    return newGrille;
}

// Function to encode a message using the Fleissner Cipher
const encodeFleissner = (message, grillePattern, size) => {
    const grille = generateGrille(grillePattern, size);
    let matrix = Array.from({ length: size }, () => Array(size).fill(''));
    let index = 0;

    for (let i = 0; i < 4; i++) {
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                if (grille[row][col] && index < message.length) {
                    matrix[row][col] = message[index++];
                }
            }
        }
        grille = rotateGrille(grille);
    }

    return matrix.flat().join('');
}

// Function to decode a message using the Fleissner Cipher
const decodeFleissner = (encodedMessage, grillePattern, size) => {
    const grille = generateGrille(grillePattern, size);
    let matrix = Array.from({ length: size }, () => Array(size).fill(''));
    let index = 0;
    const messageChars = encodedMessage.split('');

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            matrix[i][j] = messageChars[index++];
        }
    }

    let decodedMessage = '';
    for (let i = 0; i < 4; i++) {
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                if (grille[row][col]) {
                    decodedMessage += matrix[row][col];
                }
            }
        }
        grille = rotateGrille(grille);
    }

    return decodedMessage;
}

export default function FleissnerCipher({ ongetInfo }) {
    const [grillePattern, setGrillePattern] = useState([
        [0, 1], [1, 0], [1, 3], [2, 2]
    ]); // Example pattern
    const [size, setSize] = useState(4); // Fixed grid size

    // Function to display information about the Fleissner cipher
    const showInformation = () => {
        const info = (
            <>
                <p>
                    The Fleissner Cipher is a transposition cipher that uses a rotating grille for encoding and decoding messages.
                </p>
                <p>To encrypt or decrypt using the Fleissner Cipher, specify a grille pattern and enter your text.</p>
                <ul>
                    <li>Grille Pattern: A set of positions on the grid where the letters will be placed.</li>
                    <li>Grid Size: The size of the grid, which is fixed.</li>
                    <li>Encoding: The message is placed in the grid according to the grille pattern, rotating the grille after each placement.</li>
                    <li>Decoding: The encoded message is read from the grid according to the grille pattern, rotating the grille after each read.</li>
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
        <>
            <CipherFactory 
                encode={(message) => encodeFleissner(message, grillePattern, size)} 
                decode={(encodedMessage) => decodeFleissner(encodedMessage, grillePattern, size)} 
                keyComponentA="Cipher Key A" 
            />
        </>
    );
}
