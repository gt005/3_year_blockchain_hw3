import 'dotenv/config';
import contractABI from './contractABI.json' assert { type: 'json' };

import Web3 from 'web3';

const web3 = new Web3(`wss://polygon-mumbai.infura.io/ws/v3/${process.env.INFURA_API_KEY}`);

const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(contractABI, contractAddress);

export default contract;
