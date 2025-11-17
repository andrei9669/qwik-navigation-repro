import {$, component$, useTask$} from "@qwik.dev/core";

export default component$(() => {
    useTask$($(() => {
        console.log("page-3")
    }))
    return <div>Page-3</div>
});