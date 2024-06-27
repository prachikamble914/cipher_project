import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function FractionatedMorseCipher({ ongetInfo }) {

    class FractionatedMorseCipher {
        constructor(key) {
            this.key = key.toUpperCase().replace(/[^A-Z]/g, '');

            this.morseCode = {
                'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
                'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
                'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
                'Y': '-.--', 'Z': '--..',
                '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
                '8': '---..', '9': '----.', '0': '-----'
            };

            this.reverseMorseCode = {};
            for (const [letter, code] of Object.entries(this.morseCode)) {
                this.reverseMorseCode[code] = letter;
            }

            this.trigraphTable = {};
            for (let i = 0; i < this.key.length; i++) {
                const trigraph = (i.toString(2).padStart(6, '0').match(/.{1,2}/g).join('')).replace(/0/g, '.').replace(/1/g, '-');
                this.trigraphTable[trigraph] = this.key[i];
            }

            this.reverseTrigraphTable = {};
            for (const [trigraph, letter] of Object.entries(this.trigraphTable)) {
                this.reverseTrigraphTable[letter] = trigraph;
            }
        }

        toMorse(text) {
            return text.toUpperCase().split('').map(char => this.morseCode[char] || '').join(' ');
        }

        fromMorse(morse) {
            return morse.split(' ').map(code => this.reverseMorseCode[code] || '').join('');
        }

        encode(plaintext) {
            const morse = this.toMorse(plaintext).replace(/ /g, '');
            const paddedMorse = morse.padEnd(Math.ceil(morse.length / 3) * 3, '.');
            const trigraphs = paddedMorse.match(/.{1,3}/g);

            return trigraphs.map(trigraph => this.trigraphTable[trigraph] || '').join('');
        }

        decode(ciphertext) {
            const trigraphs = ciphertext.split('').map(char => this.reverseTrigraphTable[char] || '');
            const morse = trigraphs.join('').replace(/\./g, '').replace(/.{5}/g, '$& ').trim();

            return this.fromMorse(morse);
        }
    }

    const fractionatedMorse = new FractionatedMorseCipher("EXAMPLEKEY");

    const showInformation = () => {
        const info = (
            <>
                <p>
                    The Fractionated Morse cipher is a cryptographic algorithm that combines the Morse code with a key.
                    It encodes plaintext into Morse code, splits it into fixed-length segments, and then maps those segments to letters using a key table.
                </p>
            </>
        );
        ongetInfo(info);
    };

    React.useEffect(() => {
        showInformation();
    }, []);

    return (
        <>
            <CipherFactory encode={fractionatedMorse.encode.bind(fractionatedMorse)} decode={fractionatedMorse.decode.bind(fractionatedMorse)} keyComponentA={"EXAMPLEKEY"} />
        </>
    )
};
