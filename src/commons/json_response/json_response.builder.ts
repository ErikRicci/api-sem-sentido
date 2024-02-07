import { JSONResponse } from "./json_response";

export class JSONResponseBuilder {
    private message: string = 'Ok';
    private data: any = {};

    setMessage(message: string | string[]): JSONResponseBuilder {
        const composed_message = Array.isArray(message) ? message.join(', ') : message;

        this.message = composed_message;

        return this;
    }

    setData(data: any): JSONResponseBuilder {
        this.data = data;

        return this;
    }

    build(): JSONResponse {
        return new JSONResponse(this.message, this.data);
    }
}