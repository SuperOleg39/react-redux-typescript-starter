interface AppProps {
    a: string;
}

class App {
    a: string;
    
    constructor(props: AppProps) {
        this.a = props.a;
        console.log('App is created!');
    }
}

new App({ a: 'foo' });

async function loadModule() {
    try {
        const lazy = await import('./module');
        const Module = lazy.Module;
        new Module('bar');
    } catch (e) {
        console.log('Error');
    }
}

loadModule();