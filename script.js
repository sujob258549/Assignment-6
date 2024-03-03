


const allPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    data.posts.forEach(item => {
        // console.log(item)

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="w-full mb-5 flex flex-col md:flex-row gap-4 bg-slate-200 p-10 rounded-xl">
                    <div class="relative w-[50px]">
                        <img class="p-2 w-28 rounded-md bg-white" src="${item.image}" alt="">
                        <div class="h-3 w-3 rounded-full bg-red-600 absolute -top-1 -right-1"></div>

                    </div>
                    <div>
                        <div class="flex gap-3 flex-wrap">
                            <h3 class="text-sm inter font-medium"># ${item.category}</h3>
                            <h3 class="text-sm inter font-medium">Author : ${item.author.name}</h3>
                        </div>
                        <h3 class="text-xl font-bold py-2">
                        ${item.title}
                        </h3>
                        <p class="text-sm inter">It’s one thing to subject yourself to ha Halloween costume mishap
                            because, hey that’s your prerogative</p>

                        <div class="flex flex-col md:flex-row justify-between border-dashed  border-t-2 mt-4 pt-4 border-sky-100">
                            <div class="flex gap-5">
                                <div class="flex gap-3">
                                    <img src="./img/logo/massage.png" alt="">
                                    <p>${item.comment_count}</p>
                                </div>
                                <div class="flex gap-3">
                                    <img src="./img/logo/viaews.png" alt="">
                                    <p>${item.view_count}</p>
                                </div>
                                <div class="flex gap-3">
                                    <img src="./img/logo/time.png" alt="">
                                    <p>${item.posted_time}</p>
                                </div>
                            </div>

                            <div  class="modal-show flex justify-end md:mt-0 mt-5">
                                <img src="./img/logo/mail.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                
        `;
        // console.log(item.description)
        const newDiv = document.getElementById('main-div');
        newDiv.appendChild(div);


    });
};


const latestPost = async () => {
    const res = await fetch(' https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    data.forEach(item => {
        const gridDiv = document.getElementById('grid-div');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="p-5 border-2 border-sky-200 rounded-xl">
        <img class="bg-slate-200 p-5 rounded-xl w-full" src="${item.cover_image}" alt="">
        <div class="flex gap-3 items-center mr-5 mt-5">
            <img src="./img/logo/calender.png" alt="">
            <p>${item.author.posted_date}</p>
        </div>
        <h3 class="text-[18px] font-bold py-2">${item.title}</h3>
        <p class="py-2">${item.description} </p>
        <div class="flex gap-3 items-center mr-5">
            <img class="w-12 rounded-full" src="${item.profile_image}" alt="">
            <div>
                <p class="text-sm font-bold">${item.author.name}</p>
                <p>${item.author.posted_date}</p>
            </div>
        </div>
    </div>
        
        `;
console.log(item)
        gridDiv.appendChild(div);

    });

    };
const modalShowCollection = document.getElementsByClassName('modal-show');

for (const modalElement of modalShowCollection) {
    console.log(modalElement);
}



// const allModal = () => {
//     const modalShow = document.getElementsByClassName('modal-show');
//     for (const element of modalShow) {
//         console.log(element);
//     }
//     console.log(modalShow)
// };

allPost();
latestPost();
// allModal();