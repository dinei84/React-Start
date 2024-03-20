import Frase1 from "./Frase1"
import styles from './HelloWorld.module.css'

function HelloWorld(){
    return (
        <div className={styles.HelloWorldContainer}>            
            <h1 className={styles.HelloWorldContent}>Meu primeiro componente</h1>
            <Frase1/>
            <Frase1/>
        </div>
    )
}

export default HelloWorld