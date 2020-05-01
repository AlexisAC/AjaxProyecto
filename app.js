$(document).ready(function () {
    console.log('text');
    var global_num = "";
    var global_res = "";
    $('#busqueda').keyup(function (e) {
        if ($('#busqueda').val().length > 2) {
            let search = $('#busqueda').val();
            $.ajax({
                url: 'https://raw.githubusercontent.com/AlexisAC/AlexisAC.github.io/master/Perritos.txt',
                dataType: "text",
                success: function (data) {
                    var res = data.toLowerCase().split('\n');
                    global_res = res;
                    var encontro = false;
                    var numerito = -1;
                    for (let x = search.length; x > 0; x--) {
                        for (let index = 0; index < res.length; index++) {
                            value = res[index];
                            if(value.substring(0,x)==search.substring(0,x)){
                                encontro = true;
                                numerito = index;
                            }
                            if (encontro) break;
                        }
                        if (encontro) break;
                }
                    var num = numerito;
                    if (num != -1) {
                        global_num = num;
                        var final = "";
                        var temp_num = num;
                        var entro = false;
                        for (let index = temp_num; index < temp_num + 15; index++) {
                            if (index > 898) {
                                entro = true;
                                final += "<li>" + res[index - 899] + "</li>";

                            } else {
                                final += "<li>" + res[index] + "</li>";
                            }
                        }
                        if (entro) {
                            global_num -= 899;
                            entro = false;
                        }
                        $('#datos').html(final);
                    }
                }
            })
        } else {
            var final = "";
            $('#datos').html(final);
        }
    })
    $('#adelante').click(function () {
        $('#busqueda').val('');
        var final = "";
        var temp_num = global_num + 15;
        var res = global_res;
        global_num = temp_num;
        var entro = false;
        for (let index = temp_num; index < temp_num + 15; index++) {
            if (index > 898) {
                entro = true;
                final += "<li>" + res[index - 899] + "</li>";
            } else {
                final += "<li>" + res[index] + "</li>";
            }
        }
        if (entro) {
            global_num -= 899;
            entro = false;
        }
        $('#datos').html(final);
    })

    $('#atras').click(function () {
        $('#busqueda').val('');
        var final = "";
        var temp_num = global_num - 15;
        global_num = temp_num;
        var res = global_res;
        var entro = false;
        for (let index = temp_num; index < temp_num + 15; index++) {
            if (index < 0) {
                entro = true;
                final += "<li>" + res[index + 899] + "</li>";
            } else {
                final += "<li>" + res[index] + "</li>";
            }
        }
        if (entro) {
            global_num += 899;
            entro = false;
        }
        $('#datos').html(final);
    })
    $('#atras').click(function () {
        var final = "";
        $('#busqueda').val('');
        $('#datos').html(final);
    })
});