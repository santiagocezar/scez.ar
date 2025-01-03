<script lang="ts">
    interface Frontmatter {
        logosrc: string;
        logoalt: string;
        thumbsrc: string;
        thumbalt: string;
        href?: string;
        hreflabel?: string;
    }

    import assets from "$assets";

    console.log(assets);

    const projects = Object.entries(
        import.meta.glob<MarkdownFile<Frontmatter>>(
            "$lib/content/es/projects/*.md",
            {
                eager: true,
            },
        ),
    );

    projects.sort(([a], [b]) => a.localeCompare(b));

    console.log(projects);
</script>

<div class="projects">
    {#each projects as [_id, project]}
        <div class="card">
            <div class="content">
                <header>
                    <img
                        src={assets[project.attributes.logosrc]}
                        alt={project.attributes.logoalt}
                    />
                </header>
                <section>
                    {@html project.html ?? ""}
                    {#if project.attributes.href}
                        <p>
                            <a href={project.attributes.href}>
                                {project.attributes.hreflabel ?? "Abrir"}
                            </a>
                        </p>
                    {/if}
                </section>
            </div>
            <img
                class="capture"
                src={assets[project.attributes.thumbsrc]}
                alt={project.attributes.thumbalt}
            />
        </div>
    {/each}
</div>

<!--
<details class="">
    <summary>
        Otros
    </summary>
    hola
</details>
-->

<style>
    details {
        border: var(--pink3) solid 1px;
        box-shadow: 0.25rem 0.25rem var(--pink3);
        background-color: var(--pink1);
        border-radius: 1rem;
        color: var(--pink4);
        font-size: 1.25rem;
        overflow: hidden;
    }
    summary {
        border-radius: 1rem 1rem 0 0;
        background-color: white;
        border-bottom: 1px dashed var(--pink3);
        padding: 1rem 1rem 1rem 2.5rem;
        margin-bottom: -1px;
    }

    .projects {
        display: flex;
        grid-column: body-start / body-end;
        flex-direction: column;
        width: 100%;
        margin: 0 auto;
        padding: 0 2rem;
        gap: 2em;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .card {
        display: grid;
        grid-template:
            ".    .   logoimg .       .   .  " 1rem
            "desc .   .       .       .   .  " 2rem
            ".    .   .       .       .   .  " 2rem
            ".    .   .       .       .   img" auto
            ".    .   descact .       .   .  " 1rem
            ".    .   .       .       act .  " 1rem
            / 3fr 1fr 1rem 1.5fr 1rem auto;

        width: 100%;
    }
    .capture {
        grid-area: logoimg / logoimg / img / img;
        border: black solid 1px;
        box-shadow: 0.25rem 0.25rem black;
        border-radius: 1rem;
        object-fit: cover;
        object-position: top;
        height: 100%;
        width: auto;
        aspect-ratio: 1 / 1;
    }
    .content {
        grid-area: desc / desc / descact / descact;
        border: var(--blue3) solid 1px;
        box-shadow: 0.25rem 0.25rem var(--blue3);
        background-color: var(--blue1);
        border-radius: 1rem;
        color: var(--blue4);
        font-size: 1.25rem;

        & header {
            border-radius: 1rem 1rem 0 0;
            background-color: white;
            border-bottom: 1px dashed var(--blue3);
            padding: 1rem 1rem 1rem 2.5rem;

            img {
                width: auto;
                object-fit: contain;
                height: 3rem;
                max-width: 15rem;
            }
        }
        & section {
            padding: 1.5rem 2rem 1.5rem 2.5rem;
        }
    }

    @media screen and (max-width: 40rem) {
        .card {
            grid-template:
                "logoimg .       .       .  " 1rem
                ".       desc    img     .  " 6rem
                ".       .       .       .  " auto
                ".       .       descact .  " auto
                ".       .       .       act" 1rem
                / 1rem 40% 1fr 1rem;
        }
        .content {
            & header {
                border-radius: 1rem 1rem 0 0;
                background-color: white;
                border-bottom: 1px dashed var(--blue3);
                padding: 1rem 1rem 1rem 2.5rem;
                padding-left: 40%;

                & img {
                    width: auto;
                    object-fit: contain;
                    height: 3rem;
                    max-width: 10rem;
                }
            }

            & section {
                padding: 2.5rem 1.5rem 2.5rem 1.5rem;
            }
        }
    }
</style>
