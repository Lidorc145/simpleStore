import {useDispatch, useSelector} from 'react-redux';
import {increment, selectCount,} from './counterSlice';
import store from "../app/store.jsx";


export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();


    const styles = {}
    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => {
                        console.log(store.getState());
                        return dispatch(increment())
                    }}
                >
                    +
                </button>

                <span className={styles.value}>{count}</span>
            </div>
        </div>
    );
}
