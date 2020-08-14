<template>
  <div class="github">
    <div class="menu-container">
      <div class="row">
        <div class="water-mark">
          <div class="marker">Github</div>
          <h2 class="title">robin</h2>
        </div>
        <div>
          <!-- <img src="" class="" alt="svg image"> -->
        </div>
      </div>
    </div>
    <div class="banner-container">
      <div class="row">
        <div class="col-7 d-flex align-items-center">
          <div class="about-text">
            <small class="small-text"
              >Welcome to
              <span class="mobile-block">my portfolio website!</span></small
            >
            <h1 class="animated animated-text">
              <span class="mr-2">Hey folks, I'm</span>
              <div class="animated-info">
                <span class="animated-item">Bruce Jenn</span>
                <span class="animated-item">Web Front-End</span>
                <span class="animated-item">a Handyman</span>
              </div>
            </h1>

            <p>
              Building a successful product is a challenge. I am highly
              energetic in user experience design, interfaces and web
              development.
            </p>

            <div class="custom-btn-group mt-4">
              <button class="btn btn-opacity-light mr-2">Get started</button>
              <button class="btn btn-opacity-success">Learn more</button>
            </div>
          </div>
        </div>

        <div class="col-5">
          <div class="about-image svg">
            <img
              src="../assets/Group171.svg"
              class="img-fluid"
              alt="svg image"
            />
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="text-social">
      <div class="row">
        <div class="social">
          <div class="title">
            <span>socials</span>
          </div>
        </div>
      </div>
    </div>
    <div class="social-list-title">
      <div class="row">
        <p>content list</p>
      </div>
    </div>
    <!-- list -->
    <div class="content-list">
      <div class="row">
        <div class="single-post">
          <div class="inner-post">
            <div class="post-img">
              <a href="#"><img src="" alt="blog" /></a>
            </div>
            <div class="post-info">
              <div class="info-title">
                <h3><a href="#">Tourism in cox's bazar</a></h3>
              </div>
              <div class="info-content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dum my text ever since the when an unknown printer
                  took a galley of type and scrambled it to make aspecimen book.
                  It has survived not only five centuries, but also the leap
                  into typesetting, remaining essentially
                </p>
              </div>
              <div class="info-meta fix">
                <div class="meta-left pull-left">
                  <ul>
                    <li>
                      <span class="flaticon-man-user user"></span>
                      <p>By <a href="#">Admin</a></p>
                    </li>
                    <li>
                      <span class="flaticon-calendar clendar"></span>
                      <p>20 Jan 2018</p>
                    </li>
                  </ul>
                </div>
                <div class="meta-readmore pull-right">
                  <a href="#" class="readmore-btn">Read More <span>+</span></a>
                </div>
              </div>
            </div>
          </div>
          <div class="post-date one">
            <span>01</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Github",
};
</script>

<style lang="scss">
.github {
  position: relative;
}
.col-12 {
  flex: 0 0 100%;
  position: relative;
  width: 100%;
  max-width: 100%;
}
.col-7 {
  flex: 0 0 58.333333%;
  position: relative;
  width: 100%;
  max-width: 58.333333%;
}
.col-5 {
  flex: 0 0 41.666667%;
  position: relative;
  width: 100%;
  max-width: 41.666667%;
}
.menu-container {
  position: relative;
  background-color: #f3f3f3;
}
::selection {
  color: #fff;
  background-color: #fec4af;
}
.water-mark {
  position: relative;
  margin: 5px 20px;
  .title {
    position: relative;
    font-size: 32px;
    // font-weight: 500;
    text-transform: uppercase;
    display: inline-block;
    color: #f8c22d;
    &:after,
    &:before {
      box-sizing: border-box;
      content: "";
      position: absolute;
      height: 1px;
      background-color: black;
      left: 0;
      margin: 2px;
    }
    &:after {
      width: 75%;
      top: -9px;
    }
    &:before {
      width: 40%;
      bottom: -7px;
    }
  }
  .marker {
    position: absolute;
    font-size: 60px;
    font-weight: 900;
    opacity: 0.1;
    text-transform: uppercase;
    left: 0;
    top: 18px;
  }
}
.text-social {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  .social {
    height: 200px;
    width: 200px;
    border: 2px solid #090909;
    border-top: none;
    position: relative;
    margin-top: 30px;
    margin: 30px auto 0px;
    &:before {
      content: "";
      position: absolute;
      background-color: #090909;
      width: 20px;
      height: 2px;
      top: 0;
      left: 0;
    }
    &:after {
      content: "";
      position: absolute;
      background-color: #090909;
      width: 150px;
      height: 2px;
      top: 0;
      right: 0;
    }
    .title {
      transform: rotate(-90deg);
      text-align: center;
      position: absolute;
      left: 0;
      text-transform: uppercase;
      span {
        color: #090909;
      }
    }
  }
}

.social-list-title {
  width: 100%;
  background-color: #fff;
  .row {
    justify-content: center;
    height: 50px;
  }
  p {
    display: inline-block;
    top: -50px;
    color: #090909;
    position: relative;
    text-transform: uppercase;
  }
}

a:active,
a:focus,
a:hover,
a:visited {
  text-decoration: none;
  outline: 0;
  color: #6c62ff;
}
.fix {
  overflow: hidden;
}
.pull-left {
  float: left !important;
}
.content-list {
  width: 100%;
  background-color: #fff;
  padding: 10px 50px;
  .single-post {
    position: relative;
    margin-bottom: 70px;
    margin: 0 auto;
    max-width: 1124px;
    .inner-post {
      padding: 40px;
      overflow: hidden;
      box-shadow: 0 0 5px #dcdbff;
      transition: box-shadow 0.5s;
      &:hover {
        box-shadow: 0 0 20px #dcdbff;
      }
      .post-img {
        float: left;
        width: 30%;
      }
      .post-info {
        float: left;
        width: 70%;
        padding-left: 30px;
        .info-title h3 {
          font-size: 24px;
          line-height: 26px;
          font-weight: 600;
          margin-top: 10px;
          margin-bottom: 18px;
        }
        .info-content p {
          font-size: 16px;
          color: #333333;
          line-height: 26px;
          margin-bottom: 25px;
        }
        .info-meta {
          .meta-left ul {
            margin: 0;
            padding: 0;
            list-style: none;
            li {
              display: inline-block;
              margin-right: 30px;
              p {
                margin: 0;
                display: inline-block;
                font-size: 18px;
                color: #333333;
              }
            }
          }
          .meta-readmore {
            .readmore-btn {
              display: inline-block;
              font-size: 18px;
              color: #333;
              font-weight: 500;
              text-transform: capitalize;

              transition: all 0.5s;
              span {
                transition: all 0.5s;
                display: inline-block;
              }
              &:hover span {
                color: #6c62ff;

                transform: rotate(360deg);
              }
            }
          }
        }
      }
    }
    .post-date {
      position: absolute;
      right: 0;
      top: 0;
      span {
        width: 100px;
        height: 90px;
        background: #7167ff;
        color: #ffffff;
        font-size: 40px;
        font-weight: 500;
        display: inline-block;
        text-align: center;
        padding: 15px 0;
        padding-left: 20px;
        border-radius: 0px 0px 0px 100px;
        transition: all 0.5s;
      }
    }
  }
}

.banner-container {
  width: 100%;
  padding: 20px;
  background-color: #f7f8fa;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.align-items-center {
  align-items: center !important;
}
.justify-content-center {
  justify-content: center !important;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.d-flex {
  display: flex !important;
}
.btn {
  cursor: pointer;
  padding: 0.625rem 1.25rem;
  outline: none;
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  line-height: 1.5;
  border-radius: 0.1875rem;
}
.btn-opacity-light {
  color: #fc7341;
  background-color: #fec4af;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fc7341;
    background-color: #fff;
    border: 2px solid #fc7341;
  }
}

.btn-opacity-success {
  color: #178e73;
  background-color: #b7eddd;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #178e73;
    background-color: #fff;
    border: 2px solid #5ed6b3;
  }
}

// ====

.small-text {
  color: #5b5b5b;
  font-size: 14px;
  font-weight: bold;
  // padding: 8px 16px;
  border-radius: 50px;
  letter-spacing: 0.2px;
}

h1 {
  color: #212121;
  font-size: 2.8em;
  margin: 24px 0;
}
.mr-2 {
  margin-right: 0.5rem !important;
}
.mt-4 {
  margin-top: 1.5rem !important;
}
.animated-info {
  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
  min-width: 280px;
  position: relative;
}
.animated-item {
  font-size: 38px;
  color: #ffc200;
  line-height: inherit;
  display: block;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  animation: BottomTotop 6s linear infinite 0s;
}
.animated-item:nth-child(2n + 2) {
  animation-delay: 2s;
}
.animated-item:nth-child(3n + 3) {
  animation-delay: 4s;
}
@keyframes BottomTotop {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    transform: translateY(5px);
  }
  10% {
    opacity: 1;
    transform: translateY(0px);
  }
  25% {
    opacity: 1;
    transform: translateY(0px);
  }
  30% {
    opacity: 0;
    transform: translateY(5px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

p {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
  color: #5b5b5b;
}
</style>
