PennController.ResetPrefix(null);
PennController.DebugOff();
//Sequência de telas do experimento
Sequence ("inicial", "instr.treino", ("treino"), "instr.exp" , randomize("experimento"), SendResults(), "final");
newTrial("inicial",
//Define que todo o texto ser� impresso na tela e que o tamanho da fonte ser� "1.2em"
    defaultText
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>In this experiment you’ll hear some sentences and then you’ll judge how good/acceptable sound those sentences using a 5-point scale.</p>")
    ,
    newText("<p>Please, fill in your FULL NAME in the box below:</p>")
    ,
//Cria uma caixa de texto nomedada "Nome" para receber o nome do participante
    newTextInput("Nome")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Please, fill in your E-MAIL address in the box below:</p>")
    ,
    newTextInput("Email")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Fill in your AGE in the box below:</p>")
        .css("font-size","1.2em")
        .print()
    ,
    newTextInput("Idade")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Now, select your EDUCATIONAL LEVEL in the box below and press “Start”</p>")
        .css("font-size","1.2em")
        .print()
    ,
//Cria uma caixa com seletores nomeada "Escolaridade" para que o participante selecione sua escolaridade
    newDropDown("Escolaridade", "Select your educational level")
        .add("Undergraduate", "Graduate")
        .css("font-size","1.2em")
        .print()
        .log() //Envia para o arquivo "results" a op��o selecionada pelo participante 
    ,
//Cria um novo bot�o nomeado "Iniciar"
    newButton("Start")
        .css("font-size","1.2em")
        .print()
        .wait()
    ,
//Cria uma nova vari�vel chamada "ID" que recebe o conte�do da caixa de texto "Nome"
    newVar("ID")
        .global()
        .set( getTextInput("Nome") )
    ,
    newVar("EMAIL")
        .global()
        .set( getTextInput("Email") )
    ,
    newVar("AGE")
        .global()
        .set( getTextInput("Idade") )
    
)

//Envia para o arquivo "results" o conte�do da vari�vel "ID"
.log( "ID" , getVar("ID") )
.log( "EMAIL" , getVar("EMAIL") )
.log( "AGE" , getVar("AGE") )
 
//Nova tela - Tela de instru��es do treino
newTrial("instr.treino",
    defaultText
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Let’s practice a little bit before you start the test!</p>")
    ,
    newText("<p>Instructions:</p>")
    ,
    newText("<p>Step 1: You’ll listen to a sentence. This is the context sentence. As soon as the audio ends, click on the button NEXT.</p>")
    ,
    newText("<p>Step 2: You’ll listen to a second sentence. This sentence is related to the context sentence (previous audio). After listening to this sentence, click on the button NEXT to judge this sentence according to a 5-points scale. PAY ATTENTION!! You have to judge the second audio, not the first one.</p>")
    ,
    newText("<p>Step 3: You’ll see a five-point scale and now you’ll choose the best option according to what  you think about the sentence that you just heard:</p>")
    ,
    newImage("escala.instructions.png")
    .print()
    ,
    newText("<p>So, you’ll click on the best option for you! (If you are using a laptop or a desktop, you can press the buttons 1 to 5 to choose the best option)</p>")
    ,
    newText("<p>If possible, wear headphones to perform the experiment.</p>")
    ,
    newText("<p>Press “START” to go to the practice.</p>")
    ,
    //Cria um novo bot�o nomeado "Iniciar" e envia para o arquivo "results" a informa��o de quando ele � pressionado
    newButton("START")
        .css("font-size","1.2em")
        .print()
        .center()
        .log()
        .wait()
)
Template("treino.csv",variable=>
    newTrial("treino",
        newAudio("contexto.treino",variable.ContextoTreino)
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
    ,
          getImage("altofalante.png")
            .remove()
      ,
             getAudio("contexto.treino",variable.ContextoTreino)
             .wait("first")
             ,
            newAudio("frase.treino", variable.SentenceTreino)
             .play()
        ,
        newImage("altofalante2.png")
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
            ,
            getImage("altofalante2.png")
            .remove()
        
    ,
             getAudio("frase.treino",variable.SentenceTreino)
             .wait("first")
             ,
        newImage("escala.png")
        .print()
        .center()
        
    ,
    newText("Strongly Unacceptable")
    .css("font-size","1.4em")
        
    ,
    newText("Unacceptable")
    .css("font-size","1.4em")
        
,
   newText("Neutral")
        .css("font-size","1.4em")
,
    newText("Acceptable")
    .css("font-size","1.4em")
        
,
     newText("Strongly Acceptable")
     .css("font-size","1.4em")
        

,
newCanvas( 1400 , 700 )
            .add(   250 , 0 , getText("Strongly Unacceptable") )
            .add( 500 , 0 , getText("Unacceptable") )
            .add(   680 , 0 , getText("Neutral") )
            .add( 830 , 0 , getText("Acceptable") )
            .add(   990 , 0 , getText("Strongly Acceptable") )
            .print()
            ,
        newSelector()
            .add( getText("Strongly Unacceptable") , getText("Unacceptable"), getText("Neutral"), getText("Acceptable"), getText("Strongly Acceptable") )
            .keys("1","2","3","4","5")
            .log()
            .wait()
)

    .log("Condition", variable.Condition)
    .log("Group", variable.Group) 
    .log("Type", variable.Type)
)
//Nova Tela - Tela de instruções do experimento
newTrial("instr.exp",
    defaultText
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Now that you've practiced, let's start the experiment!</p>")
    ,
    newText("<p>The task will take around 15 minutes. Make sure you are in a quiet place so that there are no interruptions.</p>")
    ,
    newText("<p>Click START when you are ready to start the experiment.</p>")
    ,
    newButton("START")
        .css("font-size","1.2em")
        .print()
        .center()
        .log()
        .wait()
    )
Template("tabela.csv", variable=>    
    newTrial("experimento",
        newAudio("contexto.exp", variable.AudioContext)
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
                ,

getImage("altofalante.png")
            .remove()
            ,
             getAudio("contexto.exp",variable.AudioContext)
             .wait("first")
             ,
        newAudio("frase.experimento", variable.AudioSentence)
             .play()
        ,
        newImage("altofalante2.png")
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
            ,
            getImage("altofalante2.png")
            .remove()
        ,
        getAudio("contexto.exp",variable.AudioContext)
             .wait("first")
             ,
        newImage("escala.png")
        .print()
        .center()
        
    ,
    newText("Strongly Unacceptable")
    .css("font-size","1.4em")
        
    ,
    newText("Unacceptable")
    .css("font-size","1.4em")
        
,
   newText("Neutral")
        .css("font-size","1.4em")
,
    newText("Acceptable")
    .css("font-size","1.4em")
        
,
     newText("Strongly Acceptable")
     .css("font-size","1.4em")
        

,
newCanvas( 1400 , 700 )
            .add(   250 , 0 , getText("Strongly Unacceptable") )
            .add( 500 , 0 , getText("Unacceptable") )
            .add(   680 , 0 , getText("Neutral") )
            .add( 830 , 0 , getText("Acceptable") )
            .add(   990 , 0 , getText("Strongly Acceptable") )
            .print()
            ,
        newSelector()
            .add( getText("Strongly Unacceptable") , getText("Unacceptable"), getText("Neutral"), getText("Acceptable"), getText("Strongly Acceptable") )
            .keys("1","2","3","4","5")
            .log()
            .wait()
)

    .log("Item", variable.Item)
    .log("Condition", variable.Condition)
    .log("Group", variable.Group) 
    .log("Type", variable.Type)
    )
    
//Nova Tela - Tela final    
newTrial("final",
    newText("<p> The experiment was concluded! Thanks for participating!</p>")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p> You'll will receive your certificate of participation by e-mail </p>")
        .css("font-size","1.2em")
        .print()
        .wait()
 )
//Ajeita a barra de pogresso para que ela fique completa
.setOption("countsForProgressBar",false);
//Fim do Script
