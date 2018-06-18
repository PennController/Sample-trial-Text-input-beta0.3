var shuffleSequence = seq("trial");
PennController.ResetPrefix(null);

var items = [
    ["trial", "PennController", PennController(
        newInput("alternative", "text")
            .settings.before("I thought the weather was warm, but it really is")
            .print()
        ,
        newButton("validation", "Click here to continue.")
            .print()
            .wait()
    )]
];