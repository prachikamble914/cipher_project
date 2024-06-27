import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function ColumnarTranspositionCipher({ ongetInfo }) {
// Function to encode a message using the Columnar Transposition Cipher
function encodeColumnarTransposition(message, key) {
    const columns = key.length;
    const rows = Math.ceil(message.length / columns);
    const grid = [];

    // Fill the grid with the message characters
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            const char = message[i * columns + j];
            row.push(char ? char : ''); // Fill empty spaces with empty string if message is shorter than the grid
        }
        grid.push(row);
    }

    // Sort the key to determine the order of columns
    const keyIndices = key.split('').map((char, index) => ({ char, index }))
        .sort((a, b) => a.char.localeCompare(b.char))
        .map(obj => obj.index);

    // Read the columns based on the sorted key indices
    let encodedMessage = '';
    for (let col of keyIndices) {
        for (let row of grid) {
            if (row[col] !== '') { // Avoid adding empty cells
                encodedMessage += row[col];
            }
        }
    }

    return encodedMessage;
}

    // Function to decode a message using the Columnar Transposition Cipher
function decodeColumnarTransposition(encodedMessage, key) {
    const columns = key.length;
    const rows = Math.ceil(encodedMessage.length / columns);
    const grid = Array.from({ length: rows }, () => Array(columns).fill(''));

    // Sort the key to determine the order of columns
    const keyIndices = key.split('').map((char, index) => ({ char, index }))
        .sort((a, b) => a.char.localeCompare(b.char))
        .map(obj => obj.index);

    // Calculate the number of characters in each column
    const fullColumnHeight = Math.floor(encodedMessage.length / columns);
    const remainder = encodedMessage.length % columns;
    const columnLengths = Array(columns).fill(fullColumnHeight).map((length, index) => index < remainder ? length + 1 : length);

    // Fill the grid with the encoded message characters based on the sorted key indices
    let index = 0;
    for (let i = 0; i < columns; i++) {
        const col = keyIndices.indexOf(i);
        for (let row = 0; row < columnLengths[col]; row++) {
            grid[row][col] = encodedMessage[index++];
        }
    }

    // Read the grid row by row to reconstruct the original message
    let decodedMessage = '';
    for (let row of grid) {
        decodedMessage += row.join('');
    }

    return decodedMessage.trim();
}
    // Show information about the Columnar Transposition Cipher
    const showInformation = () => {
        const info = (
            <>
                <p>
                    The Columnar Transposition Cipher is a type of transposition cipher where the message is written out in rows of a fixed length, and then read out again column by column according to a given key.
                </p>
                <p>
                    The encryption function for the Columnar Transposition Cipher takes the form of:
                    <br />
                    <strong>1. Write the message in rows of a fixed length based on the key.</strong>
                    <br />
                    <strong>2. Read the columns based on the alphabetical order of the key characters.</strong>
                </p>
                <ul>
                    <li>Transposition Cipher: Characters are shifted in position according to the key, rather than being substituted for other characters.</li>
                    <li>Key: The key is a word or phrase where the order of the letters determines the order in which the columns are read.</li>
                    <li>Decryption: Decryption involves reconstructing the grid and then reading it row by row.</li>
                    <li>Example: With the key "ZEBRAS", 'HELLO' might become 'OLELH'.</li>
                </ul>
            </>
        );
        ongetInfo(info);
    };

    // Call the showInformation function when the component mounts
    React.useEffect(() => {
        showInformation();
    }, []);

    return (
        <>
            <CipherFactory encode={encodeColumnarTransposition} decode={decodeColumnarTransposition} keyComponentA="STR" />
        </>
    );
}

