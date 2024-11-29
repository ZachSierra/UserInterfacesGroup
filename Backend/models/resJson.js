class resJson{
    constructor(status, message, data){
        this.success = status;
        this.message = message;
        this.data = data;
    }
}
module.exports = resJson;