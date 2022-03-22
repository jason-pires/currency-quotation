class Quotation {
    obj = ApiResponse;
    valor = 0.0;
    data = new Date();

    constructor(json) {
        this.obj = json;
        this.valor = parseFloat(this.obj.USDBRL.bid);
        this.data = new Date(this.obj.USDBRL.create_date);
    }
}

const ApiResponse = {
    USDBRL: {
        code: "",
        codein: "",
        name: "",
        high: "",
        low: "",
        varBid: "",
        pctChange: "",
        bid: "",
        ask: "",
        timestamp: "",
        create_date: ""
    }
}

const _URL = "http://economia.awesomeapi.com.br/json/last/USD-BRL";