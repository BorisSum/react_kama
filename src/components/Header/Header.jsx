import styles from './Header.module.css';


const Header = () => {
    return (
        <header className={styles.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtaw_9DIa0aWLD3hyc3hmih0qx2kpt727msuSsFaUARkA7gWLarRniJUxhVEUWJbc8R8&usqp=CAU'
                alt='logo'/>
        </header>
    )
}

export default Header;