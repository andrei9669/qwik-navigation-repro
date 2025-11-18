import {component$, useTask$} from "@qwik.dev/core";

export default component$(() => {
    console.log("render: page-1")

    useTask$(() => {
        console.log("useTask: page-1")
    })
    return <h1>Page-1</h1>
});