


const allPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    data.posts.forEach(item => {
        console.log(item)

        const div = document.createElement('div');
        div.innerHTML =`
        <div class="w-full mb-5 flex flex-col md:flex-row gap-4 bg-slate-200 p-10 rounded-xl">
                    <div class="relative w-[50px]">
                        <img class="p-2 w-28 rounded-md bg-white" src="${item.image}" alt="">
                        <div class="h-3 w-3 rounded-full bg-red-600 absolute -top-1 -right-1"></div>

                    </div>
                    <div>
                        <div class="flex gap-3 flex-wrap">
                            <h3 class="text-sm inter font-medium"># ${item.category}</h3>
                            <h3 class="text-sm inter font-medium">Author : Awlad Hossain</h3>
                        </div>
                        <h3 class="text-xl font-bold py-2">
                            10 Kids Unaware of Their Halloween Costume
                        </h3>
                        <p class="text-sm inter">It’s one thing to subject yourself to ha Halloween costume mishap
                            because, hey that’s your prerogative</p>

                        <div class="flex flex-col md:flex-row justify-between border-dashed  border-t-2 mt-4 pt-4 border-sky-100">
                            <div class="flex gap-5">
                                <div class="flex gap-3">
                                    <img src="./img/logo/massage.png" alt="">
                                    <p>560</p>
                                </div>
                                <div class="flex gap-3">
                                    <img src="./img/logo/viaews.png" alt="">
                                    <p>560</p>
                                </div>
                                <div class="flex gap-3">
                                    <img src="./img/logo/time.png" alt="">
                                    <p>560</p>
                                </div>
                            </div>

                            <div class="flex justify-end md:mt-0 mt-5">
                                <img src="./img/logo/mail.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
        `;
        const newDiv = document.getElementById('main-div');
        newDiv.appendChild(div);

    });
};
allPost();