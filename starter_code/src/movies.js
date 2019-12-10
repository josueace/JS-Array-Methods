/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    if(arr.length===0){
        return []
    }
   const newArr= arr.sort((a,b)=>{
    if(a.year !==b.year){
    return (a.year-b.year)
} else if (a.title > b.title){
    return 1;
} else if (a.title < b.title){
return -1;
} else{
return 0;
}

});
return newArr;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr){
    const filterMovies= arr.filter(movie=>{
        
        const bigWords=movie.genre.reduce((sum,word)=>sum+word);
        return (movie.director==="Steven Spielberg" && bigWords.includes("Drama"))
            
    })
    return filterMovies.length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){

    let newArr=[];
    for(let i=0;i<arr.length;i++){
        newArr.push(arr[i]);
    }
    const sortedArr=newArr.sort((a,b)=>{
        if(a.title >b.title){
            return 1;
        }
        if(a.title<b.title){
            return -1;
        }
        return 0
    });
    
   
   const filteredArr= sortedArr.filter(movie=>{
       return sortedArr.indexOf(movie)<20;
   })

    const mapArr=filteredArr.map(movie=>{
        return movie.title;
    })

    return mapArr;
    
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
    if(arr.length ===0){
        return 0;
    }
    const sumRate=arr.reduce((accumulator,currentValue)=>{
        
    if(currentValue.rate ==="" ){
            return accumulator+0;
        }
        else if("rate" in currentValue){
            
    }else {
        return accumulator+0;
    }
    
        return accumulator+currentValue.rate
    
},0);
    const avgRate= (sumRate/arr.length).toFixed(2);

    return parseFloat(avgRate);
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
    const dramaMovies=arr.filter(movie=>{
        const bigWords=movie.genre.reduce((sum,word)=>sum+word);
        return bigWords.includes("Drama");
    });
    const avgDrama=ratesAverage(dramaMovies);

    return avgDrama;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){
    if(arr.length===0){
        return [];
    }
    const mapArr=arr.map(movie=>{
        let hourTime=movie.duration[0];

        console.log(hourTime);
        //let minutes=0;
        var string = movie.duration.substr(2,movie.duration.length);
        var minutes = string.match(/\d+/g).map(Number);
        
        let totalMinutes=parseInt(hourTime)*60+parseInt(minutes);
        //console.log(totalMinutes);
        return{
            "title":movie.title,
            "year":movie.year,
            "director":movie.director,
            "duration":totalMinutes,
            "genre":movie.genre,
            "rate":movie.rate
        }
    })
    return mapArr;
}
console.log(turnHoursToMinutes([{
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.3
  }]));
// BONUS Iteration: Best yearly rate average - Best yearly rate average
