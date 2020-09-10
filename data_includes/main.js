PennController.ResetPrefix(null);
PennController.DebugOff();
newTrial("welcome",
//Define que todo o texto será impresso na tela e que o tamanho da fonte será "1.2em"
    defaultText
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Bem-vindos!</p>")
    ,
    newText("<p>Neste experimento, você vai ouvir uma frase e depois deve escolher a melhor op&ccedil;&atilde;o de interpreta&ccedil;&atilde;o para ela.</p>")
    ,
    newText("<p>Por favor, escreva seu NOME COMPLETO na caixa abaixo.</p>")
    ,
//Cria uma caixa de texto nomedada "Nome" para receber o nome do participante
    newTextInput("Nome")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Por favor, escreva seu E-MAIL na caixa abaixo.</p>")
    ,
    newTextInput("Email")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Escreva sua IDADE na caixa abaixo.</p>")
        .css("font-size","1.2em")
        .print()
    ,
    newTextInput("Idade")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Agora selecione sua ESCOLARIDADE na caixa abaixo e aperte &quot;Iniciar&quot; para come&ccedil;ar!</p>")
        .css("font-size","1.2em")
        .print()
    ,
//Cria uma caixa com seletores nomeada "Escolaridade" para que o participante selecione sua escolaridade
    newDropDown("Escolaridade", "Selecione sua escolaridade")
        .add("M&eacute;dio completo", "Superior em curso", "Superior completo", "P&oacute;s-gradua&ccedil;&atilde;o")
        .css("font-size","1.2em")
        .print()
        .log() //Envia para o arquivo "results" a opção selecionada pelo participante 
    ,
//Cria um novo botão nomeado "Iniciar"
    newButton("Iniciar")
        .css("font-size","1.2em")
        .print()
        .wait()
    ,
//Cria uma nova variável chamada "ID" que recebe o conteúdo da caixa de texto "Nome"
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

//Envia para o arquivo "results" o conteúdo da variável "ID"
.log( "ID" , getVar("ID") )
.log( "EMAIL" , getVar("EMAIL") )
.log( "AGE" , getVar("AGE") )
 
//Nova tela - Tela de instruções do treino
newTrial("tela2",
    defaultText
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Vamos realizar um pequeno treino para voc&ecirc; se familiarizar com o experimento.</p>")
    ,
    newText("<p>INSTRU&Ccedil;&Otilde;ES:</p>")
    ,
    newText("<p>Ou&ccedil;a a frase com aten&ccedil;&atilde;o e depois clique no bot&atilde;o &quot;Pr&oacute;ximo&quot; para ver as duas op&ccedil;&otilde;es de interpreta&ccedil;&atilde;o: <strong>A</strong> e <strong>B</strong>.</p>")
    ,
    newText("<p>Clique em cima da op&ccedil;&atilde;o que voc&ecirc; acha que &eacute; a melhor, de acordo com a frase que voc&ecirc; ouviu.</p>")
    ,
    newText("<p>Se poss&iacute;vel, utilize fones de ouvido para realizar o experimento.</p>")
    ,
    newText("<p>Aperte &quot;Iniciar&quot; para come&ccedil;ar.</p>")
    ,
    //Cria um novo botão nomeado "Iniciar" e envia para o arquivo "results" a informação de quando ele é pressionado
    newButton("Iniciar")
        .css("font-size","1.2em")
        .print()
        .center()
        .log()
        .wait()
);

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
                );
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
        
        );
newTrial(
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
;
