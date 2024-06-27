import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function NullCipher({ ongetInfo }) {

    // Function to encode a string using the Null cipher (combine first letters)
    const encode = (text) => {
        // Split the text into words
        const words = text.split(' ');

        // Extract the first letter of each word and concatenate them
        const combinedLetters = words.reduce((acc, word) => {
            if (word.length > 0) {
                return acc + word.charAt(0).toUpperCase();
            } else {
                return acc;
            }
        }, '');

        return combinedLetters;
    };

    // Function to decode a string using the Null cipher (remove combined letters)
    const decode = (text) => {
        // Decoding is the same as encoding in this case
        return encode(text);
    };

    // Function to display information about the Null cipher
    const showInformation = () => {
        const info = (
            <>
                <p>The Null Cipher is a method of encoding where the plaintext is hidden within a larger body of text, making it appear as if the ciphertext contains no message.</p>
            <p>It is one of the simplest forms of steganography, the practice of concealing messages within other non-secret data.</p>
            <p>In a Null Cipher, the real message is extracted from the positions of certain words or letters in the text, or from some other agreed-upon pattern.</p>
            <p>It relies on the sender and receiver knowing the secret location and method for encoding and decoding the message.</p>
            <ul>
               
                <li>The Null Cipher hides the plaintext within apparently innocuous text or data.</li>
                <li>To encrypt: Embed the plaintext message within a larger body of text or data, following an agreed-upon method or pattern.</li>
                <li>To decrypt: Extract the hidden message using the agreed-upon method or pattern, usually based on predetermined cues or indicators.</li>
               
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
        <CipherFactory encode={encode} decode={decode} />
    );
}
