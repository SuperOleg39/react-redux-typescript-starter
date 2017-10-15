interface Props {
    world: string;
}
  
function hello(props: Props) {
    console.log(`Hello, ${props.world}`);
}

hello({ world: 'TypeScript!' });