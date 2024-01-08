function receivesAFunction(foobar) {
    foobar();
    return "Called your function for you!";
}

function returnsANamedFunction() {
    const functionToReturn = () => 4;
    return functionToReturn;
}

function returnsAnAnonymousFunction() {
    return (() => 6);
}