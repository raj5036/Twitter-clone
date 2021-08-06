class ValidatorResponse {
    success;
    message;

    constructor(success, message) {
        this.message = message;
        this.success = success;
    }


    static error(message) {
        return new ValidatorResponse(false, message);
    }

    static success(message) {
        return new ValidatorResponse(true, message);
    }


}

export default ValidatorResponse;
