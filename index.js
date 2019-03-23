alert("You can ask questions like\n* How to manage courses?\n* How to advertive a code?\n* What are XPs?\nAsk questions only about SoloLearn");
var Ques = [
    /hello|hi|hy|howareyou/i,
    /whoareyou|whatareyou/i,
    /WhatIsSololearn/i,
    /WhatCourses|WhichCourses|WhatCourse|whatarecourses|whataredisciplines|whatprogramminglanguages/i,
    /cost|purchase|fee|free/i,
    /peers|peer|friend|friends/i,
    /whatIsCodePlayground|WhatIsPlayground|playground/i,
    /whatIsForum|useforum|Howtoaskquestion|askquestion|forum/i,
    /yourname|urname/i,
    /createdyou|yourcreator|yourdeveloper/i,
    /youarewritten|inwhichlanguageyouarewritten/i,
    /favourite|favorite|like/i,
    /ceo|createdsololearn|founderofsololearn/i,
    /createcode|newcode/i,
    /advertising|advertisement|advertise/i,
    /xp|xps/i,
    /challenge|challenges/i,
    /expired|expire/i,
    /managecourses|manage|add|remove/i,
    /limit/i,
    /public|private/i,
    /logout|signout|sign|log/i,
    /message|chat/i,
    /post|images/i,
    /lessonfactory|quizfactory/i,
    /recommendation|recommend|recommendations/i,
    /youdo|yourtask|yourpurpose|helpme/i,
    /badges|badge/i
];

$(function(){

    $(".send-btn").on("click",function(){
// Variables to set value when send button is clicked.
    var userAsked = document.querySelector(".user-sent").value,
    showUser = userAsked,
    userAsked = userAsked.toLowerCase().split(" ").join("");
    $("<p class='user-container'>"+showUser+"</p>").appendTo(".main-container"),
     reply = function(message){
          $("<p class='bot-container'>"+message+"</p>").appendTo(".main-container");
    };
    $(".user-sent").val(""); //Clears input box
    /*
            Reply for each question stored in 'Ques' array corresponding to the elements of array.
    */
    if(Ques[0].test(userAsked)){
          reply("Hello. Hope you are fine");
    }else if(Ques[1].test(userAsked)){
        reply("I'm SoloBot. I'm here to help you!");
    }else if(Ques[2].test(userAsked)){
        reply("SoloLearn is an online and mobile learning platform that offers free coding classes in 13 different programming disciplines. SoloLearn apps are available on Android, iOS, and web.");
    }else if(Ques[3].test(userAsked)){
        reply("SoloLearn provides courses on programming languages like C++, Java, C# and Swift. Web Development like HTML, CSS, Javascript and PHP with popular frameworks like Angular and Bootstrap etc are also offered.");
    }else if(Ques[4].test(userAsked)){
        reply("These courses are free of cost!");
    }else if(Ques[5].test(userAsked)){
        reply("You can learn with peers and friends, follow them and you can also message them personally.");
    }else if(Ques[6].test(userAsked)){
        reply("Code Playground is created for you to share your codes with others. You can see trending and popular codes as well in code playground.");
    }else if(Ques[7].test(userAsked)){
        reply("You can ask a question using SoloLearn Forum. To ask questions:<br>1: Go to Forum tab.<br>2: Click '+' button  to create a new question.<br>3: Add required information and submit the question.");
        reply("Always search a question before asking it on forum.")
    }else if(Ques[8].test(userAsked)){
        reply("I'm robot, I don't have any name.")
    }else if(Ques[9].test(userAsked)){
        reply("My creator is Muhammad Wasif")
    }else if(Ques[10].test(userAsked)){
        reply("I'm written in Javascript.");
    }else if(Ques[11].test(userAsked)){
        reply("I am not human so nothing is my favourite.");
        
    }else if(Ques[12].test(userAsked)){
        reply("SoloLearn is created by Yeva Hyusyan and she is CEO of SoloLearn");
    }else if(Ques[13].test(userAsked)){
        reply("You can create new codes and share with others.");
        reply("To create a new code:<br>1: Go to code playground.<br>2: Touch '+' button.<br>3: Choose language.<br>4: Write code in compiler<br>5: Click save and you are done!");
        reply("Post you codes here to advertise them:<br>1: <a href='https://www.sololearn.com/Discuss/452626/?ref=app'>Code Advertising</a><br>2: <a href='https://www.sololearn.com/Discuss/637386/?ref=app' >Advertising</a>")
    }else if(Ques[14].test(userAsked)){
        reply("You can advertise your codes in some post so that other may know of what you've created.");
        reply("Post you codes here to advertise them:<br>1: <a href='https://www.sololearn.com/Discuss/452626/?ref=app'>Code Advertising</a><br>2: <a href='https://www.sololearn.com/Discuss/637386/?ref=app' >Advertising</a>");
    }else if(Ques[15].test(userAsked)){
        reply("XP stands for eXperience Points. You earn XP by participating in activities and improving your coding skills. These activities include completing a lesson/course, playing challenges, unlocking badges, and so on.");
    }else if(Ques[16].test(userAsked)){
        reply("You can challenge peers in almost all languages. Challenges will help you gain XPs.");
        reply("To play a challenge: <br>1: Go to Challenge tab<br>2: Touch + button<br>3: Choose your weapon<br>4: Select peer or a random person<br>5: Here we go!")
    }else if(Ques[17].test(userAsked)){
        reply("If opponent don't play challenge, it will expire in 24 hours.");
    }else if(Ques[18].test(userAsked)){
        reply("You can manage courses in app easily.<br>Click manage button above 'My Courses' to add or remove a course.<br><img src='https://dl-web.dropbox.com/s/pn7vxn2jyfx7cc9/IMG_20181204_182748.jpg?dl=0'/>");
    }else if(Ques[19].test(userAsked)){
        reply("15 matches against 1 person in a 24 hour period <br>You can however play against 50 to say 500 people in a day and 15 matches per person.");
    }else if(Ques[20].test(userAsked)){
        reply("You can public/private your code by touching on public/private button on the top code menu.<br><img src = 'https://dl-web.dropbox.com/s/23purbhj6k7e5as/IMG_20181204_185406.jpg?dl=0'/>");
    }else if(Ques[21].test(userAsked)){
            reply("You can logout from SoloLearn app by touching on option button on top right corner of app.");
            reply("1: Click on option button on top right corner.<br><img src='https://dl-web.dropbox.com/s/pdm1fhi02mwf0p3/IMG_20181204_194248.jpg?dl=0' /><br>2: Go to Settings. <br>3: At the end of list, click 'Sign Out'");
    }else if(Ques[22].test(userAsked)){
        reply("You can send messages to a peer personally.");
        reply("1: Open the person's profile.<br>2: Follow him/her<br>3: Message button will appear instead of follow button.<br><img src='https://dl-web.dropbox.com/s/oqcizt44lanvxty/IMG_20181204_195939.jpg?dl=0'/><br>4: Click on the button and start chatting!");
    }else if(Ques[23].test(userAsked)){
        reply("You can create a neq post in <b>Activity Feed</b>. ");
        reply("At homepage, click on the text under your username to create new post. Add image or right text and click <b>Post</b>")
    }else if(Ques[24].test(userAsked)){
        reply("You can create new lessons to share knowledge and new quiz also. Approved quizzes will be added in challenges.");
        reply("To create a quiz or lesson, go to quiz or lesson factory respectively. Create your content and submit.");
    }else if(Ques[25].test(userAsked)){
        reply("If you are a beginner you should try Web languages. You should learn Ruby or C language");
    }else if(Ques[26].test(userAsked)){
        reply("I am here to help you figure out SoloLearn App. You can ask me anything about SoloLearn");
    }else if(Ques[27].test(userAsked)){
        reply("Badges are awarded to eligible users. Badges help you gain XPs. Each badge has its own XP value.<br> To know more about badges check this <a href='https://code.sololearn.com/WdNJUx3lFKMZ/?ref=app'>code</a>.");
    }else{
        var rand = Math.random();
        if(rand < 0.5){
            reply("Sorry, I don't know");
        }else{
            reply("I'm not allowed to answer this.");
        }
    }
    });

});