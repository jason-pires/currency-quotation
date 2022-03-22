$(document).ready(function () {
    getDollarQuotation(500, "#span1");
    getDollarQuotation(400, "#span2");
    getDollarQuotation(300, "#span3");
});

function getDollarQuotation(amountBRL, selector) {
    var amount = parseFloat(amountBRL);
    var _url = _URL;
    ajaxCall(_url, function (jSon) {
        var quotation = new Quotation(jSon);
        var calculated = parseFloat(amount / quotation.valor)
        var final = decimals(calculated);
        $(selector).text(final);
    },
    function (errorMessage) {
        $(selector).html(errorMessage);
    })
}

function ajaxCall(url, successFn, errFn) {
    $.ajax({
        dataType: "json",
        url: url,
        success: successFn,
        error: function (err) {
            console.log(err);
            errFn(" - ");
        }
    });
}

function decimals(floatNum) {
    return Math.round(floatNum * 100) / 100
}