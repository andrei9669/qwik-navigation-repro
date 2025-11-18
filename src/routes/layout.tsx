import {$, component$, Slot} from "@qwik.dev/core";
import {Link, useNavigate} from "@qwik.dev/router";
import styles from './index.module.css'
import {handlePreload} from "~/util/client-navigate";

export default component$(() => {
    const nav = useNavigate()

    const navigate = (path: string) => [
        $(() => {
            console.log("handlePreload:", path)
            return handlePreload(path);
        }),
        $(() => {
            console.log("nav:", path)
            return nav(path);
        })
    ]
    return (
        <>
            <nav class={styles.nav}>
                <div>
                    <Link href="/">Home</Link>
                    <Link href="/page-1" onClick$={(_, e) => console.log("onClick.href: ", e.href)}>Page-1</Link>
                    <Link href="/page-2" onClick$={(_, e) => console.log("onClick.href: ", e.href)}>Page-2</Link>
                    <Link href="/page-3" onClick$={(_, e) => console.log("onClick.href: ", e.href)}>Page-3</Link>
                    <Link href="/page-4" onClick$={(_, e) => console.log("onClick.href: ", e.href)}>Page-4</Link>
                    <Link href="/page-5" onClick$={(_, e) => console.log("onClick.href: ", e.href)}>Page-5</Link>
                </div>
                <div>
                    <button onClick$={navigate("/")}>home</button>
                    <button onClick$={navigate("/page-1")}>Page-1</button>
                    <button onClick$={navigate("/page-2")}>Page-2</button>
                    <button onClick$={navigate("/page-3")}>Page-3</button>
                    <button onClick$={navigate("/page-4")}>Page-4</button>
                    <button onClick$={navigate("/page-5")}>Page-5</button>
                </div>
            </nav>
            <Slot/>
        </>
    )
});