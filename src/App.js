import React,{useState} from "react";
import {Popover ,Layout, Menu, Typography, Watermark, Spin } from 'antd';

import lodash from 'lodash'
import AtbashCipher from "./components/ciphers/atbash"
import ColumnarTranspositionCipher from "./components/ciphers/ColumnarTranspositionCipher";
import CaesarCipher from "./components/ciphers/caesar";
import DancingMenCipher from "./components/ciphers/DancingMenCipher";
import DaggersCipher from "./components/ciphers/DaggersCipher";
import DoubleTranspositionCipher from "./components/ciphers/DoubleTranspositionCipher";
import ElianScriptCipher from "./components/ciphers/ElianScriptCipher";
import EnigmaMachineCipher from "./components/ciphers/EnigmaMachineCipher";
import FleissnerCipher from "./components/ciphers/FleissnerCipher";
import FourSquareCipher from "./components/ciphers/FourSquareCipher";
import FractionatedMorseCipher from "./components/ciphers/FractionatedMorseCipher";
import GiovanBattistaBellasoCipher from "./components/ciphers/GiovanBattistaBellasoCipher";
import GrayCodeCipher from "./components/ciphers/GrayCodeCipher";
import GronsfeldCipher from "./components/ciphers/GronsfeldCipher";
import HillCipher from "./components/ciphers/HillCipher";
import BinaryEncoding from "./components/ciphers/binary";
import AffineCipher from "./components/ciphers/AffineCipher";
import CipherAscii from "./components/ciphers/CipherAscii";
import AMSCO from "./components/ciphers/AMSCO"
import AutoKey from "./components/ciphers/AutoKey"
import BaconianCipher from "./components/ciphers/Baconian";
import Base64Encoding from "./components/ciphers/Base64";
import BinaryEncodedDecimalN from "./components/ciphers/BCD";
import BeaufortCipher from "./components/ciphers/Beaufort";
import BellasoCipher from "./components/ciphers/Bellaso";
import {InfoCircleOutlined} from '@ant-design/icons'
import BifidCipher from "./components/ciphers/Bifid";
import ADFGVX from "./components/ciphers/ADFGVX";
import BinaryCode from "./components/ciphers/BinaryCode";
import Checkerboard from "./components/ciphers/Checkerboard";
import ChaoCipher from "./components/ciphers/Chaocipher";
import Cipher94 from "./components/ciphers/94 Cipher";
import BookCipher from "./components/ciphers/BookCipher";
import Masonic from "./components/ciphers/MasonicCipher";
import MorseCipher from "./components/ciphers/MorseCipher";
import JuliusCipher from "./components/ciphers/JuliusCipher";
import KeywordCipher from "./components/ciphers/KeywordCipher";
import NullCipher from "./components/ciphers/NullCipher";
import NihilistSubstitutionCipher from "./components/ciphers/NihilistSubstitutionCipher";
import LarrabeeCipher from "./components/ciphers/LarrabeeCipher";
import ImperialCipher from "./components/ciphers/ImperialCipher";
import HomphonicSubstitutionCipher from "./components/ciphers/HomphonicSubstitutionCipher";
import NihilistCipher from "./components/ciphers/NihilistCipher";
import NicodemusCipher from "./components/ciphers/NicodemusCipher";
import HexCodeCipher from "./components/ciphers/HexCodeCipher";
import HeadlineCipher from "./components/ciphers/HeadlineCipher";

const { Content, Header } = Layout;
const { Title } = Typography;

const App = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [cipherInfo, setCipherInfo] = useState('');
  //const [encryptInfo, setEncryptInfo] = useState('');
  //const [decryptInfo, setDecryptInfo] = useState('');
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState('');
  const toggleInfo = () => {
    setContent(cipherInfo);
    setVisible(true);
  }

  const hidePopover = () => {
    setVisible(false);
  }
  

  const items = [
    ['ColumnarTransposition Cipher', <ColumnarTranspositionCipher ongetInfo={setCipherInfo} />],
    ['Caesar Cipher', <CaesarCipher ongetInfo={setCipherInfo} />],
    ['DancingMen Cipher', <DancingMenCipher ongetInfo={setCipherInfo} />],
    ['Daggers Cipher', <DaggersCipher ongetInfo={setCipherInfo} />],
    ['DoubleTransposition Cipher', <DoubleTranspositionCipher ongetInfo={setCipherInfo}/>],
    ['ElianScript Cipher', <ElianScriptCipher ongetInfo={setCipherInfo} />],
    ['EnigmaMachine Cipher', <EnigmaMachineCipher ongetInfo={setCipherInfo} />],
    ['Fleissner Cipher', <FleissnerCipher ongetInfo={setCipherInfo}/>],
    ['GiovanBattistaBellaso Cipher', <GiovanBattistaBellasoCipher ongetInfo={setCipherInfo}/>],
    ['Fractionated Morse Cipher', <FractionatedMorseCipher ongetInfo={setCipherInfo}/>],
    ['FourSquare Cipher', <FourSquareCipher ongetInfo={setCipherInfo}/>],
    ['GrayCode Cipher', <GrayCodeCipher ongetInfo={setCipherInfo}/>],
    ['Gronsfeld Cipher', <GronsfeldCipher ongetInfo={setCipherInfo}/>],
    ['Hill Cipher', <HillCipher ongetInfo={setCipherInfo}/>],
    ['HeadlineCipher', <HeadlineCipher ongetInfo={setCipherInfo}/>],
    ['HexCode Cipher', <HexCodeCipher ongetInfo={setCipherInfo}/>],
    ['Atbash Cipher', <AtbashCipher ongetInfo={setCipherInfo} />],
    ['Binary Conversion', <BinaryEncoding ongetInfo={setCipherInfo} />],
    ['Affine Cipher', <AffineCipher ongetInfo={setCipherInfo} />],
    ['Cipher Ascii', <CipherAscii ongetInfo={setCipherInfo}/>],
    ['AMSCO Cipher',<AMSCO ongetInfo={setCipherInfo}/>],
    ['AutoKey Cipher',<AutoKey ongetInfo={setCipherInfo} />],
    ['Baconian Cipher',<BaconianCipher ongetInfo={setCipherInfo} />],
    ['Base64 Encoding',<Base64Encoding ongetInfo={setCipherInfo}/>],
    ['BCD Encoding',<BinaryEncodedDecimalN ongetInfo={setCipherInfo} />],
    ['Beaufort Cipher',<BeaufortCipher ongetInfo={setCipherInfo} />],
    ['Bellaso Cipher',<BellasoCipher ongetInfo={setCipherInfo} />],
    ['Bifid Cipher',<BifidCipher ongetInfo={setCipherInfo}/>],
    ['ADFGVX Cipher',<ADFGVX ongetInfo={setCipherInfo}/>],
    ['BinaryCode',<BinaryCode ongetInfo={setCipherInfo}/>],
    ['Checkerboard Cipher',<Checkerboard ongetInfo={setCipherInfo}/>],
    ['94 Cipher',<Cipher94 ongetInfo={setCipherInfo}/>],
    ['ChaoCipher',<ChaoCipher ongetInfo={setCipherInfo}/>],
    ['BookCipher',<BookCipher ongetInfo={setCipherInfo}/>],
    ['MasonicCipher',<Masonic ongetInfo={setCipherInfo}/>],
    ['Keyword Cipher', <KeywordCipher ongetInfo={setCipherInfo}/>], 
    ['NullCipher', <NullCipher ongetInfo={setCipherInfo}/> ],
    ['NihilistSubstitutionCipher', <NihilistSubstitutionCipher ongetInfo={setCipherInfo}/> ],
    ['Larrabee Cipher', <LarrabeeCipher ongetInfo={setCipherInfo}/>],
    ['Morse Cipher',<MorseCipher ongetInfo={setCipherInfo}/>],
    ['Julius Cipher',<JuliusCipher ongetInfo={setCipherInfo}/>],
    ['Imperial Cipher', <ImperialCipher ongetInfo={setCipherInfo}/>],
    ['HomphonicSubstitution Cipher', <HomphonicSubstitutionCipher ongetInfo={setCipherInfo}/> ],
    ['NihilistCipher', <NihilistCipher ongetInfo={setCipherInfo}/>],
    ['NicodemusCipher', <NicodemusCipher  ongetInfo={setCipherInfo}/> ]

  ]


  const defaultSelectedIndex = 0;
  const [current, setCurrent] = useState(defaultSelectedIndex);
  const [comp, setComp] = useState(items[defaultSelectedIndex][1]);
  const [title, setTitle] = useState(items[defaultSelectedIndex][0]);

  const onClick = (e) => {
    setCurrent(e.key);
    let k = Number(e.key);
    setComp(items[k][1]); setTitle(items[k][0]);
  };

  return (
    <>
   <Layout >
    <Header style={{textAlign: 'center',color: '#fff', fontSize: 16}}> EN | CRYPTO | DE  <Spin /> PlayGround </Header>
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items.map((ele, index) => ({ label: ele[0], key: index }))} />
    <Watermark content="ICY Labs">
      <Content style={{ padding: '50px'}}>
      <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
              <Title style={{ textAlign: 'center', margin: 0 }} underline level={1} type={lodash.sample(['danger', 'success', 'warning'])}>{title}</Title>
              <Popover 
                content={content}
                visible={visible}
                onVisibleChange={(v) => setVisible(v)}
              >
                <span 
                  onMouseEnter={toggleInfo}
                  onMouseLeave={hidePopover}
                >
                  <InfoCircleOutlined style={{ marginTop: '20px', marginLeft: '3px', height: '2em' }} />
                </span>
              </Popover>

            
            </div>
      {
        showInfo&& <p>{cipherInfo}</p>
      }
      
        <div>
          {comp}
        </div>
      </Content>
      
    </Watermark>
  </Layout>
  
    </>

  );
};

export default App;