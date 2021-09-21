<template>
     <main>

        <div class="section">
            <div class="container">
            <div class="md-layout">
                <div
                class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
                >
                <h2 class="title text-center">Let's talk product</h2>
                <h5 class="description">
                    This is the paragraph where you can write more details about
                    your product. Keep you user engaged by providing meaningful
                    information. Remember that by this time, the user is curious,
                    otherwise he wouldn't scroll to get here. Add a button if you
                    want the user to see more.
                </h5>
                </div>
            </div>
            <div class="features text-center">
                <div class="md-layout">
                <div class="md-layout-item md-medium-size-33 md-small-size-100">
                    <div class="info">
                    <div class="icon icon-info">
                        <md-icon>chat</md-icon>
                    </div>
                    <h4 class="info-title">Free Chat</h4>
                    <p>
                        Divide details about your product or agency work into parts.
                        Write a few lines about each one. A paragraph describing a
                        feature will be enough.
                    </p>
                    </div>
                </div>
                <div class="md-layout-item md-medium-size-33 md-small-size-100">
                    <div class="info">
                    <div class="icon icon-success">
                        <md-icon>verified_user</md-icon>
                    </div>
                    <h4 class="info-title">Verified Users</h4>
                    <p>
                        Divide details about your product or agency work into parts.
                        Write a few lines about each one. A paragraph describing a
                        feature will be enough.
                    </p>
                    </div>
                </div>
                <div class="md-layout-item md-medium-size-33 md-small-size-100">
                    <div class="info">
                    <div class="icon icon-danger">
                        <md-icon>fingerprint</md-icon>
                    </div>
                    <h4 class="info-title">Fingerprint</h4>
                    <p>
                        Divide details about your product or agency work into parts.
                        Write a few lines about each one. A paragraph describing a
                        feature will be enough.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
       
        </div>
        <section id="s2">
          
          <h2 >Here is our team</h2>
          <hr>
          <div class="container">
          <div class="row">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg1"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Gigi Hadid
                      <br />
                      <small class="card-description text-muted">Model</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        You can write here details about one of your team
                        members. You can give more details about what they do.
                        Feel free to add some <a href="#">links</a> for people
                        to be able to follow them outside the site.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg2"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Carla Hortensia
                      <br />
                      <small class="card-description text-muted"
                        >Designer</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        You can write here details about one of your team
                        members. You can give more details about what they do.
                        Feel free to add some <a href="#">links</a> for people
                        to be able to follow them outside the site.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg3"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Kendall Jenner
                      <br />
                      <small class="card-description text-muted">Model</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        You can write here details about one of your team
                        members. You can give more details about what they do.
                        Feel free to add some <a href="#">links</a> for people
                        to be able to follow them outside the site.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
            <div class="container">
                <div class="row">
                    <div class="col-6">Pellentesque placerat urna id laoreet porta. Sed iaculis libero porttitor orci
                        hendrerit tempor.
                        Vestibulum cursus, sem vitae elementum mattis, libero odio laoreet est, sed hendrerit ligula
                        quam vel
                        purus. Nam odio risus, fermentum sed lectus ac, tempus egestas nulla. Pellentesque pulvinar
                        hendrerit
                        turpis in viverra. Donec sed eros aliquet, blandit nisl in, ultrices leo. Nullam sed pharetra
                        libero.
                      </div>
                    <div class="col-6">Nam odio risus, fermentum sed lectus ac, tempus egestas nulla. Pellentesque pulvinar
                        hendrerit
                        turpis in viverra. Donec sed eros aliquet, blandit nisl in, ultrices leo. Nullam sed pharetra
                        libero.
                        Sed vitae enim lorem. Nunc interdum urna quis elementum molestie. Suspendisse euismod lorem
                        facilisis
                        magna blandit, auctor ornare nunc porta. Nullam sodales maximus diam, vel euismod enim vulputate
                        sit
                        amet. Nulla facilisi. Sed vitae aliquet elit. Aliquam ultrices enim et nunc pulvinar, sit amet
                        pellentesque mauris ornare. Quisque fermentum magna ac elit maximus tincidunt. In vulputate dui
                        ac
                        faucibus mollis.</div>
                </div>
            </div>
        </section>

    </main>
</template>
<script>
export default {
    props:{
        teamImg1:{
            type: String,
            default: 'https://i.pinimg.com/originals/51/d9/d3/51d9d325f3e5cc7a3c8ce9fe822e914a.jpg'
        },
        teamImg2: {
            type: String,
            default: require("@/assets/img/faces/christian.jpg")
        },
        teamImg3:{
            default:'https://im0-tub-ru.yandex.net/i?id=b2ed5f2ed1d3a0972a14c823463c48eb&ref=rim&n=33&w=141&h=150'
        }
    }
}
</script>