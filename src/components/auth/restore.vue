<template>
  <section class="">

    <loadingscreen/>

    <div class="center mw7 mw6-l" >
      <article class="dt center w-100">
        <div class="dtc tc pa0 v-mid vh-75 min-vh-75 f6 near-white">
          
          <div class="cf w-100 pt5-l"></div>

          <div class="pa2 cf w-100 center" style="max-width:280px" >

            <p class="db w-100 pv1 f6 white fw4"> Enter your passhrase to restore your account</p>

            <div class="cf w-100 pv2">
              <textarea class="white f6 fw4 bn pa2 dib w-100" rows="4" type="text" placeholder="your passhrase"></textarea>
            </div>

            <div class="cf w-100 pv2">
              <input class="white f6 fw4 bn pa2 dib w-100" type="text" placeholder="enter username"/>
            </div>

            <div class="cf w-100 pv2">
              <input class="white f6 fw4 bn pa2 dib w-100" type="password" placeholder="choose password"/>
            </div>

            <div class="cf w-100 pv2">
              <input class="white f6 fw4 bn pa2 dib w-100" type="password" placeholder="confirm password"/>
            </div>

            <div class="cf w-100 pv2"></div>

            <router-link to="/restore" class="cf tl pr5 no-underline inline-flex items-center pa2 white button relative">
                Restore Account
                <img src="@/assets/arrow-right.png" class="absolute right-0 pr2"/>
            </router-link>

            <div class="cf w-100 pt2">
              <router-link to="/signin" class="cf no-underline">
                <p class="near-white f7">remember your password? <label class="white pl3 underline">Sign In</label></p>
              </router-link>
            </div>

            
          </div>

        </div>
      </article>
    </div>
  </section>
</template>

<script type="text/javascript">
  import loadingscreen from "@/components/loading";

  export default {
    components: {
      "loadingscreen": loadingscreen,
    },
  }
</script>
