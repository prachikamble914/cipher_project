import React, { useState, useEffect } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function EnigmaMachineCipher({ ongetInfo }) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Example rotors and reflector settings
    const rotors = [
        'EKMFLGDQVZNTOWYHXUSPAIBRCJ',  // Rotor I
        'AJDKSIRUXBLHWTMCQGZNPYFVOE',  // Rotor II
        'BDFHJLCPRTXVZNYEIWGAKMUSQO'   // Rotor III
    ];

    const reflector = 'YRUHQSLDPXNGOKMIEBFZCWVJAT';  // Reflector B

    // Example plugboard settings (swapping pairs)
    const plugboardSettings = {
        A: 'B', B: 'A',
        C: 'D', D: 'C',
        E: 'F', F: 'E'
    };

    // Function to pass through the plugboard
    function plugboard(input) {
        return plugboardSettings[input] || input;
    }

    // Function to encode a single character through a rotor
    function encodeRotor(char, rotor, offset) {
        const index = (alphabet.indexOf(char) + offset) % 26;
        return rotor[index];
    }

    // Function to reverse encode a single character through a rotor
    function reverseEncodeRotor(char, rotor, offset) {
        const index = (rotor.indexOf(char) - offset + 26) % 26;
        return alphabet[index];
    }

    // Function to step the rotors
    function stepRotors(rotorOffsets) {
        rotorOffsets[0] = (rotorOffsets[0] + 1) % 26;
        if (rotorOffsets[0] === 0) {
            rotorOffsets[1] = (rotorOffsets[1] + 1) % 26;
            if (rotorOffsets[1] === 0) {
                rotorOffsets[2] = (rotorOffsets[2] + 1) % 26;
            }
        }
    }

    // Function to process the message for both encoding and decoding
    function processMessage(str, initialOffsets) {
        let processedStr = '';
        let rotorOffsets = [...initialOffsets];

        for (let char of str.toUpperCase()) {
            if (alphabet.includes(char)) {
                stepRotors(rotorOffsets);

                // Pass through plugboard
                char = plugboard(char);

                // Pass through rotors (right to left)
                for (let i = rotors.length - 1; i >= 0; i--) {
                    char = encodeRotor(char, rotors[i], rotorOffsets[i]);
                }

                // Pass through reflector
                char = reflector[alphabet.indexOf(char)];

                // Pass back through rotors (left to right)
                for (let i = 0; i < rotors.length; i++) {
                    char = reverseEncodeRotor(char, rotors[i], rotorOffsets[i]);
                }

                // Pass through plugboard again
                char = plugboard(char);
            }
            processedStr += char;
        }

        return processedStr;
    }

    // Function to encode with specified initial rotor positions
    const encode = (str) => {
        console.log("Encoding message:", str);
        const result = processMessage(str, [0, 0, 0]);
        console.log("Encoded result:", result);
        return result;
    };

    // Function to decode with specified initial rotor positions
    const decode = (str) => {
        console.log("Decoding message:", str);
        const result = processMessage(str, [0, 0, 0]);
        console.log("Decoded result:", result);
        return result;
    };

    const showInformation = () => {
        const info = (
            <>
               <p>The Enigma Machine is a cipher device used to encrypt and decrypt secret messages, most famously utilized by Nazi Germany during World War II.</p>
            <p>Developed in the early 20th century by the German engineer Arthur Scherbius, the Enigma Machine played a crucial role in military communications.</p>
            <p>It uses a series of rotating rotors and a plugboard to scramble plaintext into complex ciphertext, making it incredibly difficult to decipher without the exact settings.</p>
            <ul>
               
                <li>The Enigma Machine uses interchangeable rotors to change the encryption algorithm with each key press.</li>
                <li>To encrypt: The plaintext is entered, and the machine outputs the corresponding ciphertext based on the rotor and plugboard settings.</li>
                <li>To decrypt: The ciphertext is input into another Enigma Machine configured identically to the original settings, revealing the plaintext.</li>
               
            </ul>
            </>
        );
        ongetInfo(info);
    };
    useEffect(() => {
        showInformation();
    }, []);

    return (
        <>
            <CipherFactory encode={encode} decode={decode} />
        </>
    );
}
