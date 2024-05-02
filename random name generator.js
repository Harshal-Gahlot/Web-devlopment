function getWord(word1, word2, word3){
    rand = Math.random()
    if (rand < 0.333333){
        return word1
    }
    else if (rand < 0.66666666){
        return word2
    }
    else {
        return word3
    }
}

console.log(`${getWord("crazy", "Amazing", "Fire")} ${getWord("Engine","Foods","Garments")} ${getWord("Bros","Limited","Hub")}`)