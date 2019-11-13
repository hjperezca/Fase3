//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=2; attempts=0; attemptsMax=2;
var score=0; scoreMax=2; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien acertastes"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkMQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Es GitHub una forja (plataforma de desarrollo colaborativo) para alojar proyectos utilizando el sistema de control de versiones Git.?","¿Que contiene una estructura básica de una página Web en HTML5?"];
var answers1=["MVNp","ME5v"];
var answers2=["MWhlYWRlciwgbmF2LCBzZWN0aW9uLCBhc2lkZSwgZm9vdGVy","MGhlYWRlciwgZGl2LCBzZWN0aW9uLCBhc2lkZSwgZm9vdGVy","MGhlYWRlciwgbmF2LCBoMSwgYXNpZGUsIGZvb3Rlcg","MGhlYWRlciwgbmF2LCBwLCBhc2lkZSwgZm9vdGVy","MGhlYWRlciwgbmF2LCBzZWN0aW9uLCBhc2lkZSwgYXJ0aWNsZQ"];
var ans=[answers1,answers2];
var err=["Intentalo nuevamente","Estudia un poco mas"];
var ima=["",""];
var mp4=["",""];
var ogv=["",""];
var indexTag=0; actualAnswers=[]; dirMedia="actividad1_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
