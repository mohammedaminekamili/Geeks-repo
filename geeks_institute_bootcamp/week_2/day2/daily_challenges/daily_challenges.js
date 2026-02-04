class Video{
    constructor(title,uploader,time){
        this.title=title
        this.uploader=uploader
        this.time=time

    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`)
    }

}

const firstVid=new Video("tuto","bahaj",15)
firstVid.watch()
const secondVid=new Video("song","X",3)


const videoData = [
    { title: "JS Tutorial", uploader: "Ben", time: 300 },
    { title: "Cooking Pasta", uploader: "Maria", time: 600 },
    { title: "Workout Routine", uploader: "Alex", time: 1200 },
    { title: "Cats Being Cats", uploader: "Sarah", time: 60 },
    { title: "Node.js Basics", uploader: "John", time: 900 }
];

const videoInstances = videoData.map(data => {
    return new Video(data.title, data.uploader, data.time);
});


