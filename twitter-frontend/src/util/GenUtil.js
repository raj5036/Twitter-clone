class GenUtil {
    static accessToken = '';
    static FCMToken = '';

    static getAccessToken() {
        return localStorage.getItem('token') || this.accessToken || '';
    }

    static setAccessToken(token) {
        localStorage.setItem('token', token);
        this.accessToken = token;
    }

    static removeAccessToken() {
        localStorage.removeItem('token');
        this.accessToken = '';
    }

    static getLoginHeaders = async () => {
        return {
            "Content-Type": "application/json",
        };
    };

    static getHeaders = async () => {
        return {
            "Content-Type": "application/json",
            Authorization: await this.getAccessToken()
        };
    };

    static getFormHeaders = async () => {
        return {
            "Content-Type": "multipart/form-data",
            // "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundarykwxaoj0oIR9kCiqN",
            Authorization: await this.getAccessToken()
        };
    };

    static async setFCMToken(FCMToken) {
        this.FCMToken = FCMToken;
        localStorage.setItem('FCMToken', FCMToken);
    };

    static async getFCMToken() {
        this.FCMToken = localStorage.getItem('FCMToken');
        return this.FCMToken
    };

    static async removeFCMToken() {
        localStorage.removeItem('FCMToken');
        this.FCMToken = 'b';
    };
}

export default GenUtil;
