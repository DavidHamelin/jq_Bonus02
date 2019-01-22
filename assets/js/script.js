$(function () {
    var random = Math.floor(Math.random() * (3));
    var choice = ['Pierre', 'Feuille', 'Ciseaux'];
    var userAnswer;
    var win = 0;
    var lose = 0;
    var counter = 0;
    $('#stone').click(function () {
        userAnswer = 0;
    });
    $('#leaf').click(function () {
        userAnswer = 1;
    });
    $('#scissors').click(function () {
        userAnswer = 2;
    });
    $('#shifumi').click(function () {
        if ((userAnswer == 0 && random == 1) || (userAnswer == 1 && random == 2) || (userAnswer == 2 && random == 0)) {
            $('textarea').text(`Perdu avec ${choice[userAnswer]}... Votre adversaire avait choisi : ${choice[random]} !`);
            lose++;
        }
        else if ((userAnswer == 0 && random == 2) || (userAnswer == 1 && random == 0) || (userAnswer == 2 && random == 1)) {
            $('textarea').text(`Gagné avec ${choice[userAnswer]} !!! Votre adversaire avait choisi : ${choice[random]} !`);
            win++;
        }
        else {
            $('textarea').text(`Egalité avec ${choice[userAnswer]} ! Votre adversaire avait choisi : ${choice[random]} !`);
        }
        counter++;
        $('input').val(`Victoires : ${win} / Défaites :  ${lose} / Nombre de parties : ${counter}`);
        random = Math.floor(Math.random() * (3));
    });
});