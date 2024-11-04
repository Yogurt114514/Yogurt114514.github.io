function initAudioPlayer() {
    const audioPlayer = document.getElementById('player');
    const musicImage = document.querySelector('.music-player_image');
    const musicPointer = document.querySelector('.music-player_pointer');
    const controls = document.querySelector('.music-player_controls');

    const audioPlayer1 = document.getElementById('player1');
    const musicImage1 = document.querySelector('.music-player_image.i1');
    const musicPointer1 = document.querySelector('.music-player_pointer.p1');
    const controls1 = document.querySelector('.music-player_controls.c1');

    const audioPlayer2 = document.getElementById('player2');
    const musicImage2 = document.querySelector('.music-player_image.i2');
    const musicPointer2 = document.querySelector('.music-player_pointer.p2');
    const controls2 = document.querySelector('.music-player_controls.c2');
    
    const audioPlayer3 = document.getElementById('player3');
    const musicImage3 = document.querySelector('.music-player_image.i3');
    const musicPointer3 = document.querySelector('.music-player_pointer.p3');
    const controls3 = document.querySelector('.music-player_controls.c3');
    
    const audioPlayer4 = document.getElementById('player4');
    const musicImage4 = document.querySelector('.music-player_image.i4');
    const musicPointer4 = document.querySelector('.music-player_pointer.p4');
    const controls4 = document.querySelector('.music-player_controls.c4');
    
    const audioPlayer5 = document.getElementById('player5');
    const musicImage5 = document.querySelector('.music-player_image.i5');
    const musicPointer5 = document.querySelector('.music-player_pointer.p5');
    const controls5 = document.querySelector('.music-player_controls.c5');
    
    const audioPlayer6 = document.getElementById('player6');
    const musicImage6 = document.querySelector('.music-player_image.i6');
    const musicPointer6 = document.querySelector('.music-player_pointer.p6');
    const controls6 = document.querySelector('.music-player_controls.c6');
    
    const audioPlayer7 = document.getElementById('player7');
    const musicImage7 = document.querySelector('.music-player_image.i7');
    const musicPointer7 = document.querySelector('.music-player_pointer.p7');
    const controls7 = document.querySelector('.music-player_controls.c7');
    
    const audioPlayer8 = document.getElementById('player8');
    const musicImage8 = document.querySelector('.music-player_image.i8');
    const musicPointer8 = document.querySelector('.music-player_pointer.p8');
    const controls8 = document.querySelector('.music-player_controls.c8');
    
    const audioPlayer9 = document.getElementById('player9');
    const musicImage9 = document.querySelector('.music-player_image.i9');
    const musicPointer9 = document.querySelector('.music-player_pointer.p9');
    const controls9 = document.querySelector('.music-player_controls.c9');
    
    const audioPlayer10 = document.getElementById('player10');
    const musicImage10 = document.querySelector('.music-player_image.i10');
    const musicPointer10 = document.querySelector('.music-player_pointer.p10');
    const controls10 = document.querySelector('.music-player_controls.c10');
    
    const audioPlayer11 = document.getElementById('player11');
    const musicImage11 = document.querySelector('.music-player_image.i11');
    const musicPointer11 = document.querySelector('.music-player_pointer.p11');
    const controls11 = document.querySelector('.music-player_controls.c11');
    
    const audioPlayer12 = document.getElementById('player12');
    const musicImage12 = document.querySelector('.music-player_image.i12');
    const musicPointer12 = document.querySelector('.music-player_pointer.p12');
    const controls12 = document.querySelector('.music-player_controls.c12');
    
    if (audioPlayer) {
        audioPlayer.loop = true;
        // 播放事件
        audioPlayer.addEventListener('play', function () {
            musicImage.classList.add('play');
            musicPointer.classList.add('play');
            controls.classList.add('play');
        });
        // 暂停事件
        audioPlayer.addEventListener('pause', function () {
            musicImage.classList.remove('play');
            musicPointer.classList.remove('play');
            controls.classList.remove('play');
        });
    }
    if (audioPlayer1) {
        audioPlayer1.loop = true;
        // 1
        audioPlayer1.addEventListener('play', function () {
            musicImage1.classList.add('play');
            musicPointer1.classList.add('play');
            controls1.classList.add('play');
            audioPlayer2.pause();
            musicImage2.classList.remove('play');
            musicPointer2.classList.remove('play');
            controls2.classList.remove('play');
            audioPlayer3.pause();
            musicImage3.classList.remove('play');
            musicPointer3.classList.remove('play');
            controls3.classList.remove('play');
            audioPlayer4.pause();
            musicImage4.classList.remove('play');
            musicPointer4.classList.remove('play');
            controls4.classList.remove('play');
            audioPlayer5.pause();
            musicImage5.classList.remove('play');
            musicPointer5.classList.remove('play');
            controls5.classList.remove('play');
            audioPlayer6.pause();
            musicImage6.classList.remove('play');
            musicPointer6.classList.remove('play');
            controls6.classList.remove('play');
            audioPlayer7.pause();
            musicImage7.classList.remove('play');
            musicPointer7.classList.remove('play');
            controls7.classList.remove('play');
            audioPlayer8.pause();
            musicImage8.classList.remove('play');
            musicPointer8.classList.remove('play');
            controls8.classList.remove('play');
            audioPlayer9.pause();
            musicImage9.classList.remove('play');
            musicPointer9.classList.remove('play');
            controls9.classList.remove('play');
            audioPlayer10.pause();
            musicImage10.classList.remove('play');
            musicPointer10.classList.remove('play');
            controls10.classList.remove('play');
            audioPlayer11.pause();
            musicImage11.classList.remove('play');
            musicPointer11.classList.remove('play');
            controls11.classList.remove('play');
            audioPlayer12.pause();
            musicImage12.classList.remove('play');
            musicPointer12.classList.remove('play');
            controls12.classList.remove('play');
        });
        audioPlayer1.addEventListener('pause', function () {
            musicImage1.classList.remove('play');
            musicPointer1.classList.remove('play');
            controls1.classList.remove('play');
        });
    }
    if (audioPlayer2) {
        audioPlayer2.loop = true;
        // 2
        audioPlayer2.addEventListener('play', function () {
            musicImage2.classList.add('play');
            musicPointer2.classList.add('play');
            controls2.classList.add('play');
            audioPlayer1.pause();
            musicImage1.classList.remove('play');
            musicPointer1.classList.remove('play');
            controls1.classList.remove('play');
            audioPlayer3.pause();
            musicImage3.classList.remove('play');
            musicPointer3.classList.remove('play');
            controls3.classList.remove('play');
            audioPlayer4.pause();
            musicImage4.classList.remove('play');
            musicPointer4.classList.remove('play');
            controls4.classList.remove('play');
            audioPlayer5.pause();
            musicImage5.classList.remove('play');
            musicPointer5.classList.remove('play');
            controls5.classList.remove('play');
            audioPlayer6.pause();
            musicImage6.classList.remove('play');
            musicPointer6.classList.remove('play');
            controls6.classList.remove('play');
            audioPlayer7.pause();
            musicImage7.classList.remove('play');
            musicPointer7.classList.remove('play');
            controls7.classList.remove('play');
            audioPlayer8.pause();
            musicImage8.classList.remove('play');
            musicPointer8.classList.remove('play');
            controls8.classList.remove('play');
            audioPlayer9.pause();
            musicImage9.classList.remove('play');
            musicPointer9.classList.remove('play');
            controls9.classList.remove('play');
            audioPlayer10.pause();
            musicImage10.classList.remove('play');
            musicPointer10.classList.remove('play');
            controls10.classList.remove('play');
            audioPlayer11.pause();
            musicImage11.classList.remove('play');
            musicPointer11.classList.remove('play');
            controls11.classList.remove('play');
            audioPlayer12.pause();
            musicImage12.classList.remove('play');
            musicPointer12.classList.remove('play');
            controls12.classList.remove('play');
        });
            audioPlayer2.addEventListener('pause', function () {
            musicImage2.classList.remove('play');
            musicPointer2.classList.remove('play');
            controls2.classList.remove('play');
        });
    }
    if (audioPlayer3) {
        audioPlayer3.loop = true;
        // 3
        audioPlayer3.addEventListener('play', function () {
            musicImage3.classList.add('play');
            musicPointer3.classList.add('play');
            controls3.classList.add('play');
            audioPlayer1.pause();
            musicImage1.classList.remove('play');
            musicPointer1.classList.remove('play');
            controls1.classList.remove('play');
            audioPlayer2.pause();
            musicImage2.classList.remove('play');
            musicPointer2.classList.remove('play');
            controls2.classList.remove('play');
            audioPlayer4.pause();
            musicImage4.classList.remove('play');
            musicPointer4.classList.remove('play');
            controls4.classList.remove('play');
            audioPlayer5.pause();
            musicImage5.classList.remove('play');
            musicPointer5.classList.remove('play');
            controls5.classList.remove('play');
            audioPlayer6.pause();
            musicImage6.classList.remove('play');
            musicPointer6.classList.remove('play');
            controls6.classList.remove('play');
            audioPlayer7.pause();
            musicImage7.classList.remove('play');
            musicPointer7.classList.remove('play');
            controls7.classList.remove('play');
            audioPlayer8.pause();
            musicImage8.classList.remove('play');
            musicPointer8.classList.remove('play');
            controls8.classList.remove('play');
            audioPlayer9.pause();
            musicImage9.classList.remove('play');
            musicPointer9.classList.remove('play');
            controls9.classList.remove('play');
            audioPlayer10.pause();
            musicImage10.classList.remove('play');
            musicPointer10.classList.remove('play');
            controls10.classList.remove('play');
            audioPlayer11.pause();
            musicImage11.classList.remove('play');
            musicPointer11.classList.remove('play');
            controls11.classList.remove('play');
            audioPlayer12.pause();
            musicImage12.classList.remove('play');
            musicPointer12.classList.remove('play');
            controls12.classList.remove('play');
        });
        audioPlayer3.addEventListener('pause', function () {
            musicImage3.classList.remove('play');
            musicPointer3.classList.remove('play');
            controls3.classList.remove('play');
        });
    }
    if (audioPlayer4) {
        audioPlayer4.loop = true;
        // 4
        audioPlayer4.addEventListener('play', function () {
            musicImage4.classList.add('play');
            musicPointer4.classList.add('play');
            controls4.classList.add('play');
            audioPlayer1.pause();
            musicImage1.classList.remove('play');
            musicPointer1.classList.remove('play');
            controls1.classList.remove('play');
            audioPlayer2.pause();
            musicImage2.classList.remove('play');
            musicPointer2.classList.remove('play');
            controls2.classList.remove('play');
            audioPlayer3.pause();
            musicImage3.classList.remove('play');
            musicPointer3.classList.remove('play');
            controls3.classList.remove('play');
            audioPlayer5.pause();
            musicImage5.classList.remove('play');
            musicPointer5.classList.remove('play');
            controls5.classList.remove('play');
            audioPlayer6.pause();
            musicImage6.classList.remove('play');
            musicPointer6.classList.remove('play');
            controls6.classList.remove('play');
            audioPlayer7.pause();
            musicImage7.classList.remove('play');
            musicPointer7.classList.remove('play');
            controls7.classList.remove('play');
            audioPlayer8.pause();
            musicImage8.classList.remove('play');
            musicPointer8.classList.remove('play');
            controls8.classList.remove('play');
            audioPlayer9.pause();
            musicImage9.classList.remove('play');
            musicPointer9.classList.remove('play');
            controls9.classList.remove('play');
            audioPlayer10.pause();
            musicImage10.classList.remove('play');
            musicPointer10.classList.remove('play');
            controls10.classList.remove('play');
            audioPlayer11.pause();
            musicImage11.classList.remove('play');
            musicPointer11.classList.remove('play');
            controls11.classList.remove('play');
            audioPlayer12.pause();
            musicImage12.classList.remove('play');
            musicPointer12.classList.remove('play');
            controls12.classList.remove('play');
        });
        audioPlayer4.addEventListener('pause', function () {
            musicImage4.classList.remove('play');
            musicPointer4.classList.remove('play');
            controls4.classList.remove('play');
        });
    }
    if (audioPlayer5) {
        audioPlayer5.loop = true;
        // 5
        audioPlayer5.addEventListener('play', function () {
            musicImage5.classList.add('play');
            musicPointer5.classList.add('play');
            controls5.classList.add('play');
            audioPlayer1.pause();
            musicImage1.classList.remove('play');
            musicPointer1.classList.remove('play');
            controls1.classList.remove('play');
            audioPlayer2.pause();
            musicImage2.classList.remove('play');
            musicPointer2.classList.remove('play');
            controls2.classList.remove('play');
            audioPlayer3.pause();
            musicImage3.classList.remove('play');
            musicPointer3.classList.remove('play');
            controls3.classList.remove('play');
            audioPlayer4.pause();
            musicImage4.classList.remove('play');
            musicPointer4.classList.remove('play');
            controls4.classList.remove('play');
            audioPlayer6.pause();
            musicImage6.classList.remove('play');
            musicPointer6.classList.remove('play');
            controls6.classList.remove('play');
            audioPlayer7.pause();
            musicImage7.classList.remove('play');
            musicPointer7.classList.remove('play');
            controls7.classList.remove('play');
            audioPlayer8.pause();
            musicImage8.classList.remove('play');
            musicPointer8.classList.remove('play');
            controls8.classList.remove('play');
            audioPlayer9.pause();
            musicImage9.classList.remove('play');
            musicPointer9.classList.remove('play');
            controls9.classList.remove('play');
            audioPlayer10.pause();
            musicImage10.classList.remove('play');
            musicPointer10.classList.remove('play');
            controls10.classList.remove('play');
            audioPlayer11.pause();
            musicImage11.classList.remove('play');
            musicPointer11.classList.remove('play');
            controls11.classList.remove('play');
            audioPlayer12.pause();
            musicImage12.classList.remove('play');
            musicPointer12.classList.remove('play');
            controls12.classList.remove('play');
        });
        audioPlayer5.addEventListener('pause', function () {
            musicImage5.classList.remove('play');
            musicPointer5.classList.remove('play');
            controls5.classList.remove('play');
        });
    }
    if (audioPlayer6) {
        audioPlayer6.loop = true;
        // 6
        audioPlayer6.addEventListener('play', function () {
            musicImage6.classList.add('play');
            musicPointer6.classList.add('play');
            controls6.classList.add('play');
            audioPlayer1.pause();
            musicImage1.classList.remove('play');
            musicPointer1.classList.remove('play');
            controls1.classList.remove('play');
            audioPlayer2.pause();
            musicImage2.classList.remove('play');
            musicPointer2.classList.remove('play');
            controls2.classList.remove('play');
            audioPlayer3.pause();
            musicImage3.classList.remove('play');
            musicPointer3.classList.remove('play');
            controls3.classList.remove('play');
            audioPlayer4.pause();
            musicImage4.classList.remove('play');
            musicPointer4.classList.remove('play');
            controls4.classList.remove('play');
            audioPlayer5.pause();
            musicImage5.classList.remove('play');
            musicPointer5.classList.remove('play');
            controls5.classList.remove('play');
            audioPlayer7.pause();
            musicImage7.classList.remove('play');
            musicPointer7.classList.remove('play');
            controls7.classList.remove('play');
            audioPlayer8.pause();
            musicImage8.classList.remove('play');
            musicPointer8.classList.remove('play');
            controls8.classList.remove('play');
            audioPlayer9.pause();
            musicImage9.classList.remove('play');
            musicPointer9.classList.remove('play');
            controls9.classList.remove('play');
            audioPlayer10.pause();
            musicImage10.classList.remove('play');
            musicPointer10.classList.remove('play');
            controls10.classList.remove('play');
            audioPlayer11.pause();
            musicImage11.classList.remove('play');
            musicPointer11.classList.remove('play');
            controls11.classList.remove('play');
            audioPlayer12.pause();
            musicImage12.classList.remove('play');
            musicPointer12.classList.remove('play');
            controls12.classList.remove('play');
        });
        audioPlayer6.addEventListener('pause', function () {
            musicImage6.classList.remove('play');
            musicPointer6.classList.remove('play');
            controls6.classList.remove('play');
        });
    }
    if (audioPlayer7) {
        audioPlayer7.loop = true;
        // 7
        audioPlayer7.addEventListener('play', function () {
            musicImage7.classList.add('play');
            musicPointer7.classList.add('play');
            controls7.classList.add('play');
            audioPlayer1.pause();
            musicImage1.classList.remove('play');
            musicPointer1.classList.remove('play');
            controls1.classList.remove('play');
            audioPlayer2.pause();
            musicImage2.classList.remove('play');
            musicPointer2.classList.remove('play');
            controls2.classList.remove('play');
            audioPlayer3.pause();
            musicImage3.classList.remove('play');
            musicPointer3.classList.remove('play');
            controls3.classList.remove('play');
            audioPlayer4.pause();
            musicImage4.classList.remove('play');
            musicPointer4.classList.remove('play');
            controls4.classList.remove('play');
            audioPlayer5.pause();
            musicImage5.classList.remove('play');
            musicPointer5.classList.remove('play');
            controls5.classList.remove('play');
            audioPlayer6.pause();
            musicImage6.classList.remove('play');
            musicPointer6.classList.remove('play');
            controls6.classList.remove('play');
            audioPlayer8.pause();
            musicImage8.classList.remove('play');
            musicPointer8.classList.remove('play');
            controls8.classList.remove('play');
            audioPlayer9.pause();
            musicImage9.classList.remove('play');
            musicPointer9.classList.remove('play');
            controls9.classList.remove('play');
            audioPlayer10.pause();
            musicImage10.classList.remove('play');
            musicPointer10.classList.remove('play');
            controls10.classList.remove('play');
            audioPlayer11.pause();
            musicImage11.classList.remove('play');
            musicPointer11.classList.remove('play');
            controls11.classList.remove('play');
            audioPlayer12.pause();
            musicImage12.classList.remove('play');
            musicPointer12.classList.remove('play');
            controls12.classList.remove('play');
        });
        audioPlayer7.addEventListener('pause', function () {
            musicImage7.classList.remove('play');
            musicPointer7.classList.remove('play');
            controls7.classList.remove('play');
        });
    }
    if (audioPlayer8) {
        audioPlayer8.loop = true;
        // 8
        audioPlayer8.addEventListener('play', function () {
            musicImage8.classList.add('play');
            musicPointer8.classList.add('play');
            controls8.classList.add('play');
            audioPlayer1.pause();
            musicImage1.classList.remove('play');
            musicPointer1.classList.remove('play');
            controls1.classList.remove('play');
            audioPlayer2.pause();
            musicImage2.classList.remove('play');
            musicPointer2.classList.remove('play');
            controls2.classList.remove('play');
            audioPlayer3.pause();
            musicImage3.classList.remove('play');
            musicPointer3.classList.remove('play');
            controls3.classList.remove('play');
            audioPlayer4.pause();
            musicImage4.classList.remove('play');
            musicPointer4.classList.remove('play');
            controls4.classList.remove('play');
            audioPlayer5.pause();
            musicImage5.classList.remove('play');
            musicPointer5.classList.remove('play');
            controls5.classList.remove('play');
            audioPlayer6.pause();
            musicImage6.classList.remove('play');
            musicPointer6.classList.remove('play');
            controls6.classList.remove('play');
            audioPlayer7.pause();
            musicImage7.classList.remove('play');
            musicPointer7.classList.remove('play');
            controls7.classList.remove('play');
            audioPlayer9.pause();
            musicImage9.classList.remove('play');
            musicPointer9.classList.remove('play');
            controls9.classList.remove('play');
            audioPlayer10.pause();
            musicImage10.classList.remove('play');
            musicPointer10.classList.remove('play');
            controls10.classList.remove('play');
            audioPlayer11.pause();
            musicImage11.classList.remove('play');
            musicPointer11.classList.remove('play');
            controls11.classList.remove('play');
            audioPlayer12.pause();
            musicImage12.classList.remove('play');
            musicPointer12.classList.remove('play');
            controls12.classList.remove('play');
        });
        audioPlayer8.addEventListener('pause', function () {
            musicImage8.classList.remove('play');
            musicPointer8.classList.remove('play');
            controls8.classList.remove('play');
        });
    }
    if (audioPlayer9) {
        audioPlayer9.loop = true;
        // 9
        audioPlayer9.addEventListener('play', function () {
            musicImage9.classList.add('play');
            musicPointer9.classList.add('play');
            controls9.classList.add('play');
            audioPlayer1.pause();
            musicImage1.classList.remove('play');
            musicPointer1.classList.remove('play');
            controls1.classList.remove('play');
            audioPlayer2.pause();
            musicImage2.classList.remove('play');
            musicPointer2.classList.remove('play');
            controls2.classList.remove('play');
            audioPlayer3.pause();
            musicImage3.classList.remove('play');
            musicPointer3.classList.remove('play');
            controls3.classList.remove('play');
            audioPlayer4.pause();
            musicImage4.classList.remove('play');
            musicPointer4.classList.remove('play');
            controls4.classList.remove('play');
            audioPlayer5.pause();
            musicImage5.classList.remove('play');
            musicPointer5.classList.remove('play');
            controls5.classList.remove('play');
            audioPlayer6.pause();
            musicImage6.classList.remove('play');
            musicPointer6.classList.remove('play');
            controls6.classList.remove('play');
            audioPlayer7.pause();
            musicImage7.classList.remove('play');
            musicPointer7.classList.remove('play');
            controls7.classList.remove('play');
            audioPlayer8.pause();
            musicImage8.classList.remove('play');
            musicPointer8.classList.remove('play');
            controls8.classList.remove('play');
            audioPlayer10.pause();
            musicImage10.classList.remove('play');
            musicPointer10.classList.remove('play');
            controls10.classList.remove('play');
            audioPlayer11.pause();
            musicImage11.classList.remove('play');
            musicPointer11.classList.remove('play');
            controls11.classList.remove('play');
            audioPlayer12.pause();
            musicImage12.classList.remove('play');
            musicPointer12.classList.remove('play');
            controls12.classList.remove('play');
        });
        audioPlayer9.addEventListener('pause', function () {
            musicImage9.classList.remove('play');
            musicPointer9.classList.remove('play');
            controls9.classList.remove('play');
        });
    }
    if (audioPlayer10) {
        audioPlayer10.loop = true;
        // 10
        audioPlayer10.addEventListener('play', function () {
            musicImage10.classList.add('play');
            musicPointer10.classList.add('play');
            controls10.classList.add('play');
            audioPlayer1.pause();
            musicImage1.classList.remove('play');
            musicPointer1.classList.remove('play');
            controls1.classList.remove('play');
            audioPlayer2.pause();
            musicImage2.classList.remove('play');
            musicPointer2.classList.remove('play');
            controls2.classList.remove('play');
            audioPlayer3.pause();
            musicImage3.classList.remove('play');
            musicPointer3.classList.remove('play');
            controls3.classList.remove('play');
            audioPlayer4.pause();
            musicImage4.classList.remove('play');
            musicPointer4.classList.remove('play');
            controls4.classList.remove('play');
            audioPlayer5.pause();
            musicImage5.classList.remove('play');
            musicPointer5.classList.remove('play');
            controls5.classList.remove('play');
            audioPlayer6.pause();
            musicImage6.classList.remove('play');
            musicPointer6.classList.remove('play');
            controls6.classList.remove('play');
            audioPlayer7.pause();
            musicImage7.classList.remove('play');
            musicPointer7.classList.remove('play');
            controls7.classList.remove('play');
            audioPlayer8.pause();
            musicImage8.classList.remove('play');
            musicPointer8.classList.remove('play');
            controls8.classList.remove('play');
            audioPlayer9.pause();
            musicImage9.classList.remove('play');
            musicPointer9.classList.remove('play');
            controls9.classList.remove('play');
            audioPlayer11.pause();
            musicImage11.classList.remove('play');
            musicPointer11.classList.remove('play');
            controls11.classList.remove('play');
            audioPlayer12.pause();
            musicImage12.classList.remove('play');
            musicPointer12.classList.remove('play');
            controls12.classList.remove('play');
        });
        audioPlayer10.addEventListener('pause', function () {
            musicImage10.classList.remove('play');
            musicPointer10.classList.remove('play');
            controls10.classList.remove('play');
        });
    }
    if (audioPlayer11) {
        audioPlayer11.loop = true;
        // 11
        audioPlayer11.addEventListener('play', function () {
            musicImage11.classList.add('play');
            musicPointer11.classList.add('play');
            controls11.classList.add('play');
            audioPlayer1.pause();
            musicImage1.classList.remove('play');
            musicPointer1.classList.remove('play');
            controls1.classList.remove('play');
            audioPlayer2.pause();
            musicImage2.classList.remove('play');
            musicPointer2.classList.remove('play');
            controls2.classList.remove('play');
            audioPlayer3.pause();
            musicImage3.classList.remove('play');
            musicPointer3.classList.remove('play');
            controls3.classList.remove('play');
            audioPlayer4.pause();
            musicImage4.classList.remove('play');
            musicPointer4.classList.remove('play');
            controls4.classList.remove('play');
            audioPlayer5.pause();
            musicImage5.classList.remove('play');
            musicPointer5.classList.remove('play');
            controls5.classList.remove('play');
            audioPlayer6.pause();
            musicImage6.classList.remove('play');
            musicPointer6.classList.remove('play');
            controls6.classList.remove('play');
            audioPlayer7.pause();
            musicImage7.classList.remove('play');
            musicPointer7.classList.remove('play');
            controls7.classList.remove('play');
            audioPlayer8.pause();
            musicImage8.classList.remove('play');
            musicPointer8.classList.remove('play');
            controls8.classList.remove('play');
            audioPlayer9.pause();
            musicImage9.classList.remove('play');
            musicPointer9.classList.remove('play');
            controls9.classList.remove('play');
            audioPlayer10.pause();
            musicImage10.classList.remove('play');
            musicPointer10.classList.remove('play');
            controls10.classList.remove('play');
            audioPlayer12.pause();
            musicImage12.classList.remove('play');
            musicPointer12.classList.remove('play');
            controls12.classList.remove('play');
        });
        audioPlayer11.addEventListener('pause', function () {
            musicImage11.classList.remove('play');
            musicPointer11.classList.remove('play');
            controls11.classList.remove('play');
        });
    }
    if (audioPlayer12) {
        audioPlayer12.loop = true;
        // 12
        audioPlayer12.addEventListener('play', function () {
            musicImage12.classList.add('play');
            musicPointer12.classList.add('play');
            controls12.classList.add('play');
            audioPlayer1.pause();
            musicImage1.classList.remove('play');
            musicPointer1.classList.remove('play');
            controls1.classList.remove('play');
            audioPlayer2.pause();
            musicImage2.classList.remove('play');
            musicPointer2.classList.remove('play');
            controls2.classList.remove('play');
            audioPlayer3.pause();
            musicImage3.classList.remove('play');
            musicPointer3.classList.remove('play');
            controls3.classList.remove('play');
            audioPlayer4.pause();
            musicImage4.classList.remove('play');
            musicPointer4.classList.remove('play');
            controls4.classList.remove('play');
            audioPlayer5.pause();
            musicImage5.classList.remove('play');
            musicPointer5.classList.remove('play');
            controls5.classList.remove('play');
            audioPlayer6.pause();
            musicImage6.classList.remove('play');
            musicPointer6.classList.remove('play');
            controls6.classList.remove('play');
            audioPlayer7.pause();
            musicImage7.classList.remove('play');
            musicPointer7.classList.remove('play');
            controls7.classList.remove('play');
            audioPlayer8.pause();
            musicImage8.classList.remove('play');
            musicPointer8.classList.remove('play');
            controls8.classList.remove('play');
            audioPlayer9.pause();
            musicImage9.classList.remove('play');
            musicPointer9.classList.remove('play');
            controls9.classList.remove('play');
            audioPlayer10.pause();
            musicImage10.classList.remove('play');
            musicPointer10.classList.remove('play');
            controls10.classList.remove('play');
            audioPlayer11.pause();
            musicImage11.classList.remove('play');
            musicPointer11.classList.remove('play');
            controls11.classList.remove('play');
        });
        audioPlayer12.addEventListener('pause', function () {
            musicImage12.classList.remove('play');
            musicPointer12.classList.remove('play');
            controls12.classList.remove('play');
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    initAudioPlayer();
});

document.addEventListener('pjax:complete', function () {
    initAudioPlayer();
});