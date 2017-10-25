import * as React from 'react';
import { connect, Dispatch, DispatchProp } from 'react-redux';
import { IStore } from '../store';
import { set, focus, blur } from '../redux/field';
/**
 * Наследование от DispatchProp указывает, что метод dispatch ожидается 
 * в свойствах компонента. Это свойство добавляет connect, вызванный с одним 
 * аргументом (без mapDispatchToProps) 
 */
interface FieldProps extends DispatchProp<IStore>, React.HTMLProps<HTMLInputElement> {
    value?: string;
}

class Field extends React.Component<FieldProps, {}> {
    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { dispatch } = this.props;
        const value = event.currentTarget.value;
        /**
         * Любой неверный аргумент в set или dispatch будет 
         * безжалостно подсвечен красненьким.
         */
        dispatch(set(value));
    }

    handleFocus = () => {
        const { dispatch } = this.props;
        dispatch(focus());
    }

    handleBlur = () => {
        const { dispatch } = this.props;
        dispatch(blur());
    }

    render() {
        const {
            value,
            dispatch,
            ...inputProps
        } = this.props;

        return (
            <input
                {...inputProps}
                type="text"
                value={value}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
            />
        );
    }
}

/**
 * Стандартная сигнатура mapStateToProps, и благодаря (в очередной раз) 
 * интерфейсам мы пользуемся автоподбором всех свойств аргументов
 */
const mapStateToProps = (state: IStore, ownProps: FieldProps) => ({
    value: state.field.value
});

/**
 * Сигнатура mapDispatchToProps:
 * (dispatch: Dispatch<IStore>, ownProps: FieldProps) => ({ ... })
 */

 /**
  * connect имеет сложную сигнатура, точнее более 10 сигнатур на 
  * все случаи жизни.
  * По хорошему, нужно создавать 3 интерфейса:
  * результат mapStateToProps, результат mapDispatchToProps, и 
  * собственные свойства компонента.
  * На практике, достаточно указать дженерику два первых пустых объекта, 
  * и в третий аргумент отправить единый интерфейс свойств компонента.
  */
export default connect<{}, {}, FieldProps>(mapStateToProps)(Field);