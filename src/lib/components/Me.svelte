<script lang="ts">
    import * as aboutMe from "$lib/content/es/me.md";
</script>

<div class="wrapper">
    <img src="/img/bg.webp" alt="Foto de una pantalla con código HTML." />
    <section>
        {@html aboutMe.html}
    </section>
</div>

<style>
    .wrapper {
        display: grid;
        margin: 0 auto;
        max-width: 60rem;
        font-size: 1.1rem;
        grid-template:
            ". i1 ." 1fr
            "t t i2" 4fr
            "t t ." 1fr
            / 2fr 2fr 2fr;
    }
    section {
        grid-area: t;
        border: var(--blue3) solid 1px;
        box-shadow: 0.25rem 0.25rem var(--blue3);
        background-color: var(--blue1);
        color: var(--black);
        padding: 1em;
        line-height: 1.4;
        border-radius: 1em;
        height: fit-content;
        min-height: fit-content;
    }
    img {
        grid-area: i1 / i1 / i2 / i2;
        border: black solid 1px;
        box-shadow: 0.25rem 0.25rem black;
        border-radius: 1em;
        overflow: hidden;
        object-position: center;
        object-fit: cover;
        width: 100%;
        height: 0;
        min-height: 100%;
    }
    @media screen and (max-width: 40rem) {
        .wrapper {
            grid-template-rows: 0.5fr 2fr 1fr;
            grid-template-columns: 1fr 6fr 1fr;
        }
    }
</style>
