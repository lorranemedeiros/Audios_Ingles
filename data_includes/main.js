PennController.ResetPrefix(null);
PennController.DebugOff();
newTrial( 
       newButton("Start")
        .css("font-size","1.2em")
        .print()
        .center()
        .log()
        .wait()
    )
 newTrial(
        newAudio("contexto1.wav")
             .play()
        ,
        newImage("altofalante.png")
            .size( 90 , 90 )
            .print()
       ,
        newButton("Next")
            .css("font-size","1.2em")
            .print()
            .center()
            .log()
            .wait()
            .remove()
                )
newTrial(
        newAudio("Exp1-CONDA.wav")
             .play()
        ,
        newImage("altofalante.png")
            .size( 90 , 90 )
            .print()
       
        ,
        newButton("Next")
            .css("font-size","1.2em")
            .print()
            .center()
            .log()
            .wait()
            .remove()
        
        )
newTrial(
        newImage("escala.png")
        .print()
    ,
    newText("1. Strongly Unacceptable")
        .print()
    ,
    newText("2. Unacceptable")
        .print()
,
   newText("3. Neutral")
        .print()
,
    newText("4. Acceptable")
        .print()
,
     newText("5. Strongly Acceptable")
        .print()

,
        newSelector()
            .add( getText("1.Strongly Unacceptable") , getText("2. Unacceptable"), getText("3. Neutral"), getText("4. Acceptable"), getText("5. Strongly Acceptable") )
            .keys("1","2","3","4","5")
            .log()
            .wait()
)
    .log("Item", variable.Item)
    .log("Condition", variable.Condition)
    .log("Group", variable.Group) 
    .log("Type", variable.Type)
;

