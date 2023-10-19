/* Desenvolva a lógica da página aqui */

// suggestion list
let ulSuggestion = document.querySelector('.suggestion-users');
function addSuggestion(sugestUsers){
    for(let i = 0; i < sugestUsers.length; i++){
      let liSuggestion = document.createElement('li');
      let imgSuggestion =  document.createElement('img');
      let divOneSuggestion =  document.createElement('div');
      let h4Suggestion =  document.createElement('h4');
      let pSuggestion =  document.createElement('p');
      let buttonSuggestion = document.createElement('button');
    //add values
      imgSuggestion.src = sugestUsers[i].img; 
      h4Suggestion.innerText = `${sugestUsers[i].user}`;
      pSuggestion.innerText = `${sugestUsers[i].stack}`;  
      buttonSuggestion.innerText = 'Seguir';
    //add class
      liSuggestion.classList = 'display-center';
      imgSuggestion.classList = 'image-post';
      divOneSuggestion.classList = 'name-user';
      buttonSuggestion.classList = 'button-follow';
    //append
      ulSuggestion.appendChild(liSuggestion);  
      liSuggestion.appendChild(imgSuggestion);
      liSuggestion.appendChild(divOneSuggestion);
      liSuggestion.appendChild(buttonSuggestion);
      divOneSuggestion.appendChild(h4Suggestion);
      divOneSuggestion.appendChild(pSuggestion);
    }
}
addSuggestion(sugestUsers);

//add button post
let LikeValue = 0;
//post list
let ulPosts = document.querySelector('.feed-ul')
function addPosts(posts){
    for(let i = 0; i < posts.length; i++){
        //creating
        let liPosts = document.createElement('li'); 
        let divOnePost =  document.createElement('div');
        let imgPosts =  document.createElement('img');
        let divTwoPost =  document.createElement('div');
        let h3Posts =  document.createElement('h3');
        let pPosts =  document.createElement('p');
        let h3TitlePosts =  document.createElement('h3');
        let pTextPosts =  document.createElement('p');
        let divThreePost =  document.createElement('div');
        let buttonPosts = document.createElement('button');
        let imgLikePosts =  document.createElement('img');
        let pLikePosts =  document.createElement('p');
        //add values
        imgPosts.src = posts[i].img;
        h3Posts.innerText = `${posts[i].user}`;
        pPosts.innerText = `${posts[i].stack}`;
        h3TitlePosts.innerText = `${posts[i].title}`;
        pTextPosts.innerText = `${posts[i].text}`;    
        buttonPosts.innerText = 'Abrir Post';
        imgLikePosts.src = './assets/img/heartGrey.png';
        pLikePosts.innerText = `${LikeValue}`;
        //add class
        liPosts.classList = 'feed-li display-column';
        divOnePost.classList = 'feed-user display-center';
        imgPosts.classList = 'image-post';
        divTwoPost.classList = 'feed-user-name';
        h3TitlePosts.classList = 'title-feed-post';
        pTextPosts.classList = 'text-feed-post';
        divThreePost.classList = 'like-content display-center';
        buttonPosts.classList = 'button-feed';
        buttonPosts.setAttribute('data-control-modal', 'modal-post');
        imgLikePosts.classList = 'image-like';
        pLikePosts.classList = 'text-like-number';
        //append
        ulPosts.appendChild(liPosts);
        liPosts.appendChild(divOnePost);
        divOnePost.appendChild(imgPosts);
        divOnePost.appendChild(divTwoPost);  
        divTwoPost.appendChild(h3Posts);
        divTwoPost.appendChild(pPosts);
        liPosts.appendChild(h3TitlePosts);
        liPosts.appendChild(pTextPosts);
        liPosts.appendChild(divThreePost);
        divThreePost.appendChild(buttonPosts);
        divThreePost.appendChild(imgLikePosts);
        divThreePost.appendChild(pLikePosts);    
    }
}
addPosts(posts)

let nameUserPost = document.querySelector('.user-name-modal')
let professionUserPost = document.querySelector('.user-text-modal')
let imageUserPost = document.querySelector('.img-profile')
let titleContentPost = document.querySelector('.title-post-modal')
let textContentPost = document.querySelector('.content-post-modal')


const buttonsControllersModal = document.querySelectorAll("[data-control-modal]")
for(let index = 0; index < buttonsControllersModal.length; index++){
    buttonsControllersModal[index].addEventListener("click", ()=>{
        let modalId = buttonsControllersModal[index].getAttribute("data-control-modal");
        document.getElementById(modalId).classList.toggle("show-modal"); 
        let nameUser = buttonsControllersModal[index].parentElement.parentElement.children[0].children[1].children[0].innerText
        let professionUser = buttonsControllersModal[index].parentElement.parentElement.children[0].children[1].children[1].innerText
        let imageUser = buttonsControllersModal[index].parentElement.parentElement.children[0].children[0].src
        let imageUserIdeal = imageUser.substring(21)
        let titleUser = buttonsControllersModal[index].parentElement.parentElement.children[1].innerText
        let textUser = buttonsControllersModal[index].parentElement.parentElement.children[2].innerText

        nameUserPost.innerText = `${nameUser}`
        professionUserPost.innerText = `${professionUser}`
        imageUserPost.src = `${imageUserIdeal}`
        titleContentPost.innerText = `${titleUser}`
        textContentPost.innerText = `${textUser}`      
    })
}

let inputPost = document.querySelector('.input-post')
let textPost = document.querySelector('.text-post')
let buttonPost = document.querySelector('.button-post')
    buttonPost.addEventListener('click', function(event){
        event.preventDefault()    
        let valueInputPost = inputPost.value
        let valuetextPost = textPost.value  
        posts.unshift({id_post: 0, user: "Richard Jácomo", stack: "Front End developer", img: "./assets/img/richardUser.png", title: `${valueInputPost}`, text:`${valuetextPost}`}) 
        console.log(posts)  
        reloadList()
        addPosts(posts)
    })
//function to reload the post list
const list = [];
function reloadList() {
    ulPosts.innerHTML = ""; 
    for (let i = 0; i < list.length; i++) {
      let currentElement = list[i];
      currentElement.id = i;
      ulPosts.appendChild(currentElement);
    }
  }

//to change de follow button
let buttonsFollow = document.getElementsByClassName('button-follow');
    for(let i = 0; i < buttonsFollow.length; i++){
        let buttonFollow = buttonsFollow[i]
        buttonFollow.addEventListener('click', () =>{
        buttonFollow.innerText = 'Seguindo'   
        buttonFollow.style.backgroundColor = '#4263EB'
        buttonFollow.style.color = '#F8F9FA'
        buttonFollow.style.border = 'none'
        buttonFollow.style.width = '80px'
        })
};

//to change the like button' color
let pLikePosts = document.querySelector('.text-like-number');
let likeButtons = document.getElementsByClassName('image-like');
    for(let i = 0; i < likeButtons.length; i++){
        let buttonLike = likeButtons[i]
        buttonLike.addEventListener('click', () =>{
        buttonLike.src = './assets/img/heartRed.png' 
        LikeValue = 1; 
        pLikePosts.innerText = `${LikeValue}`;  
    })
 }

//o projeto ainda está cheio de bugs e se adicionar um novo post o modal não funcionará, então os botões de "Abrir Post" apenas funcionam antes de inserir um novo post :)
//o position: sticky está habilitado na div de sugestões, mas por sua div pai ter altura pequena o efeito dura pouco


