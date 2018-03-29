﻿room.onLoad = function () {
    room.playSound("backgroundsound01");
}

room.update = function (dt) {

}

function LightOff() {
    room.objects["OmniLight"].light_intensity = 0;
}

function LightOn() {
    room.objects["OmniLight"].light_intensity = 200;
}

function SetLightProperties() {
    room.objects["OmniLight"].col = "#2668b2";
    room.objects["OmniLight"].light_intensity = 16;
}

function StartMusic() {

    room.playSound("backgroundsound01");

}