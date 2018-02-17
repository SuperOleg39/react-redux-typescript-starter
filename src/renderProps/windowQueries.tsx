import * as React from 'react';

// React.ReactNode - самый полный тип возможных элементов для рендера.
interface IProps {
    children?: ((props: IRenderProps) => React.ReactNode);
    render?: ((props: IRenderProps) => React.ReactNode);
}

interface IState {
    width: number;
    height: number;
}

export interface IRenderProps {
    width?: number;
    height?: number;
}

/**
 * Создадим компонент для отслеживания изменений размера окна браузера.
 */
class WindowQueries extends React.Component<IProps, IState> {
    state: IState = {
        width: window.innerWidth,
        height: window.innerHeight,
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

    gerRenderProps = (): IRenderProps => {
        const { width, height } = this.state;
        return { width, height };
    }

    // Так как мы указали в интерфейсе свойств, что render и children
    // являются функциями, возвращаем их результат.
    // В реальном приложении не стоит пренебрегать проверками типов этих свойств.
    render() {
        const { children, render } = this.props;

        if (render) {
            return render(this.gerRenderProps())
        }

        if (children) {
            return children(this.gerRenderProps())
        }

        return null;
    }
}

export default WindowQueries;