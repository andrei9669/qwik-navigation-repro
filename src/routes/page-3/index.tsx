import {component$, useTask$} from "@qwik.dev/core";

export default component$(() => {
    console.log("render: page-3")

    useTask$(() => {
        console.log("useTask: page-3")
    })
    return <h1>Page-3</h1>
});