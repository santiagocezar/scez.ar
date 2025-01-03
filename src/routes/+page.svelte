<script lang="ts">
    import Me from "$lib/components/Me.svelte";
    import Projects from "$lib/components/Projects.svelte";
</script>

<div class="wrapper">
    <!--     <Sidebar /> -->

    <main>
        <h2 id="me">Sobre mí</h2>
        <Me />
        <h2 id="proy">Proyectos</h2>
        <Projects />
        <h2 id="tech">Tecnologías</h2>
        <!--         <Tech /> -->
    </main>
</div>

<style>
    .wrapper {
        display: grid;
        grid-template:
            "sidebar content"
            / auto 1fr;

        place-items: stretch;
    }

    main {
        --content-width: 60rem;
        --cols: 12;
        --col-w: calc(var(--content-width) / var(--cols));
        --pad-x: 3rem;

        display: grid;
        grid-template-columns:
            [body-start] minmax(var(--pad-x), 1fr)
            repeat(12, [col-start] minmax(auto, var(--col-w)) [col-end])
            minmax(var(--pad-x), 1fr) [body-end];

        & > :global(*) {
            grid-column: col-start 1 / col-end -1;
        }

        grid-row-start: 1;
        grid-area: content;

        box-sizing: border-box;
        width: 100%;

        margin: 0 auto;
        gap: 2rem 0;
        padding: 2rem 0 4rem 0;
    }

    @media screen and (max-width: 40rem) {
        main {
            padding: 1.25rem 0 1.25rem 0;
        }
    }

    h2 {
        font-family: var(--title-font);
        font-size: 2em;
        font-weight: 700;
        border-bottom: 1px dashed var(--blue3);
        width: 100%;
        margin: 0 auto;
        max-width: 70rem;
    }

    @media screen and (max-width: 60rem) {
        .wrapper {
            grid-template:
                "sidebar" auto
                "content" auto
                / 1fr;
        }
        main {
            --pad-x: 2rem;
        }
    }
</style>
