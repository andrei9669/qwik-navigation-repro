import {$, component$, Slot} from "@qwik.dev/core";
import {Link, useNavigate} from "@qwik.dev/router";
import styles from './index.module.css'
import {handlePreload} from "~/util/client-navigate";

export default component$(() => {
    const nav = useNavigate()

    const navigate = (path: string) => [
        $(() => handlePreload(path)),
        $(() => nav(path))
    ]
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
                    <button onClick$={navigate("/")}>home</button>
                    <button onClick$={navigate("/page-1")}>Page-1</button>
                    <button onClick$={navigate("/page-2")}>Page-2</button>
                    <button onClick$={navigate("/page-3")}>Page-3</button>
                </div>
            </nav>
            <Slot/>
        </>
    )
});