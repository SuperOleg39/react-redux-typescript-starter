type message = string;

abstract class Logger {
    abstract log(message: message): void;
}

class ErrorLogger extends Logger {
    public log(message: message) {
        console.error(message);
    }
}

interface Params {
    hello: string;
    world: string;
}

function helloWorld(params: Params) {
    const logger = new ErrorLogger();
    console.log(`${params.hello}, ${params.world}!`);
}

helloWorld({ hello: 'Hello', world: 'Typescript' });