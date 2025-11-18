import {component$, useTask$} from "@qwik.dev/core";
import {useLocation} from "@qwik.dev/router";

export default component$(() => {
    const loc = useLocation();
    console.log("render:", loc.params.page)
    useTask$(({track}) => {
        track(() => loc.params.page)
        console.log("useTask",loc.params.page)
    })
    return <h1>{loc.params.page}</h1>
});