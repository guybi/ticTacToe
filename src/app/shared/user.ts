
export class User {
    static count = 0;
    id: number;
    sign = '';
    active = false;
    constructor() {
        if (User.count === 0) {
            this.id = 0;
            this.sign = "X";
        } else if (User.count === 1) {
            this.id = 1;
            this.sign = "O";
        } else {
            console.log('Error');
        }
        User.count++;
    }
}
