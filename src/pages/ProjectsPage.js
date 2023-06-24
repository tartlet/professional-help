import TypeIt from "typeit-react";

function ProjectsPage () {
    return (
        <div className="font-mono">
            <div className="text-3xl pt-10 pl-6">
                <TypeIt
                // speed="10"
                // autoStart = "true"
                getBeforeInit={(instance) => {
                    instance
                    .type("Hello Stranger :3")
                    .pause(750)
                    .delete(18)
                    .pause(500)
                    .type("你好吗!")
                    .pause(750)
                    .delete(18)
                    .type("🐑.");

                    // Remember to return it!
                    return instance;
                }}
                options={{
                    lifeLike:true
                }}
                />
            </div>
            <div className="pl-10">
                <TypeIt
                    element={'p'}
                    // speed="10"
                    // autoStart = "true"
                    getBeforeInit={(instance2) => {
                        instance2
                        .type("A little bit about me..")
                        .pause(750)
                        .delete(18)
                        .pause(500)
                        .type("你好吗!")
                        .pause(750)
                        .delete(18)
                        .type("🐑.");

                        // Remember to return it!
                        return instance2;
                    }}
                    options={{
                        startDelay:10000,
                        lifeLike: true,
                        cursor: false
                    }}

                    />
            </div>
        </div>
    )
}

export default ProjectsPage;