function errorMessage(message, err) {
    if(err === undefined) {
        err = "error";
    }
    return `<div class="${err}">${message}</div>`;
}