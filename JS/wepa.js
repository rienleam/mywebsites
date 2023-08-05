let dom_pictures = document.querySelector(".dom-picture");
let myfriends = [
    {
        picture: "../Image/lai.png",
        name: "RIEN LEAM",
        gender: "Male",
        age: 18,
        from: "Siem Reap",
        skill: "IT, WEP Programming",
        color: "Blue, Gray and Black",
        hobby: "I like to Listen to music, watch movie, go for a walk and take photos with friends, draw picture and cook foods to eat with friends.",
        reason: "I like my friends so much, because they are so funny, kind , friendly, always make me happy, help, motivate each other, honestly and they are lovely. I love them.",
        phone: "097 734 8624",
        email: "rienleam@gmail.com"
    },
    {
        picture: "../Image/sreyrea.jpg",
        name: "SREYREA HAN",
        gender: "Female",
        age: 20,
        from: "Preah Vihear",
        skill: "IT WEP Programming",
        color: "Green and Black",
        hobby: "I like talking with friends, cooking, playing phone and sleeping.",
        reason: "Because Rien is friendly and funny. Sometimes he makes me feel happy and relax.",
        phone: "088 365 1987",
        email: "hansreyrea2222@gmail.com"
    },
    {
        picture: "../Image/sreypok.jpg",
        name: "SREYPOK DOEM",
        gender: "Female",
        age: 20,
        from: "Tbong Khmom",
        skill: "IT WEP Programming",
        color: "Green and Blue",
        hobby: "I like to listen to music, do exercise and research.",
        reason: "Because Rien is friendly, kind and cute boy.",
        phone: "088 84 16 527",
        email: "sreypok.doem@student.passerellesnumeriques.org"
    },
    {
        picture: "../Image/linna.jpg",
        name: "LINNA MUTH",
        gender: "Female",
        age: 20,
        from: "Kompot",
        skill: "IT WEP Programming",
        color: "Black, Pink and White",
        hobby: "I like watch movie and listening music",
        reason: "Because Rien is so friendly and kind I love you baby jub jub.",
        phone: "078 470 684",
        email: "linna.muth@student.passerellesnumeriques.org"
    },
    {
        picture: "../Image/vy.jpg",
        name: "NAVY RORN",
        gender: "Female",
        age: 20,
        from: "Prey Veng",
        skill: "IT WEP Programming",
        color: "Black and White",
        hobby: "I like reading book and listening music",
        reason: "Because Rien is so friendly and kind I love you baby jub jub.",
        phone: "096 24 23 921",
        email: "navy.rorn@student.passerellesnumeriques.org"
    },
    {
        picture: "../Image/net.jpg",
        name: "NET SE",
        gender: "Male",
        age: 19,
        from: "Prey Veng",
        skill: "IT WEP Programming",
        color: "Blue, Black and Gray", 
        hobby: "I like to read the books, sing and dance.",
        reason: "Because Rien is crazy.",
        phone: "067 340 156 (Metfone) 096 479 1338 (Smart)",
        email: "netse0962@gmail.com"
    },
    {
        picture: "../Image/chamreth.jpg",
        name: "CHAMRETH KOSAL",
        gender: "Female",
        age: 20,
        from: "Oudormeanchey",
        skill: "IT WEP Programming",
        color: "Yellow",
        hobby: "I like to listen to music, sleep ,watch movies and read the books also.",
        reason: "Because Rien is so friendly and kind I love you baby jub jub.",
        phone: "....",
        email: "...."
    },
    {
        picture: "../Image/dav.jpg",
        name: "SIENGDAV THOEUN",
        gender: "Female",
        age: 20,
        from: "Banteay Mean Chey",
        skill: "IT WEP Programming",
        color: "Black, white, brown, and red",
        hobby: "I like listening music, watching movie (K-Drama) and eating.",
        reason: "Because Rien is friendly, kind and cute boy.",
        phone: "....",
        email: "siengdav@student.passerellesnumeriques.org"
    },
    {
        picture: "../Image/nit.jpg",
        name: "NIT NOEM",
        gender: "Female",
        age: 20,
        from: "Banteay Mean Chey",
        skill: "IT WEP Programming",
        color: "all color (accept pink)",
        hobby: "I like reading book, manga, watching movie like adventure, barbie, listening music (Khmer and English), sing songs",
        reason: "Because Rien is friendly, kind and cute boy.",
        phone: "066 254 316",
        email: "nitnitnn0305@gmail.com"
    },
    {
        picture: "../Image/vanda.jpg",
        name: "VANDA SOPHAL",
        gender: "Male",
        age: 19,
        from: "Siem Reap",
        skill: "Financial and Banking",
        color: "Blue and Yellow",
        hobby: "I like cooking, sleeping, eating and listening to music.",
        reason: "Because Rien is so friendly. (●'◡'●)",
        phone: "071 254 0816",
        email: "...."
    },
    {
        picture: "../Image/darath.jpg",
        name: "DARATH PUM",
        gender: "Male",
        age: 19,
        from: "Kompong Chhnang",
        skill: "IT WEP Programming",
        color: "Black and Pink",
        hobby: "almost I like to sleep.",
        reason: "Because Rien always make me happy.",
        phone: "....",
        email: "...."
    },
    {
        picture: "../Image/bol.jpg",
        name: "VIBOL PHOUNG",
        gender: "Male",
        age: 20,
        from: "Kompong Cham",
        skill: "IT WEP Programming",
        color: "Pink and White",
        hobby: "I like to play football, sing , cook and listen to music.",
        reason: "Because Rien is so friendly and kind.",
        phone: "097 531 5243",
        email: "...."
    },
    {
        picture: "../Image/mom.jpg",
        name: "SREYMOM CHHUM",
        gender: "Female",
        age: 19,
        from: "kompong Cham",
        skill: "IT WEP Programming",
        color: "Pink",
        hobby: "I like cooking, singing, reading and listening to music.",
        reason: "Because Rien is a kindly person.",
        phone: "....",
        email: "...."
    },
    {
        picture: "../Image/soknoeurn.jpg",
        name: "SOKNOEURN SRUN",
        gender: "Female",
        age: 19,
        from: "Prey Veng",
        skill: "IT WEP Programming",
        color: "Red, Yellow and Blue",
        hobby: "I like playing game, reading the books, watching movie, listening to the songs, and eating.",
        reason: "Because Rien is a good friend. He always concern and take care about his friends. He's kind.",
        phone: "088 422 9328",
        email: "...."
    },
    {
        picture: "../Image/sreyka.jpg",
        name: "SREYKA THOR",
        gender: "Female",
        age: 19,
        from: "Siem Reap",
        skill: "IT WEP Programming",
        color: "gray, blue and white ",
        hobby: "I like listening music, playing sport, travelling",
        phone: "097 67 57 230/089 48 63 61",
        email: "sreykathor234@gmail.com"
    },
    {
        picture: "../Image/dyna.jpg",
        name: "DYNA HEN",
        gender: "Female",
        age: 19,
        from: "Pursat",
        skill: "IT WEP Programming",
        color: "Blue, Green, White and Black",
        hobby: "I like to watch the movies.",
        reason: "Because Rien is honest and kind. ",
        phone: "097 564 0854",
        email: "dynahen133@gmail.com"
    },
    {
        picture: "../Image/vireak.jpg",
        name: "VIREAK ROEUN",
        gender: "Male",
        age: 19,
        from: "Phnom Penh",
        skill: "IT WEP Programming",
        color: "Teal, White and Black",
        hobby: "I like to watch anime and play football.",
        reason: "Because Rien is friendly to me. ",
        phone: "....",
        email: "...."
    },
    {
        picture: "../Image/villa.jpg",
        name: "VILLA NHEA",
        gender: "Male",
        age: 20,
        from: "Preah Vihear",
        skill: "IT WEP Programming",
        color: "Black",
        hobby: "I like listening to music.",
        reason: "Because Rien is beautiful. ",
        phone: "....",
        email: "...."
    },
    {
        picture: "../Image/pheap.jpg",
        name: "SREYPHEAP KHIN",
        gender: "Female",
        age: 20,
        from: "Pursat",
        skill: "IT WEP Programming",
        color: "black, white, blude-800,red-800",
        hobby: "I like reading novel(gl,bl,motivate), listening to music and sleep",
        reason: "Because Rien is beautiful. ",
        phone: "088 580 4051",
        email: "sreypheap.khin@student.passerellesnumeriques.org"
    },
    {
        picture: "../Image/phin.jpg",
        name: "PHIN LEK",
        gender: "Female",
        age: 22,
        from: "Kompong Thom",
        skill: "IT WEP Programming",
        color: "black, red and yellow",
        hobby: "I like cooking food, stay alone and watching movie.",
        reason: "Because Rien is beautiful. ",
        phone: "097 40 80 670/093 53 25 80",
        email: "lekphin20@gmail.com"
    },
    {
        picture: "../Image/pich.jpg",
        name: "SREYPICH THUN",
        gender: "Female",
        age: 18,
        from: "Kompot",
        skill: "IT WEP Programming",
        color: "Black, white and Green",
        hobby: "I like eating, watching movie, music, singing and shopping.",
        reason: "Because Rien is beautiful. ",
        phone: "097 61 38 713",
        email: "sreypich.thun@student.passerellesnumeriques.org"
    },
    {
        picture: "../Image/makara.jpg",
        name: "MAKARA PHOEM",
        gender: "Female",
        age: 20,
        from: "Takeo",
        skill: "IT WEP Programming",
        color: "black and white",
        hobby: "I like listening music.",
        phone: "097 22 83 102",
        email: "makaraphoem7@gmail.com"
    },
    {
        picture: "../Image/seangeng.jpg",
        name: "SEANGENG ITH",
        gender: "Female",
        age: 18,
        from: "Kompong Thom",
        skill: "IT WEP Programming",
        color: "Black",
        hobby: "I like watching movies.",
        reason: "Because Rien is ... ",
        phone: "....",
        email: "...."
    },
    {
        picture: "../Image/phanit.jpg",
        name: "PHANNIT PHUOY",
        gender: "Female",
        age: 19,
        from: "Banteay Mean Chey",
        skill: "IT WEP Programming",
        color: "Blue and Black",
        hobby: " I like playing basketball, football, listening to music, singing and swimming.",
        reason: "Because Rien is friendly, kind and respects others.",
        phone: "....",
        email: "...."
    },
    {
        picture: "../Image/phearom.jpg",
        name: "PHEAROM CHEA",
        gender: "Male",
        age: 20,
        from: "Phnom Penh",
        skill: "IT WEP Programming",
        color: "black and white",
        hobby: "I like playing football and listening music.",
        phone: "097 92 99 757",
        email: "phearomchea210920@gmail.com"
    },
];

function renderFriends() {

    for (let index = 0; index < myfriends.length; index++) {
        let friend = myfriends[index];
    
        let main_content = document.createElement("div");
        main_content.className = "mine";
        dom_pictures.appendChild(main_content);

        let pic_content = document.createElement("div");
        pic_content.className = "my-pic";
        main_content.appendChild(pic_content);
    
        let friend_pic = document.createElement("img");
        friend_pic.id = "friend-pic";
        friend_pic.src = friend.picture;
        pic_content.appendChild(friend_pic);
    
        let infor = document.createElement("div");
        infor.className = "describe";
        main_content.appendChild(infor);

        let friend_name = document.createElement("span");
        friend_name.textContent = "Name: ";
        infor.appendChild(friend_name);

        let name = document.createElement("strong");
        name.id = "friend-name";
        name.textContent = friend.name;
        friend_name.appendChild(name);
        
        let friend_gender = document.createElement("span");
        friend_gender.textContent = "Gender: ";
        infor.appendChild(friend_gender);

        let gender = document.createElement("strong");
        gender.textContent = friend.gender;
        friend_gender.appendChild(gender);

        let friend_age = document.createElement("span");
        friend_age.textContent = "Age: ";
        infor.appendChild(friend_age);

        let age = document.createElement("strong");
        age.textContent = friend.age + " years old";
        friend_age.appendChild(age);

        let friend_from = document.createElement("span");
        friend_from.textContent = "From: ";
        infor.appendChild(friend_from);

        let from = document.createElement("strong");
        from.textContent = friend.from + " Province/City";
        friend_from.appendChild(from)

        let friend_skill = document.createElement("span");
        friend_skill.textContent = "Learning Skills: ";
        infor.appendChild(friend_skill);
        
        let skills = document.createElement("strong");
        skills.textContent = friend.skill;
        friend_skill.appendChild(skills);

        let friend_color = document.createElement("span");
        friend_color.textContent = "Favorite Color: ";
        infor.appendChild(friend_color);

        let color = document.createElement("strong");
        color.textContent = friend.color;
        friend_color.appendChild(color);

        let friend_hobby = document.createElement("span");
        friend_hobby.textContent = "Hobbies: ";
        infor.appendChild(friend_hobby);

        let hobbies = document.createElement("strong");
        hobbies.textContent = friend.hobby;
        friend_hobby.appendChild(hobbies);

        // let friend_reasons = document.createElement("span");
        // friend_reasons.textContent = "Why I like RIEN: ";
        // infor.appendChild(friend_reasons);

        // let reason = document.createElement("strong");
        // reason.textContent = friend.reason;
        // friend_reasons.appendChild(reason);

        let friend_phone = document.createElement("span");
        friend_phone.textContent = "Tell: ";
        infor.appendChild(friend_phone);

        let phone = document.createElement("strong");
        phone.textContent = friend.phone;
        friend_phone.appendChild(phone);

        let friend_email = document.createElement("span");
        friend_email.textContent = "Email: ";
        infor.appendChild(friend_email);

        let email = document.createElement("strong");
        email.textContent = friend.email;
        friend_email.appendChild(email);

    }
    console.log(dom_pictures);
}

renderFriends();
