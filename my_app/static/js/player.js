document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById('play-button');
    const audioUrlInput = document.getElementById('audio-url');
    const audioElement = document.getElementById('audio-element');
    let isPlaying = false; // 记录播放状态
    let hasLoadedAudio = false; // 新增变量记录是否已加载过音频

    playButton.addEventListener('click', function() {
        const audioUrl = audioUrlInput.value;
        // 判断链接合法性
        if (!audioUrl) {
            alert('请输入有效的音频链接');
            // 重置链接
            audioUrlInput.value = '';
            return;
        }
        if (!hasLoadedAudio && audioUrl) {
            // 如果音频尚未加载过，则加载音频
            audioElement.src = audioUrl;
            hasLoadedAudio = true;
        }

        if (isPlaying) {
            // 如果正在播放，则暂停
            audioElement.pause();
            playButton.innerHTML = '<i class="fas fa-play"></i>';
            isPlaying = false;
        } else {
            // 如果音频暂停，则播放
            audioElement.play().then(() => {
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
                isPlaying = true;
            }).catch(error => {
                console.error('播放失败:', error);
            });
        }
    });

    // 添加对播放/暂停状态的控制
    audioElement.addEventListener('canplay', function() {
        // 当音频准备好播放时，更改播放按钮的图标
        if (audioElement.paused) {
            playButton.innerHTML = '<i class="fas fa-play"></i>'; // 播放图标
        } else {
            playButton.innerHTML = '<i class="fas fa-pause"></i>'; // 暂停图标
        }
    });

    audioElement.addEventListener('pause', function() {
        // 当音频暂停时，更改播放按钮的图标
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        isPlaying = false;
    });

    audioElement.addEventListener('playing', function() {
        // 当音频开始播放时，更改播放按钮的图标
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
        isPlaying = true;
    });

    // 处理加载背景图按钮点击事件
    const loadBackgroundButton = document.getElementById("load-background-button");
    const backgroundImageUrlInput = document.getElementById("background-url");

    loadBackgroundButton.addEventListener("click", function() {
        const backgroundImageUrl = backgroundImageUrlInput.value;
        if (backgroundImageUrl) {
            document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
        }
    });


});