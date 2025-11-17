import {$, component$, useTask$} from "@qwik.dev/core";

export default component$(() => {
    useTask$($(() => {
        console.log("page-2")
    }))
    return <div>Page-2</div>
});