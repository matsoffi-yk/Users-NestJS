export class Users {
    id: number;
    name: string;
    surname: string;
    nickname: string;
    age: number;
    phoneNumber: string;
    line: string;
    email: string;
    address: {
        houseNo: string;
        village: string;
        subDistrict: string;
        district: string;
        province: string;
        postalCode: string;
    }
}