let dom_pictures = document.querySelector(".dom-picture");
let myfriends = [
    {
        picture: "../Image/reanew.jpg",
        name: "RIEN LEAM ❤",
        gender: "Male",
        age: 18,
        from: "Siem Reap",
        skill: "IT, WEP Programming",
        color: "Blue, Gray and Black",
        hobby: "I like to Listen to music, watch movie, go for a walk and take photos with friends, draw picture and cook foods to eat with friends.",
        reason: "I like my friends so much, because they are so funny, kind , friendly, always make me happy, help, motivate each other, honestly and they are lovely. I love them. ❤",
        phone: "097 734 8624",
        email: "rienleam@gmail.com"
    },
    {
        picture: "../Image/sahuoy.jpg",
        name: "SAHUOY KHLEY ❤",
        gender: "Female",
        age: 20,
        from: "Siem Reap",
        skill: "Midwife",
        color: "White and Pink",
        hobby: "I like listening to English music, Reading books, cycling, and Relax.",
        reason: "Because Rien is my Best friend, he is not too biased, straightforward, honest, sympathetic and loving, and when I have a problem, he is a good listener and gives me good things, and he never forgets wherever he goes always miss our memories, love you. ❤",
        phone: "097 748 9766",
        email: "sahuoy.ssp2021@gmail.com"
    },
    {
        picture: "../Image/salorn.jpg",
        name: "SALORN SIENG ❤",
        gender: "Female",
        age: 21,
        from: "Siem Reap",
        skill: "Lawyer",
        color: "Blue and Pink",
        hobby: "I like reading the books, taking some pictures and listening to my favorite music.",
        reason: "Because Rien is friendly, kind, care about me and he looks so lovely. I love you Rian. ❤",
        phone: "078 916 726",
        email: "SiengSalorn44@gmail.com"
    },
    {
        picture: "../Image/davon.jpg",
        name: "DAVON VORN ❤",
        gender: "Female",
        age: 19,
        from: "Siem Reap",
        skill: "Accountant",
        color: "Blue",
        hobby: "I like to take some pictures and listen to my favorite music and sleep.",
        reason: "Because Rien is friendly, kind, care about me and he looks so lovely. He is my best friend. ❤",
        phone: "060 692 409",
        email: "sahuoy.ssp2021@gmail.com"
    },
    {
        picture: "../Image/vis.jpg",
        name: "VIS THOL ❤",
        gender: "Male",
        age: 20,
        from: "Siem Reap",
        skill: "Pharmacy",
        color: "Red",
        hobby: "I like reading books and listen to my favourite music.",
        reason: "Because Rien is a person who are kind, friendly, helpful and care for others. Especially his face is very cute and lovely. ❤",
        phone: "066 860 256",
        email: "tholvis900@gmail.com"
    },
    {
        picture: "../Image/channa.jpg",
        name: "CHANNA DOV ❤",
        gender: "Female",
        age: 18,
        from: "Siem Reap",
        skill: "Financial and Banking",
        color: "Blue and Yellow",
        hobby: "I like gardening, grow flower and plant and I watch movie or listen to music.",
        reason: "Because I've known him for a very long time. He is kind and be able to share me everything even it doesn't enough for himself. He is cheerfull and funny. I'v had an extremely fun time when spending every minutes with Rien. He is my best friend forever. ❤",
        phone: "088 852 6449",
        email: "dovchannav@gmail.com"
    },
    {
        picture: "../Image/vinea.jpg",
        name: "VINEA CHENDA ❤",
        gender: "Female",
        age: 20,
        from: "Siem Reap",
        skill: "Midwife",
        color: "Pink",
        hobby: "I like reading the books, listen to music and cycling.",
        reason: "Because Rien is friendly. ❤",
        phone: "....",
        email: "vinea.ssp2021@gmail.com"
    },
    {
        picture: "../Image/lerb.jpg",
        name: "LERB CHHOUK ❤",
        gender: "Female",
        age: 18,
        from: "Siem Reap",
        skill: "TESOL (English)",
        color: "Pink",
        hobby: "I like reading books and go out.",
        reason: "Because Rien is very smart and intelligent man. He is friendly man and a good friend. ❤",
        phone: "097 531 5243",
        email: "lerb.ssp2021@gmail.com"
    },
    {
        picture: "../Image/nith.jpg",
        name: "SREYNITH KHEN ❤",
        gender: "Female",
        age: 19,
        from: "Siem Reap",
        skill: "Midwife",
        color: "Black",
        hobby: "I like sleeping and I like Mann Vanda.",
        reason: "Because Rien is kindly, handsome, smart and honestly. ❤",
        phone: "096 296 0426",
        email: "sreynith.ssp2021@gmail.com"
    },
    {
        picture: "../Image/sine.jpg",
        name: "SINE TOUCH ❤",
        gender: "Female",
        age: 21,
        from: "Siem Reap",
        skill: "Accountant",
        color: "White",
        hobby: "I like sleeping.",
        reason: "Because Rien is... ❤",
        phone: "088 422 9328",
        email: "sine.ssp2021@gmail.com"
    },
    {
        picture: "../Image/sievlong.jpg",
        name: "SIEVLONG LAI ❤",
        gender: "Male",
        age: 19,
        from: "Siem Reap",
        skill: "Lawyer",
        color: "Blue sky",
        hobby: "I like Playing football",
        reason: "Because Rien is friendly. ❤",
        phone: "....",
        email: "sievlong.ssp2021@gmail.com"
    },
    {
        picture: "../Image/chreub.jpg",
        name: "CHREUB SAVONG ❤",
        gender: "Female",
        age: 20,
        from: "Siem Reap",
        skill: "Accountant",
        color: "Blue and Pink",
        hobby: "I like cooking and reading the books.",
        reason: "Because Rien is friendly kind care about me and he look so lovely. I love you. ❤",
        phone: "097 377 3894",
        email: "chreub.nssp2021@gmail.com"
    },
    {
        picture: "../Image/mak.jpg",
        name: "CHHIMMAK NHOUN ❤",
        gender: "Male",
        age: 19,
        from: "Siem Reap",
        skill: "General Management",
        color: "Blue and Yellow",
        hobby: "I like to play Football and Trip",
        reason: "Because Rien is friendly and lovely. ❤",
        phone: "097 753 0965",
        email: "chhimmak.nssp2021@gmail.com"
    }
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
        from.textContent = friend.from + " Province";
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
