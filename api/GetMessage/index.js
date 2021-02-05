module.exports = async function (context, req) {
    context.res = {
        body: "Hello from the Azure Functions API"
    };
}