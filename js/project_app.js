
const media = [
    {
      title: 'Hop on Pop', 
      description: "A delightful children's book.",
      type: 'book',
      contributor: 'Dr. Suess',
      showDetail: false,
    },
    {
      title: 'The Joy of Painting', 
      description: "Create a world of happy little trees!",
      type: 'DVD',
      contributor: 'Bob Ross',
      showDetail: false
    },
    {
      title: 'Supernatural: The Complete 12th Season', 
      description: "A (literally) neverending roadtrip.",
      type: 'DVD',
      contributor: "",
      showDetail: false
    },
    {
      title: 'Planet Earth II', 
      description: "Hours of beautiful but heart attack-inducing nature footage",
      type: 'streaming video',
      contributor: 'David Attenborough',
      showDetail: false,
    },
    {
      title: 'Titanic', 
      description: "The boat sinks.",
      type: 'DVD',
      contributor: 'James Cameron',
      showDetail: false,
    },
    {
      title: 'The Sirens of Titan', 
      description: "Mankind flung its advance agents ever outward, ever outward... it flung them like stones.",
      type: 'book',
      contributor: 'Kurt Vonnegut',
      showDetail: false,
    },
    {
      title: 'Better Call Saul', 
      description: "A slow-burning Breaking Bad prequel.",
      type: 'streaming video',
      contributor: '',
      showDetail: false,
    }
  ]

const app = new Vue({
    el: '#media-list',
    data: {
        title: 'Treehouse Public Library',
        mediaList: media,
        type: ''
    },
    methods: {
        // showInfoInit is design to accept the status, media and index of each card
        // this allows us to check the status of the card, meaning if the card is open or closed
        // At first all cards are closed, thus we will fall to the else statement which
        // call the showInfo method
        showInfoInit: function(status, mediaList, index) {
          if(status){
            mediaList[index].showDetail = !mediaList[index].showDetail;
          } else {
            this.showInfo(mediaList, index);
          }
        },
        // showInfo takes 2 parameters; media and index
        // media holds the array of cards and index holds the value of the card being clicked on
        // inside this method we use for loop to run through each card and do the following:
        // if i(the number that increases each time the loop runs) is === index(the index of the clicked card)
        // we set that card's showDetail to true, which will make it open card and it will show the information
        // else sets all other cards' showDetail to false because they fail the if statement 
        showInfo: function(mediaList, index) {
          for (let i = 0; i < mediaList.length; i++) {
            if (i === index){
              mediaList[i].showDetail = true;
            } else {
              mediaList[i].showDetail = false;
            }
          }
        },
        filterList: function() {
            this.type = event.target.value;
        }
    },
    computed: {
        uniqueItemsList: function(){
            const types = [];
            this.mediaList.forEach((item) => {
                if(!types.includes(item.type)) {
                    types.push(item.type);
                }
            });
            return types;
        }
    }
});