// Calling id
const body = document.getElementById('body');
const main = document.getElementById('main');
const ulContact = document.getElementById('list-contact');
const containerChatDisplay = document.getElementById('chat-display');
const controlMenu = document.getElementById('controlMenu');



// Data

// TITLE MAKE YOUR PROFILE
const titleControlContainer = document.createElement('div');
titleControlContainer.className = 'title-control-container';
const titleControlMenu = document.createElement('p');
titleControlMenu.textContent = 'Edit Profile'
titleControlContainer.appendChild(titleControlMenu);
controlMenu.appendChild(titleControlContainer);
// CONTROL MENU NAMA
const nameControlContainer = document.createElement('div');
nameControlContainer.className = 'name-control-container';
const nameControlTitle = document.createElement('p');
nameControlTitle.className = 'name-title-control';
nameControlTitle.textContent = 'Name : ';
const nameControlInput = document.createElement('input');
nameControlInput.setAttribute('maxLength', '20');
nameControlInput.className = 'name-control-input';
const submitProfileButton = document.createElement('button');
submitProfileButton.className = 'submit-profile-button';
submitProfileButton.textContent = 'Done';
nameControlContainer.appendChild(nameControlTitle);
nameControlContainer.appendChild(nameControlInput);
nameControlContainer.appendChild(submitProfileButton);
controlMenu.appendChild(nameControlContainer);
// CONTROL MENU INPUT PICT
const inputPictControlContainer = document.createElement('div');
inputPictControlContainer.className = 'input-pict-container';
const inputPictControlTitle = document.createElement('p');
inputPictControlTitle.className = 'input-pict-control-title';
inputPictControlTitle.textContent = 'Profile Picture :'
inputPictControlContainer.appendChild(inputPictControlTitle);
const inputPictControl = document.createElement('input');
inputPictControl.setAttribute('type', 'file');
inputPictControl.setAttribute('accept', 'img/*');
inputPictControl.className = 'input-pict-control';
inputPictControlContainer.appendChild(inputPictControl);
controlMenu.appendChild(inputPictControlContainer);
// CHANGE BACKGROUND IMAGE
const containerChangeBackgroundImage = document.createElement('div');
containerChangeBackgroundImage.className = 'container-change-bgimg';
const changeBgTitle = document.createElement('p');
changeBgTitle.textContent = 'Change Background';
containerChangeBackgroundImage.appendChild(changeBgTitle);
const bgImgUl = document.createElement('ul');
bgImgUl.style.listStyleType = 'none';
const bgImgLi = document.createElement('li');
bgImgLi.style.display = 'flex';
bgImgLi.style.gap = '5px';
const bgImgOp1 = document.createElement('div');
const bgImgOp2 = document.createElement('div');
const bgImgOp3 = document.createElement('div');
const bgImgOp4 = document.createElement('div');
const bgImgOp5 = document.createElement('div');
bgImgOp1.className = 'bgimg-option';
bgImgOp1.style.backgroundImage = 'linear-gradient(to right, #923F91, #451995)' 

bgImgOp2.className = 'bgimg-option';
bgImgOp2.style.backgroundImage = 'linear-gradient(to right, #636363, #191919)' 

bgImgOp3.className = 'bgimg-option';
bgImgOp3.style.backgroundImage = 'linear-gradient(to right, #FF5B35, #29181E)' 

bgImgOp4.className = 'bgimg-option';
bgImgOp4.style.backgroundImage = 'linear-gradient(to right, #B937BB, #4A11C0)' 

bgImgOp5.className = 'bgimg-option';
bgImgOp5.style.backgroundImage = 'linear-gradient(to right, #5271FF, #11155F)' 

bgImgLi.appendChild(bgImgOp1);
bgImgLi.appendChild(bgImgOp2);
bgImgLi.appendChild(bgImgOp3);
bgImgLi.appendChild(bgImgOp4);
bgImgLi.appendChild(bgImgOp5);
bgImgUl.appendChild(bgImgLi);
containerChangeBackgroundImage.appendChild(bgImgUl);

const backgroundImageData = [
    'url(img/bg_img_1.jpg)',
    'url(img/bg_img_2.jpg)',
    'url(img/bg_img_3.jpg)',
    'url(img/bg_img_4.jpg)',
    'url(img/bg_img_5.jpg)',
];

function bgLight() {
    main.style.backgroundColor = 'rgba(255, 255, 255, 0.096)';
}

function bgDark() {
    main.style.backgroundColor = 'rgba(3, 3, 3, 0.315)';
}

bgImgOp1.classList.add('bgimg-option-selected');
bgImgOp1.addEventListener('click', ()=> {
    body.style.backgroundImage = backgroundImageData[0];
    bgImgOp1.classList.add('bgimg-option-selected');
    bgImgOp2.classList.remove('bgimg-option-selected');
    bgImgOp3.classList.remove('bgimg-option-selected');
    bgImgOp4.classList.remove('bgimg-option-selected');
    bgImgOp5.classList.remove('bgimg-option-selected');
    delete bgDark();
    bgLight();
});

bgImgOp2.addEventListener('click', ()=> {
    body.style.backgroundImage = backgroundImageData[1];
    bgImgOp1.classList.remove('bgimg-option-selected');
    bgImgOp2.classList.add('bgimg-option-selected');
    bgImgOp3.classList.remove('bgimg-option-selected');
    bgImgOp4.classList.remove('bgimg-option-selected');
    bgImgOp5.classList.remove('bgimg-option-selected');
    delete bgDark();
    bgLight();
});

bgImgOp3.addEventListener('click', ()=> {
    body.style.backgroundImage = backgroundImageData[2];
    bgImgOp1.classList.remove('bgimg-option-selected');
    bgImgOp2.classList.remove('bgimg-option-selected');
    bgImgOp3.classList.add('bgimg-option-selected');
    bgImgOp4.classList.remove('bgimg-option-selected');
    bgImgOp5.classList.remove('bgimg-option-selected');
    delete bgLight();
    bgDark();
});

bgImgOp4.addEventListener('click', ()=> {
    body.style.backgroundImage = backgroundImageData[3];
    bgImgOp1.classList.remove('bgimg-option-selected');
    bgImgOp2.classList.remove('bgimg-option-selected');
    bgImgOp3.classList.remove('bgimg-option-selected');
    bgImgOp4.classList.add('bgimg-option-selected');
    bgImgOp5.classList.remove('bgimg-option-selected');
    delete bgLight();
    bgDark();
});

bgImgOp5.addEventListener('click', ()=> {
    body.style.backgroundImage = backgroundImageData[4];
    bgImgOp1.classList.remove('bgimg-option-selected');
    bgImgOp2.classList.remove('bgimg-option-selected');
    bgImgOp3.classList.remove('bgimg-option-selected');
    bgImgOp4.classList.remove('bgimg-option-selected');
    bgImgOp5.classList.add('bgimg-option-selected');
    delete bgLight();
    bgDark();
});


controlMenu.appendChild(containerChangeBackgroundImage);


let profilePictureDefault = 'url(img/profile pict hutao.jpeg)';
// let profilePicture = `url(${})`;


let nama = 'Hu Tao (Default)';
const chat = 'Selamat Pagi Ayang❤️';
// TIME
// const date = new Date;
// const time = [date.getHours() , '.' , date.getMinutes()];

// Container Chat List
const liChatlist = document.createElement('li');
liChatlist.setAttribute('id','contact-chatlist');
liChatlist.className = 'contact-chatlist';


// Creating Element Chat List
// 
// Profile Pict
const profilePict = document.createElement('div');
profilePict.style.backgroundImage = `url(img/profile_pict_hutao.jpeg)`;
profilePict.className = 'profile-chatlist';
liChatlist.appendChild(profilePict);
// Nama
const namaChatlist = document.createElement('p');
namaChatlist.className = 'nama-chatlist';
namaChatlist.textContent = nama;
liChatlist.appendChild(namaChatlist);
// 
const lineChatlist = document.createElement('hr');
lineChatlist.className = 'line-chatlist';
liChatlist.appendChild(lineChatlist);





// Header Chat Display
// 
const headerChatDisplay = document.createElement('header');
headerChatDisplay.className = 'header-chatdisplay';
// 
// Profile Pict Chat Dsiplay
const profilePictsCopy = profilePict.cloneNode(true);
headerChatDisplay.appendChild(profilePictsCopy);
// Name Contact
const namaContact = document.createElement('p');
namaContact.className = 'nama-contact';
namaContact.textContent = nama;
headerChatDisplay.appendChild(namaContact);
// CHAT
const chatChatlistContainer = document.createElement('div');
chatChatlistContainer.className = 'chat-chatlist-container';
const chatChatlist = document.createElement('p');
chatChatlist.className = 'chat-chatlist';
chatChatlistContainer.appendChild(chatChatlist);
liChatlist.appendChild(chatChatlistContainer);



inputPictControl.addEventListener('change', (e)=> {
    submitProfileButton.addEventListener('click', ()=> {
        const profilePictureSource = e.target.files[0];
        const profilePicture = URL.createObjectURL(profilePictureSource);
        profilePict.style.backgroundImage = `url(${profilePicture})`;
        profilePictsCopy.style.backgroundImage = `url(${profilePicture})`;
    })
});



// MAIN CHAT DISPLAY
// 
const mainChatDisplay = document.createElement('div');
mainChatDisplay.className = 'main-chatdisplay';
// 

// INPUT CHAT DSIPLAY
const inputChatDisplayContainer = document.createElement('div');
inputChatDisplayContainer.className = 'container-input-chatdisplay';
// INDIKATOR CHANGE CHAT SIDE
const indikatorChatChangeContainer = document.createElement('div');
indikatorChatChangeContainer.className = 'container-indikaor-chat-change';
inputChatDisplayContainer.appendChild(indikatorChatChangeContainer);
// 
const indikatorChatChange = document.createElement('div');
indikatorChatChange.className = 'indikator-chat-change';
indikatorChatChange.classList.add('change-chatside-from');
indikatorChatChangeContainer.appendChild(indikatorChatChange);
// CHAT CONTENT
const inputChatContent = document.createElement('div');
inputChatContent.className = 'input-chat-content';
inputChatDisplayContainer.appendChild(inputChatContent);
// CHANGE CHAT SIDE
// TO
const changeChatSideTo = document.createElement('button');
changeChatSideTo.className = 'button-chat-side-left';
changeChatSideTo.classList.add('button-hide-left');

// 
// INPUT MESSAGE BAR
const inputChatBAr = document.createElement('textarea');
inputChatBAr.setAttribute('rows', '1');
inputChatBAr.setAttribute('type', 'text');
inputChatBAr.className = 'input-chat-bar';
inputChatContent.appendChild(inputChatBAr);

inputChatContent.appendChild(changeChatSideTo);
// 
// BUTTON INPUT SEND
const buttonSend = document.createElement('button');
buttonSend.setAttribute('type', 'button');
buttonSend.className = 'button-send-chat-right';
buttonSend.classList.add('button-hide');
// 
function inputHeight() {
    inputChatBAr.style.height = 'auto';
    inputChatBAr.style.height = inputChatBAr.scrollHeight + 'px';
}
// 
function messageListFrom() {
    const chatChatlist = document.createElement('p');
    chatChatlist.className = 'chat-chatlist';
    chatChatlist.textContent = inputChatBAr.value;
    liChatlist.appendChild(chatChatlist);
}

function messageListTo() {
    const chatChatlist = document.createElement('p');
    chatChatlist.className = 'chat-chatlist';
    chatChatlist.textContent = inputChatBAr.value;
    liChatlist.appendChild(chatChatlist);
}
// 
function messageFrom() {
    const messageBoxContainer = document.createElement('div');
    messageBoxContainer.className = 'message-box-container';
    const chatMessageContainer = document.createElement('div');
    chatMessageContainer.className = 'chat-message-container';
    chatMessageContainer.classList.add('chat-from');
    const chatText = document.createElement('p');
    chatText.className = 'chat-text';
    chatText.textContent = inputChatBAr.value;

    const date = new Date;
    const hours = date.getHours()
    const hoursFormat = hours.toString().padStart(2, '0');
    const minute = date.getMinutes();
    const minuteFormat = minute.toString().padStart(2, '0');
    const time = [hoursFormat , '.' , minuteFormat];
    const timeChatlist = document.createElement('p');
    timeChatlist.className = 'time';
    timeChatlist.classList.add('time-chatlist');
    timeChatlist.textContent = time.join('');
    const timeChatDisplay = timeChatlist.cloneNode(true);
    timeChatDisplay.classList.add('time-chatdisplay');

    indikatorChatChange.classList.add('change-chatside-from');
    indikatorChatChange.classList.remove('change-chatside-to');

    liChatlist.appendChild(timeChatlist);
    chatMessageContainer.appendChild(chatText);
    chatMessageContainer.appendChild(timeChatDisplay);
    messageBoxContainer.appendChild(chatMessageContainer);
    inputChatBAr.value = '';
    mainChatDisplay.appendChild(messageBoxContainer);
}
// 
function messageTo() {
    const messageBoxContainer = document.createElement('div');
    messageBoxContainer.className = 'message-box-container';
    const chatMessageContainer = document.createElement('div');
    chatMessageContainer.className = 'chat-message-container';
    chatMessageContainer.classList.add('chat-to');
    const chatText = document.createElement('p');
    chatText.className = 'chat-text';
    chatText.textContent = inputChatBAr.value;

    const date = new Date;
    const hours = date.getHours()
    const hoursFormat = hours.toString().padStart(2, '0');
    const minute = date.getMinutes();
    const minuteFormat = minute.toString().padStart(2, '0');
    const time = [hoursFormat , '.' , minuteFormat];
    const timeChatlist = document.createElement('p');
    timeChatlist.className = 'time';
    timeChatlist.classList.add('time-chatlist');
    timeChatlist.textContent = time.join('');
    const timeChatDisplay = timeChatlist.cloneNode(true);
    timeChatDisplay.classList.add('time-chatdisplay');

    indikatorChatChange.classList.remove('change-chatside-from');
    indikatorChatChange.classList.add('change-chatside-to');

    liChatlist.appendChild(timeChatlist);
    chatMessageContainer.appendChild(chatText);
    chatMessageContainer.appendChild(timeChatDisplay);
    messageBoxContainer.appendChild(chatMessageContainer);
    inputChatBAr.value = '';
    mainChatDisplay.appendChild(messageBoxContainer);
}

// 
function transitionShow() {
    buttonSend.classList.remove('button-hide');
    buttonSend.classList.add('button-show');
    changeChatSideTo.classList.remove('button-hide-left');
    changeChatSideTo.classList.add('button-show-left');
    inputHeight();
}
// 
function transitionHide() {
    buttonSend.classList.remove('button-show');
    buttonSend.classList.add('button-hide');
    changeChatSideTo.classList.remove('button-show-left');
    changeChatSideTo.classList.add('button-hide-left');
    delete inputHeight();
}
// 
inputChatBAr.addEventListener('input', ()=> {
    if(inputChatBAr.value.trim() !== ''){
        transitionShow();
    }else {
        transitionHide();
    };
});

buttonSend.addEventListener('click', ()=> {
    if(inputChatBAr.value.trim() !== '') {
        chatChatlist.textContent = inputChatBAr.value;
        transitionHide()
        delete inputHeight();
        messageFrom();
    }
    delete inputHeight();
});

submitProfileButton.addEventListener('click', ()=> {
    if(nameControlInput.value !== '') {
        namaChatlist.textContent = nameControlInput.value;
        namaContact.textContent = nameControlInput.value;
        nama = nameControlInput.value;
        nameControlInput.value = '';
    };
})

changeChatSideTo.addEventListener('click', ()=> {
    if(inputChatBAr.value.trim() !== '') {
        const chatChatlistToValue = inputChatBAr.value;
        chatChatlist.textContent = `${nama} : ${chatChatlistToValue}`;
        transitionHide();
        delete inputHeight();
        messageTo();
    }
    delete inputHeight();
});
// 

// 
body.addEventListener('keypress', (e)=> {
    if(e.key === 'Enter') {
        // chatChatlist.textContent = inputChatBAr.value;
        e.preventDefault()
        if(inputChatBAr.value.trim() !== '') {
            chatChatlist.textContent = inputChatBAr.value;
            messageFrom();
            // buttonSend.classList.remove('button-show');
            // buttonSend.classList.add('button-hide');
            transitionHide()
            inputChatBAr.value = '';
            delete inputHeight();
        };
    };
});
//  
// 
inputChatContent.appendChild(buttonSend);


// Apply Element
ulContact.appendChild(liChatlist);
containerChatDisplay.appendChild(headerChatDisplay);
containerChatDisplay.appendChild(mainChatDisplay);
containerChatDisplay.appendChild(inputChatDisplayContainer);
