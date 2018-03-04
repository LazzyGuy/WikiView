
// connection function 

function searchQuery(searchPara){

    wikiUrlSearch  = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='+ searchPara +'&srlimit=10&formatversion=2&format=json';

    $.ajax({
        url: wikiUrlSearch,
        dataType: 'jsonp',
        success: function(data){
            changeState(data.query.search);
        }
    })
    
}

function changeState(data){
    $('header').addClass('hide');
    $('.fcc').addClass('hide');
    $('.result').removeClass('hide');

    // console.log(data);
    $(".res").remove();
    $(".result").append('<div class="res"></div>')
    for(let i = 0;i<data.length;i++){
        textChange(data[i].title,data[i].snippet)
    }

}

function textChange(title,dis){
    var newHedding = '<h1>'+title+'</h1>'
    var newPara =  '<p>'+dis+'</p>'
    var link = '<a href="https://en.wikipedia.org/wiki/'+title+'" target="_blank">Explore....</a>'
    $(".res").append(newHedding,newPara,link)
}




$('#searchBtn').click(function(){
    var searchText = $("#searchText").val();
    if(searchText!=''){
        searchQuery(searchText);        
    }else{
        alert("Enter the search query!")
    }
})

$("#searchText").keypress(function(e){
    const key = e.which;
    var searchText = $("#searchText").val();
    if(key==13&&searchText!=''){
        searchQuery(searchText);
    }
})
