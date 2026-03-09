const reels = [
  {
    username: "vansh_dev",
    likeCount: 1243,
    isLiked: false,
    commentCount: 86,
    caption: "Late night coding sessions hit different 🔥",
    video: "./reels/1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/11.jpg",
    shareCount: 34,
    isFollowed: true
  },
  {
    username: "travelwithRiya",
    likeCount: 8921,
    isLiked: true,
    commentCount: 412,
    caption: "Sunset views from Manali 🌄",
    video: "./reels/2.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/21.jpg",
    shareCount: 210,
    isFollowed: false
  },
  {
    username: "fitness_freak",
    likeCount: 5320,
    isLiked: false,
    commentCount: 190,
    caption: "Consistency is the key 💪",
    video: "./reels/3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 75,
    isFollowed: true
  },
  {
    username: "techy_talks",
    likeCount: 2145,
    isLiked: false,
    commentCount: 98,
    caption: "JavaScript tricks you must know 🚀",
    video: "./reels/4.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/45.jpg",
    shareCount: 56,
    isFollowed: false
  },
  {
    username: "foodie_life",
    likeCount: 6789,
    isLiked: true,
    commentCount: 301,
    caption: "Street food in Delhi 😍",
    video: "./reels/5.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/65.jpg",
    shareCount: 144,
    isFollowed: true
  },
  {
    username: "nature_clicks",
    likeCount: 9543,
    isLiked: false,
    commentCount: 523,
    caption: "Lost in the beauty of mountains 🌿",
    video: "./reels/6.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/67.jpg",
    shareCount: 332,
    isFollowed: false
  },
  {
    username: "startup_diaries",
    likeCount: 3210,
    isLiked: true,
    commentCount: 145,
    caption: "Building something big from scratch 💡",
    video: "./reels/7.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/29.jpg",
    shareCount: 89,
    isFollowed: true
  },
  {
    username: "dance_vibes",
    likeCount: 7432,
    isLiked: false,
    commentCount: 267,
    caption: "Just feel the rhythm 🎶",
    video: "./reels/8.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/44.jpg",
    shareCount: 158,
    isFollowed: false
  },
  {
    username: "daily_motivation",
    likeCount: 11023,
    isLiked: true,
    commentCount: 689,
    caption: "Push yourself, because no one else will 💯",
    video: "./reels/9.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/52.jpg",
    shareCount: 421,
    isFollowed: true
  },
  {
    username: "mern_master",
    likeCount: 2876,
    isLiked: false,
    commentCount: 104,
    caption: "Full stack development journey 🚀",
    video: "./reels/10.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/73.jpg",
    shareCount: 63,
    isFollowed: false
  }
];

let allReels = document.querySelector('.all-reels');

function addSum(){
  let sum = "";
  reels.forEach((reel,idx) => {
      sum += `<div class="reel">
                  <video autoplay loop muted src=${reel.video}></video>
                  <div class="bottom">
                      <div class="user">
                          <img src=${reel.userprofile} alt="">
                          <h4>${reel.username}</h4>
                          <button id=${idx} class="follow">${reel.isFollowed ? "Following" : "Follow" }</button>
                      </div>
                      <h3>${reel.caption}</h3>
                  </div>
                  <div class="right">
                      <div id=${idx} class="like">
                          <h4 class="like-icon icon">${reel.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                          <h6>${reel.likeCount}</h6>
                      </div>
                      <div id=${idx} class="comment">
                          <h4 class="comment-icon icon" id=${idx} ><i class="ri-chat-3-line"></i></h4>
                          <h6>${reel.commentCount}</h6>
                      </div>
                      <div id=${idx} class="share">
                          <h4 class="share-icon icon" id=${idx} ><i class="ri-send-plane-line"></i></h4>
                          <h6>${reel.shareCount}</h6>
                      </div>
                      <div id=${idx} class="menu">
                          <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                      </div>
                  </div>
              </div> `
  })

  allReels.innerHTML = sum;
}

addSum();

allReels.addEventListener('click', (dets) => {
  if(dets.target.className === "like"){
    if(!reels[dets.target.id].isLiked){
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked = true;
    }
    else {
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked = false;
    }
    addSum();
  }

  if(dets.target.className === "follow"){
    if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = true;
    }
    else {
      reels[dets.target.id].isFollowed = false;
    }
    addSum();
  }

  if(dets.target.className === "comment"){
    reels[dets.target.id].commentCount++;
    addSum();
  }

  if(dets.target.className === "share"){
    reels[dets.target.id].shareCount++;
    addSum();
  }





})