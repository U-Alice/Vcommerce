import {Document} from 'mongoose'
interface Address{
    addr1: string;
    addr2: string; 
    city: string;
    state: string; 
    country: string; 
    zip: number
}
export interface User {
    name : string;
    password: string
    seller: boolean;
    address: Address
}