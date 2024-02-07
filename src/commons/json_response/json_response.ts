export class JSONResponse {
    private readonly message: string;
    private readonly data: any;

    constructor(message: string, data: any) {
        this.message = message;
        this.data = data;
    }
}