<template>
        <main>
        <section id="s1">
            <div class="container colors">
                <div class="row">
                    <div class="hex-1 col-4">
                        <div class="hex-2">
                            <div class="hex-3">
                                <div>
                                    White
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="hex-1 col-4">
                        <div class="hex-2">
                            <div class="hex-3">
                                <div>
                                    Gray
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="hex-1 col-4">
                        <div class="hex-2">
                            <div class="hex-3">
                                <div>
                                    Black
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="hex-1 col-4">
                        <div class="hex-2">
                            <div class="hex-3">
                                <div>
                                    Beige
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="hex-1 col-4">
                        <div class="hex-2">
                            <div class="hex-3">
                                <div>
                                    Neutral
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="hex-1 col-4">
                        <div class="hex-2">
                            <div class="hex-3">
                                <div>
                                    Metallic
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="hex-1 col-4">
                        <div class="hex-2">
                            <div class="hex-3">
                                <div>
                                    Blue
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="hex-1 col-4">
                        <div class="hex-2">
                            <div class="hex-3">
                                <div>
                                    Aqua
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="hex-1 col-4">
                        <div class="hex-2">
                            <div class="hex-3">
                                <div>
                                    Green
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="hex-1 col-4">
                        <div class="hex-2">
                            <div class="hex-3">
                                <div>
                                    Yellow
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="hex-1 col-4">
                        <div class="hex-2">
                            <div class="hex-3">
                                <div>
                                    Orange
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="hex-1 col-4">
                        <div class="hex-2">
                            <div class="hex-3">
                                <div>
                                    Pink
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="hex-1 col-4">
                        <div class="hex-2">
                            <div class="hex-3">
                                <div>
                                    Red
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="hex-1 col-4">
                        <div class="hex-2">
                            <div class="hex-3">
                                <div>
                                    Purple
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="s2"></section>
        <section id="s3">
            <h2>
                Lorem Ipsum
            </h2>
            <h3>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor tortor, aliquet eu risus eget,
                tristique scelerisque magna. Nullam vulputate nisi in sollicitudin faucibus. Nam erat magna, auctor at
                tempus ut, bibendum vitae turpis. Vivamus sagittis semper massa, ut luctus ipsum. Proin lorem dolor,
                pulvinar id nisi et, ultricies posuere lorem. Praesent vel accumsan nunc. Nunc id elit ac nisi
                scelerisque elementum. Nullam fringilla vel lacus accumsan placerat. Curabitur dui lectus, mattis at leo
                commodo, efficitur finibus orci. Suspendisse nec quam nulla. Aenean rhoncus libero vitae tortor
                condimentum interdum. Integer purus magna, pharetra vitae scelerisque eget, commodo vel metus. Duis
                ullamcorper hendrerit nibh, vitae placerat risus. Proin ut imperdiet magna. Suspendisse eget molestie
                enim. Vestibulum et est augue.

                Pellentesque placerat urna id laoreet porta. Sed iaculis libero porttitor orci hendrerit tempor.
                Vestibulum cursus, sem vitae elementum mattis, libero odio laoreet est, sed hendrerit ligula quam vel
                purus. Nam odio risus, fermentum sed lectus ac, tempus egestas nulla. Pellentesque pulvinar hendrerit
                turpis in viverra. Donec sed eros aliquet, blandit nisl in, ultrices leo. Nullam sed pharetra libero.
                Sed vitae enim lorem. Nunc interdum urna quis elementum molestie. Suspendisse euismod lorem facilisis
                magna blandit, auctor ornare nunc porta. Nullam sodales maximus diam, vel euismod enim vulputate sit
                amet. Nulla facilisi. Sed vitae aliquet elit. Aliquam ultrices enim et nunc pulvinar, sit amet
                pellentesque mauris ornare. Quisque fermentum magna ac elit maximus tincidunt. In vulputate dui ac
                faucibus mollis.
            </p>
        </section>
    </main>
</template>

<style scoped>
body{
    background-color: bisque;
}
div.hex-3{
    background-image:url('https://im0-tub-ru.yandex.net/i?id=0f5d7b4b43e52bca82577482df00e14f-l&ref=rim&n=13&w=1080&h=1350');
    padding: 18px;
}
.hex-1:nth-child(1n+5) .hex-3{
    background-position: bottom;
}
.hex-1:nth-child(3n+2) .hex-3{
    background-position-y: 100px;
}

.hex-1:nth-child(odd) .hex-3{
    background-position: center;
}

.hex-1{
    transform: rotate(120deg);
    overflow: hidden;
}
.hex-2{
    overflow: hidden;
    transform: rotate(-60deg);
}
.hex-3{
    overflow: hidden;
    transform: rotate(-60deg);
    height: 200px;
}
.hex-3 div{
    text-align: center;
}

main{
    background-color: white;
    border-radius: 9px;
    margin: -56px 27px 27px 27px;
    padding-bottom: 12px;
}

</style>
<style>
header{
   
    background-image:url('https://im0-tub-ru.yandex.net/i?id=0f5d7b4b43e52bca82577482df00e14f-l&ref=rim&n=13&w=1080&h=1350');
    color: white;
    height: 50vh;
    padding: 89px;
}
footer, header{
    background-size: 100%;

}
#s1{
    
    padding-top: 70px;
    padding-bottom: 70px;
}
#s2{
    background-image:url('https://www.wallpaperup.com/uploads/wallpapers/2019/01/11/1307752/69f6782a40dbca275a23b2dbbed1d428.jpg');
    height: 40vh;
}
#s3{
    background: gray;
    padding-bottom: 20px;
    padding: 8px;
    color:white;
}
footer{
    background-image:url('https://im0-tub-ru.yandex.net/i?id=0f5d7b4b43e52bca82577482df00e14f-l&ref=rim&n=13&w=1080&h=1350');
    padding: 16px;

}
footer a{
    color: black!important;
    padding-left: 8px;
    padding-right: 8px;
}
</style>