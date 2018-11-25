
export class User {
    static count = 0;
    sign = '';
    constructor() {
        if (User.count === 0) {
            this.sign = 'O';
        } else if (User.count === 1) {
            this.sign = 'X';
        } else {
            console.log('Error');
        }
        User.count ++;
    }
}
