function start()
{
    var table=document.getElementById('XOTable');
    var cells=table.getElementsByTagName('td');
    for(i=0;i<cells.length;i++)
    {
        var cell=cells[i];
        var clickhandler=function(item)
        {
            return function()
            {
                if(!table.classList.contains('blocked'))
                {
                    if(!item.classList.contains('selected'))
                    {
                        item.innerHTML='X'
                        item.classList.add('selected');
                        var nonselected = document.querySelectorAll('td:not(.selected)');
                        var randomelem = nonselected[Math.floor(Math.random()*nonselected.length)];
                        if(nonselected.length > 0) 
                        {
                            randomelem.innerHTML = 'O';
                            randomelem.classList.add('selected');
                            if(Winner())
                            {
                                table.classList.add('blocked');
                            };
                        } 
                        else
                        {
                            alert('Game over!!!')
                        }
                    }
                    else
                    {
                        alert('This cell is already selected!!!')
                    }
                }
                else{
                    alert('Table is blocked!!!')
                }
            };
        };
        cell.onclick=clickhandler(cell);
    };


}
function Winner()
{
//TO DO
//Check if player win
//return true  
return false 
}