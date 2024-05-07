function createCard(titleName, cName, views, monthsAgo, duration, thumbnailSource){
    let cont = document.querySelector(".container");
    document.body.style.backgroundColor = 'yellow';

    let card = document.createElement("div");
    card.style.margin = '20px auto';
    card.style.color = "White";
    card.style.backgroundColor = "#000000ee";
    card.style.width = "80vw";
    card.style.height = '100px';
    card.style.display = "flex";
    card.style.borderRadius = '12px';
    card.style.gap = '10px';
    card.style.position = 'relative';
    cont.append(card);

    let thumb = document.createElement("img");
    thumb.src = thumbnailSource;
    thumb.alt = "Thumbnail";
    thumb.style.height = '100px';
    thumb.style.borderRadius = '12px';

    let videoLength = document.createElement("div")
    videoLength.style.position = "absolute"
    videoLength.style.backgroundColor = "#000000dd"
    videoLength.innerText = duration
    videoLength.style.fontSize = '14px'
    videoLength.style.borderRadius = '4px'
    videoLength.style.padding = '0px 4px 1px 4px'
    videoLength.style.left = '123px'
    videoLength.style.bottom = '5px'

    card.append(videoLength);
    card.append(thumb);
    
    let desc = document.createElement("div"); 
    
    let titlebox = document.createElement("h1");
    titlebox.style.fontSize = '16px';
    titlebox.style.color = 'white';
    // titlebox.innerText = `${titleName.slice(0,80)}...`;
    titlebox.innerText = titleName;
    titlebox.style.width = 'calc(78vw - 178px) '
    titlebox.style.whiteSpace = 'nowrap';
    titlebox.style.overflow = 'hidden';
    titlebox.style.textOverflow = "ellipsis";

    desc.append(titlebox)
    
    detailsbox = document.createElement('p');
    detailsbox.style.color = "gray"
    detailsbox.innerText = `${cName} • ${getViewValue(views)} • ${monthsAgo} months ago` 
    desc.append(detailsbox)
    card.append(desc);
}

function getViewValue(views){
    if (views < 1000){return views}
    else if (views < 1000000) {
        n = 1000
        unit = 'K'}
    else if (views < 1000000000) {
        n = 1000000
        unit = 'M'}
    else if (views < 1000000000000) {
        n = 1000000000
        unit = 'B'}

    views = String(views/n)
    if (views[2] == '.') {return `${views.slice(0,2)}${unit}`}
    return `${views.slice(0,3)}${unit}`
}

createCard("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73", "CodeWithHarry", 
48975 , 5, "24:32", "assets/codewithharryVidThumb73.jpg")
createCard("Events, Event Bubbling, setInterval & setTimeout | Sigma Web Development Course - Tutorial #74", "CodeWithHarry", 
64314  , 4, "27:50", "assets/codewithharryVidThumb74.jpg")
createCard("JavaScript Callbacks & Promises | Sigma Web Development Course - Tutorial #75", "CodeWithHarry", 
74986 , 4, "32:23", "assets/codewithharryVidThumb75.jpg")