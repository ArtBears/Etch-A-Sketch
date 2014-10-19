$(document).ready(function() {
    var $wrapper = $("#wrapper");
    var $table = $("#table");
    var $box = $(".blue");

    //function takes a
    var createTable = function(counter, table) {
        
        resizeClass();
        removeTable();
        
        //"<tr><td><div class=blue></div></td></tr>"
        var html_string = "";
        var grid_height = ($wrapper.height()/counter)-2;
        var grid_width = ($wrapper.width()/counter)-2;
        
        for(var i = counter; i > 0; i--){
            html_string += "<tr>";
            for(var j = counter; j > 0; j--){
               html_string += "<td><div class=blue style='height:" 
                        + grid_height 
                        + "px; width:" 
                        + grid_width 
                        + "px;'></div></td>";
            }
            html_string += "</tr>"
        }
        table.append(html_string);
    };
    
    var removeTable = function(){
        $("tr").remove();
    };
    
    var resizeClass = function() {
        $(document).on('load', "button[name=box_ok]", function() {
            $(".blue").css("height", "200px");
        });
    };
    
    //When mouse hovers over a box the box will change color
    $(document).on("mouseover",".blue", function(){
        $(this).css('background-color', 'blue');
    });
    
    //React to button click and run createTable()
    $(document).on("click", "button[name=box_ok]", function(){
        var input_box = parseInt($("input[name=num_boxes]").val());
        createTable(input_box, $table);
    });
    
//    createTable(2, $table);
});



//html_string +=                                   "<td><div class=blue style='height=" + grid_height +"px, width=" + grid_width + "px'></div></td>";
/*
    var grid_height = $wrapper.height()/counter;
    var grid_width = $wrapper.width()/counter;
    $box.css('height',grid_height);
    $box.css('width', grid_width);
    
    html_string +=                                   "<td><div class=blue></div></td>";

*/
