import {component$, useTask$} from "@qwik.dev/core";

export default component$(() => {
    console.log("render: page-2")

    useTask$(() => {
        console.log("useTask: page-2")
    })
    return <h1>Page-2</h1>
});