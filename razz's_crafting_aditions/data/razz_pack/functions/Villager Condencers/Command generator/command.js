
function command(block, compression){
    let posx = "~"
    let posy = "~1"
    let posz = "~"

    command = "/summon villager " + posx + " " + posy + " " + posz + " " +
        "{" +
        "Invunlnerable:1," +
        "Silent:1," +
        "NoAI:1," +
        "CustomName:\"\\\"" + block + "_Condenser\\\"\"" +






        "}"

    console.log(command)


}


command("stone", 3)