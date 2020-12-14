$( document ).ready(function() {
    $(document).on("click","#onlinemass",function() {
        $("#masstext").html(frontpageoptionspages[0].title);
        $("#massmedium").html(frontpageoptionspages[0].body);
    });
    $(document).on("click","#spiritualresources",function() {
        $("#spiritualtext").html(frontpageoptionspages[1].title);
        $("#spiritualmedium").html(frontpageoptionspages[1].body);
    });
    $(document).on("click","#ourbookstore",function() {
        $("#ourbookstoretext").html(frontpageoptionspages[2].title);
        $("#ourbookstoremedium").html(frontpageoptionspages[2].body);
    });
    $(document).on("click","#mostholytrinitycatholicschool",function() {
        $("#mostholytext").html(frontpageoptionspages[3].title);
        $("#mostholymedium").html(frontpageoptionspages[3].body);
    });
    $(document).on("click","#sacraments",function() {
        $("#sacramentstext").html(frontpageoptionspages[4].title);
        $("#sacramentsmedium").html(frontpageoptionspages[4].body);
    });
    $(document).on("click","#donate",function() {
        $("#donatetext").html(frontpageoptionspages[5].title);
        $("#donatemedium").html(frontpageoptionspages[5].body);
    });
});




let frontpageoptionspages = [
    {
        title: "Online Mass",
        body: "<a href='https://youtu.be/7e300pRRiu8'>Mass Link</a>"
    },
    {
        title: "Spiritual Resources",
        body: "Questions on Catholicism: <a href='https://www.catholic.com/qa'>Catholic Answers</a><br/>Catechism of the Catholic Church: <a href='https://www.vatican.va/archive/ENG0015/_INDEX.HTM'>Link to vatican website</a> "
    },
    {
        title: "Our Bookstore",
        body: "Our Bookstore is open Fridays from 3-5, and through phone call anytime in between"
    },
    {
        title: "Most Holy Trinity Catholic School",
        body: "Our wonderful Parish School is open to all kids, here is a link to its individual website: <a href='https://www.mht.org/122'>Mht Parish School</a>"
    },
    {
        title: "Sacraments",
        body: "We recognize that the Sacraments have a visible and invisible reality, a reality open to all the human senses but grasped in its God-given depths with the eyes of faith. When parents hug their children, for example, the visible reality we see is the hug. The invisible reality the hug conveys is love. We cannot 'see' the love the hug expresses, though sometimes we can see its nurturing effect in the child. The visible reality we see in the Sacraments is their outward expression, the form they take, and the way in which they are administered and received. The invisible reality we cannot 'see' is God's grace, his gracious initiative in redeeming us through the death and Resurrection of his Son. His initiative is called grace because it is the free and loving gift by which he offers people a share in his life, and shows us his favor and will for our salvation. Our response to the grace of God's initiative is itself a grace or gift from God by which we can imitate Christ in our daily lives. The saving words and deeds of Jesus Christ are the foundation of what he would communicate in the Sacraments through the ministers of the Church. Guided by the Holy Spirit, the Church recognizes the existence of Seven Sacraments instituted by the Lord. They are the Sacraments of Initiation (Baptism, Confirmation, the Eucharist), the Sacraments of Healing (Penance and the Anointing of the Sick), and the Sacraments at the Service of Communion (Marriage and Holy Orders). Through the Sacraments, God shares his holiness with us so that we, in turn, can make the world holier."
    },
    {
        title: "Donate",
        body: "Help to sustain your church with the security and convenience of Online Giving. Forget the checkbook and make tithing simple for you and your family. With Online Giving, you can give back to your church whenever and wherever with the simple click of a button from your computer or smart device. Online Giving even makes tax time easier. The donations you make with Online Giving are credited to your tax statement for the end of the year. More benefits of Online Giving include: 24/7 access to your account and the ability to donate Easily schedule recurring and future donations to coincide with your pay period Credit card option allows you to take advantage of rewards such as air miles or cash bonuses. No need to disclose bank information because you enter it directly into the Online Giving secure site. Continue to support your church even when you can’t attend service with one-time or recurring donations With full control of your account you can easily adjust your contribution amounts<br/>Ready to get started? Here’s how.<br/>Create an account<br/>Go to our <a href='https://www.osvhub.com/mht/funds'>Online Giving website</a> and select a fund to donate a gift to by clicking 'Give Now.'<br/>Enter your gift amount, select your gift type and frequency, select a start date, and click continue.<br/>Enter your account information<br/>Enter your information, payment information, and payment method address.<br/>Then create a new password and click 'Submit Your Gift.'<br/>A confirmation email will then be sent to your inbox.<br/>You are now all set up to give!<br/>You can now sign in through this page to access your account to see upcoming and past gifts."
    }
]