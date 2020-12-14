$( document ).ready(function() {
    $(document).on("click","#welcome",function() {
        $(".title").html(newcomersArray[0].title);
        $(".titletext").html(newcomersArray[0].paragraph);
    });
    $(document).on("click","#ourfaith",function() {
        $(".title").html(newcomersArray[1].title);
        $(".titletext").html(newcomersArray[1].paragraph);
    });
    $(document).on("click","#learnmore",function() {
        $(".title").html(newcomersArray[2].title);
        $(".titletext").html(newcomersArray[2].paragraph);
    });
    $(document).on("click","#becomingcatholic",function() {
        $(".title").html(newcomersArray[3].title);
        $(".titletext").html(newcomersArray[3].paragraph);
    });
    $(document).on("click","#returningcatholic",function() {
        $(".title").html(newcomersArray[4].title);
        $(".titletext").html(newcomersArray[4].paragraph);
    });
});




let newcomersArray = [
    {
        title: "Welcome",
        paragraph: "Thank you for your interest in our parish. Whether you are just visiting us for a brief time, looking for a new parish home, are returning to the practice of your Catholic faith or are interested in finding out more about the Catholic Church, we are happy to have you here. A parish is a community of believers and a spiritual family that is supportive and loving. It can be a place to grow spiritually, to put your faith in action, and to use our gifts of time and talent as disciples of Christ. We look forward to answering any questions you may have. In the meantime, please look through the resources we have made available on these next few tabs"
    },
    {
        title: "Our Faith",
        paragraph: "I believe in God, the Father Almighty, Creator of Heaven and earth; and in Jesus Christ, His only Son Our Lord, Who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried. He descended into Hell; the third day He rose again from the dead; He ascended into Heaven, and sitteth at the right hand of God, the Father almighty; from thence He shall come to judge the living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body and life everlasting. Amen."
    },
    {
        title: "Learn More",
        paragraph: "Catholic Cathechism:  <a href='https://www.vatican.va/archive/ENG0015/_INDEX.HTM'>Catechism of the Catholic Church.</a>",
    },
    {
        title: "Becoming Catholic",
        paragraph: "How do I become Catholic?<br> We're glad you ask.<br/> Here is a detailed article explaining the process in joining our great and wonderful faith: <a href='https://www.catholic.com/tract/how-to-become-a-catholic'>How to become Catholic</a>"
    },
    {
        title: "Returning Catholic",
        paragraph: "How do I come back home to the Catholic church? What a truely beautiful and blessed question, down below is a link to an organization that helps our brothers and sisters be reintroduced into the flock <br/> <a href='https://www.catholicscomehome.org/experience-love-acceptance/'>Catholics Come Home</a>"
    }
]

