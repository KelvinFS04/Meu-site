//mapa do bot

function ataque(ID)
{
    console.log(ID)
    let elemento =  document.getElementById(ID);
    if (document.getElementById(ID).outerText != "Água") 
    {
        console.log(document.getElementById(ID).outerText);
        elemento.style.backgroundImage = "url('Explosão.png')";
        elemento.style.backgroundColor = "transparent"
        elemento.innerHTML = "";
        document.getElementById(ID).disabled = true;
    }
    else
    {
        console.log("Água");
        elemento.style.backgroundImage = "url('Água.png')";
        elemento.style.backgroundColor = "transparent"
        elemento.innerHTML = "";
        elemento.disabled = true;

    }
}   

function geraMapa()
{
    Tabela = "";
    for (let i = 0; i < 8; i++){
        Tabela += "<tr>";
        for (let j = 0; j < 8; j++){
            Tabela += '<td> <button id = "x' + j +
            'y' + i + '"onclick="ataque(this.id)"  style="color: white;" >Água</button></td>';
        }
        Tabela += "</tr>";
    }
    document.getElementById("mapa").innerHTML = Tabela;
    adicionaEmbarcações();

    TabelaP = "";
    for (let i = 0; i < 8; i++){
        TabelaP += "<tr>";
        for (let j = 0; j < 8; j++){
            TabelaP += '<td> <button id = "x' + j +
            'y' + i + 'p" style="color: white;" >Água</button></td>';
        }
        TabelaP += "</tr>";
    }
    document.getElementById("mapaJogador").innerHTML = TabelaP;

}

function adicionaSubmarinos()
{
    
    for (let i = 0; i < 5; i++) 
    {
       
        id = "x" + numRandômico(0, 7) + "y" + numRandômico(0, 7);
        if (document.getElementById(id).outerText == "Água") 
        {
            document.getElementById(id).style.color = "white";
            document.getElementById(id).innerHTML = "S";
            
        }   
        else
        {
            i--;
        }
    }           
}

function adicionaTorpedeiro()
{
    quantidadeDeBarcos = 0;
    randomicoMapaLimitado = 6;
    randomicoMapa = 7;
    tamanhoEmbarcação = 2;
    while(quantidadeDeBarcos <3)
    {
        let orientação = numRandômico(1,2);
        if(orientação ==1)
        {
            do 
            {
                x = numRandômico(0, randomicoMapa); 
                y = numRandômico(0, randomicoMapaLimitado);
                id = "x" + x + "y" + y;
            
                deuCerto = true;
                

                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < tamanhoEmbarcação; j++) 
                    {
                        var auxiliarY = y + j;
                        var idAUX = "x" + x + "y" + auxiliarY;
                        if(document.getElementById(idAUX).outerText != "Água")
                        {
                            deuCerto = false;
                        }
                    }
                }
                else
                {
                    deuCerto = false;
                }
                
            } while (deuCerto == false );   
            
            
            for (let j = 0; j < tamanhoEmbarcação; j++) 
            {
                var auxiliarY = y + j;
                var idAUX = "x" + x + "y" + auxiliarY;
                document.getElementById(idAUX).innerHTML = "T";
                document.getElementById(idAUX).style.color = "white";
            }
        }
        else
        {
            do 
            {
                x = numRandômico(0, randomicoMapaLimitado); 
                y = numRandômico(0, randomicoMapa);
                id = "x" + x + "y" + y;
            
                deuCerto = true;
                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < 2; j++) 
                    {
                        var auxiliarX = x + j;
                        var idAUX = "x" + auxiliarX + "y" + y;
                        if(document.getElementById(idAUX).outerText != "Água")
                        {
                            deuCerto = false;
                        }
                    }
                }
                else
                {
                    deuCerto = false;
                }
                
            } while (deuCerto == false );   
            
            
            for (let j = 0; j < tamanhoEmbarcação; j++) 
            {
                var auxiliarX = x + j;
                var idAUX = "x" + auxiliarX + "y" + y;
                document.getElementById(idAUX).innerHTML = "T";
                document.getElementById(idAUX).style.color = "white";
            }
        }
        quantidadeDeBarcos++;
    }  
}

function adicionaCruzador()
{
    quantidadeDeBarcos = 0;
    randomicoMapaLimitado = 5;
    randomicoMapa = 7;
    tamanhoEmbarcação = 3;
    while(quantidadeDeBarcos <2)
    {
        let orientação = numRandômico(1,2);
        if(orientação ==1)
        {
            do 
            {
                x = numRandômico(0, randomicoMapa); 
                y = numRandômico(0, randomicoMapaLimitado);
                id = "x" + x + "y" + y;
            
                deuCerto = true;
                

                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < tamanhoEmbarcação; j++) 
                    {
                        var auxiliarY = y + j;
                        var idAUX = "x" + x + "y" + auxiliarY;
                        if(document.getElementById(idAUX).outerText != "Água")
                        {
                            deuCerto = false;
                        }
                    }
                }
                else
                {
                    deuCerto = false;
                }
                
            } while (deuCerto == false );   
            
            
            for (let j = 0; j < tamanhoEmbarcação; j++) 
            {
                var auxiliarY = y + j;
                var idAUX = "x" + x + "y" + auxiliarY;
                document.getElementById(idAUX).innerHTML = "C";
                document.getElementById(idAUX).style.color = "white";
            }
        }
        else
        {
            do 
            {
                x = numRandômico(0, randomicoMapaLimitado); 
                y = numRandômico(0, randomicoMapa);
                id = "x" + x + "y" + y;
            
                deuCerto = true;
                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < 2; j++) 
                    {
                        var auxiliarX = x + j;
                        var idAUX = "x" + auxiliarX + "y" + y;
                        if(document.getElementById(idAUX).outerText != "Água")
                        {
                            deuCerto = false;
                        }
                    }
                }
                else
                {
                    deuCerto = false;
                }
                
            } while (deuCerto == false );   
            
            
            for (let j = 0; j < tamanhoEmbarcação; j++) 
            {
                var auxiliarX = x + j;
                var idAUX = "x" + auxiliarX + "y" + y;
                document.getElementById(idAUX).innerHTML = "C";
                document.getElementById(idAUX).style.color = "white";
            }
        }
        quantidadeDeBarcos++;
    }  
}

function adicionaPortaAviões()
{
    quantidadeDeBarcos = 0;
    randomicoMapaLimitado = 4;
    randomicoMapa = 7;
    tamanhoEmbarcação = 4;
    while(quantidadeDeBarcos <1)
    {
        let orientação = numRandômico(1,2);
        if(orientação ==1)
        {
            do 
            {
                x = numRandômico(0, randomicoMapa); 
                y = numRandômico(0, randomicoMapaLimitado);
                id = "x" + x + "y" + y;
            
                deuCerto = true;
                

                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < tamanhoEmbarcação; j++) 
                    {
                        var auxiliarY = y + j;
                        var idAUX = "x" + x + "y" + auxiliarY;
                        if(document.getElementById(idAUX).outerText != "Água")
                        {
                            deuCerto = false;
                        }
                    }
                }
                else
                {
                    deuCerto = false;
                }
                
            } while (deuCerto == false );   
            
            
            for (let j = 0; j < tamanhoEmbarcação; j++) 
            {
                var auxiliarY = y + j;
                var idAUX = "x" + x + "y" + auxiliarY;
                document.getElementById(idAUX).innerHTML = "PA";
                document.getElementById(idAUX).style.color = "white";
            }
        }
        else
        {
            do 
            {
                x = numRandômico(0, randomicoMapaLimitado); 
                y = numRandômico(0, randomicoMapa);
                id = "x" + x + "y" + y;
            
                deuCerto = true;
                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < 2; j++) 
                    {
                        var auxiliarX = x + j;
                        var idAUX = "x" + auxiliarX + "y" + y;
                        if(document.getElementById(idAUX).outerText != "Água")
                        {
                            deuCerto = false;
                        }
                    }
                }
                else
                {
                    deuCerto = false;
                }
                
            } while (deuCerto == false );   
            
            
            for (let j = 0; j < tamanhoEmbarcação; j++) 
            {
                var auxiliarX = x + j;
                var idAUX = "x" + auxiliarX + "y" + y;
                document.getElementById(idAUX).innerHTML = "PA";
                document.getElementById(idAUX).style.color = "white";
            }
        }
        quantidadeDeBarcos++;
    }  
}

function numRandômico(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function adicionaEmbarcações()
{
    adicionaPortaAviões();
    adicionaCruzador();
    adicionaTorpedeiro();
    adicionaSubmarinos();
}