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
            console.log("button.onClick.nav:", path)
            return nav(path);
        })
    ]

    const onLinkClick = $((_: unknown, e: HTMLAnchorElement) => {
        console.log("link.onClick.href: ", e.href)
    });
    return (
        <>
            <nav class={styles.nav}>
                <div>
                    <Link href="/">Home</Link>
                    <Link href="/page-1" onClick$={onLinkClick}>Page-1</Link>
                    <Link href="/page-2" onClick$={onLinkClick}>Page-2</Link>
                    <Link href="/page-3" onClick$={onLinkClick}>Page-3</Link>
                    <Link href="/page-4" onClick$={onLinkClick}>Page-4</Link>
                    <Link href="/page-5" onClick$={onLinkClick}>Page-5</Link>
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