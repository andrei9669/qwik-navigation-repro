import {$, component$, useTask$} from "@qwik.dev/core";

export default component$(() => {
    useTask$($(() => {
        console.log("page-1")
    }))
    return <div>Page-1</div>
});