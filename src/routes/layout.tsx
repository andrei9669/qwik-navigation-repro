import {component$, Slot} from "@builder.io/qwik";
import {Link, useNavigate} from "@builder.io/qwik-city";
import styles from './index.module.css'

export default component$(() => {
    const nav = useNavigate()
    return (
        <>
            <nav class={styles.nav}>
                <div>
                    <Link href="/">Home</Link>
                    <Link href="/page-1">Page-1</Link>
                    <Link href="/page-2">Page-2</Link>
                    <Link href="/page-3">Page-3</Link>
                </div>
                <div>
                    <button onClick$={() => nav("/")}>home</button>
                    <button onClick$={() => nav("/page-1")}>Page-1</button>
                    <button onClick$={() => nav("/page-2")}>Page-2</button>
                    <button onClick$={() => nav("/page-3")}>Page-3</button>
                </div>
            </nav>
            <Slot/>
        </>
    )
});