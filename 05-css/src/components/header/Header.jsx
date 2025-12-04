import styles from '../header/Header.module.css'

function header(){
    return (
        <div className={styles.header}>
            <h3>Header Navigation</h3>
            <button className={styles.btn}>Login</button>
        </div>
    )
}

export default header