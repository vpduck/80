name_of_the_student_array=[];

function submit()
{
    var display_student_array=[];
    for(var j=1;j<=4;j++)
    {
        var name_1 = document.getElementById("name_of_the_student_"+j).value;
        name_of_the_student_array.push(name_1);

    }
    var length_studentarray=name_of_the_student_array.length;

    for(var k=0;k<length_studentarray;k++)
    {
        display_student_array.push("<h4>NAME - "+ name_of_the_student_array[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;

    var rem=display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=rem;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting()
{
    name_of_the_student_array.sort();
    var display_student_array_sorting=[];
    var length_studentarray=name_of_the_student_array.length; 

    for(var k=0;k<length_studentarray;k++)
    {
        display_student_array_sorting.push("<h4>NAME - "+ name_of_the_student_array[k]+"</h4>");
    }

    var rem=display_student_array_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=rem;
    
    }
    function new_update()
    {
        document.getElementById("display_name_without_commas").innerHTML="<h1>"+ name_of_the_student_array+"</h1>";   
    }