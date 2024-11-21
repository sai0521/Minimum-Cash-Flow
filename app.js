function getpeople(){
    var total = document.getElementById("numinput").value;

    if(total<2 || total>15){
        alert("enter the value between 2 to 15 only ..");
        return;
    }
    var names = document.getElementById("names");
    
    names.innerHTML ='';

    names.innerHTML+="<h2>Enter the names of candidates</h2>";
    names.innerHTML+="<h3>(names must be unique)</h3>"

    for(var i=0;i<total;i++){
        var person = document.createElement("div");
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.textContent=`person ${i+1}`;
        input.setAttribute("id",`person${i+1}`);
        input.type="text";

        person.appendChild(label);
        person.appendChild(input);
        //console.log(input);
        names.appendChild(person);
    }

    var btn = document.createElement("button");
    btn.textContent = "generate table";
    btn.className ="btn";
    names.appendChild(btn);
    btn.onclick = function(){
        generatetable(total);
    }
}

function generatetable(total){
    var table = document.createElement("table");
    var hrow = document.createElement("tr");
    hrow.innerHTML+="<th></th>";
    for(var i=0;i<total;i++){
        var cell = document.createElement("th");
        cell.textContent = document.getElementById(`person${i+1}`).value;
        //console.log(cell);
        if(cell.textContent =="") {
            alert("names must not empty...");
            return;
            table.innerHTML="";
        }
        hrow.appendChild(cell);
    }
   table.appendChild(hrow);

    for(var i=0;i<total;i++){
        var row = document.createElement("tr");
        
        for(var j=0;j<=total;j++){
            var cell = document.createElement("th");
            if(j==0) cell.textContent = document.getElementById(`person${i+1}`).value;
            else{
                var inp = document.createElement("input");
                inp.type = "number";
                inp.id = `person${i+1}person${j}`;
                inp.value=0;
                cell.appendChild(inp);
            }
           // console.log(cell);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    console.log(table);
   var matrix = document.getElementById("matrix");
   matrix.innerHTML='';
   matrix.appendChild(table);

   var btn = document.createElement("button");
    btn.textContent = "calculate";
    btn.className ="btn";
    matrix.appendChild(btn);
    btn.onclick = function(){
       calculate(total);
    }
}

function calculate(total){
    var ans = document.getElementById("answer");
    ans.innerHTML="";
    var amount = [];
    for(var i=0;i<total;i++){
        amount[i]=0;
    }
    
    for(var i=0;i<total;i++){
        
        for(var j=0;j<total;j++){
            var v1 = document.getElementById(`person${i+1}person${j+1}`).value;
            var v2 = document.getElementById(`person${j+1}person${i+1}`).value;
            
            if(isNaN(Number(v2)) || isNaN(Number(v1))){
                alert("please check the values entered in table...");
                return;
            }
            
            amount[i] += Number(v2) -Number(v1);
           
        }
    }

    
    console.log(amount);

    mincashflow(amount);
}

function getmax_ind(amount){
    var ind=0;

    for(var i=1;i<amount.length;i++){
        if(amount[i] > amount[ind]){
            ind=i;
        }
    }

    return ind;
}

function getmin_ind(amount){
    var ind=0;

    for(var i=1;i<amount.length;i++){
        if(amount[i] < amount[ind]){
            ind=i;
        }
    }

    return ind;
}

function minof2(x , y)
{
        return (x < y) ? x: y;
}

function mincashflow(amount){

    var maxCredit_ind = getmax_ind(amount);
    var maxDebit_ind = getmin_ind(amount);


    if(amount[maxCredit_ind]==0 && amount[maxDebit_ind]==0) {
        return;
    }

   
    
    var min_amt = minof2(-1 * amount[maxDebit_ind],amount[maxCredit_ind]);
    amount[maxCredit_ind] -=min_amt;
    amount[maxDebit_ind] +=min_amt;

    var p1 = document.getElementById(`person${maxDebit_ind+1}`);
    var p2 = document.getElementById(`person${maxCredit_ind+1}`);


    var ans = document.getElementById("answer");
    var p = document.createElement("p");
    p.textContent = p1.value + " pays " + min_amt + " to " + p2.value;
    ans.appendChild(p);

    
    mincashflow(amount);

}