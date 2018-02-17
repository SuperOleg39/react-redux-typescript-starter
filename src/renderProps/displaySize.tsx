import * as React from 'react';
import { IRenderProps } from './windowQueries';

// Для удобства наследуем IRenderProps, но это не обязательно, так как компонент
// может ожидать всего одно свойство из этого интерфейса.
interface IProps extends IRenderProps {
    title: string;
}

const DisplaySize = ({ title, width, height }: IProps) => (
    <div>
        <h4>{title}</h4>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
    </div>
);

export default DisplaySize;